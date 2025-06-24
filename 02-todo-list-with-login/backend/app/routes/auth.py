from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from passlib.context import CryptContext
from app import models, database, auth
from app.schemas import AuthRequest, RefreshRequest, RegisterResponse, TokenResponse

router: APIRouter = APIRouter()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_db():
    db = database.Sessionlocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/login", response_model=TokenResponse)
def login(auth_req: AuthRequest, db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.email == auth_req.email).first()
    if not user or not pwd_context.verify(auth_req.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid Credentials")
    access_token = auth.create_access_token({"sub": str(user.id)})
    refresh_token = auth.create_refresh_token({"sub": str(user.id)})
    return {"access_token": access_token, "refresh_token": refresh_token}

@router.post("/register", response_model=RegisterResponse)
def register(auth_req: AuthRequest, db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.email == auth_req.email).first()
    if user:
        raise HTTPException(status_code=400, detail="Email already registered")
    hashed_password = pwd_context.hash(auth_req.password)
    new_user = models.User(email=auth_req.email, hashed_password=hashed_password)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return {"msg": "User registered successfully"}

@router.post("/refresh", response_model=TokenResponse)
def refresh_token(refresh_req: RefreshRequest):
    payload = auth.verify_token(refresh_req.refresh_token, token_type="refresh")
    if not payload:
        raise HTTPException(status_code=401, detail="Invalid refresh token")
    user_id = payload.get("sub")
    access_token = auth.create_access_token({"sub": user_id})
    refresh_token = auth.create_refresh_token({"sub": user_id})
    return {"access_token": access_token, "refresh_token": refresh_token}