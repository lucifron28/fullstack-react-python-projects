from pydantic import BaseModel


class AuthRequest(BaseModel):
    email: str
    password: str

class TokenResponse(BaseModel):
    access_token: str
    refresh_token: str

class RegisterResponse(BaseModel):
    msg: str

class RefreshRequest(BaseModel):
    refresh_token: str

