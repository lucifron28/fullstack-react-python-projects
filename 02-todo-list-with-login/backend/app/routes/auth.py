from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from passlib.context import CryptContext
from app import models, database, auth

router: APIRouter = APIRouter()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_db():
    db = database.Sessionlocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/login")
def login(email: str, password: str, db: Session = Depends(get_db)) -> dict:
    user = db.query(models.User).filter(models.User.email == email).first()
    if not user or not pwd_context.verify(password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid Credentials")
    access_token = auth.create_access_token({"sub": str(user.id)})
    refresh_token = auth.create_refresh_token({"sub": str(user.id)})
    return {"access_token": access_token, "refresh_token": refresh_token}


@router.post("/register")
def register(email: str, password: str, db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.email == email).first()
    if user:
        raise HTTPException(status_code=400, detail="Email already registered")
    hashed_password = pwd_context.hash(password)
    new_user = models.User(email=email, hashed_password=hashed_password)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return {"msg": "User registered successfully"}