from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app import models, database
# from app.routes import auth, todos

models.Base.metadata.create_all(bind=database.engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# app.include_router(auth.router, prefix="/auth", tags=["Auth"])
# app.include_router(todos.router, prefix="/todos", tags=["Todos"])
