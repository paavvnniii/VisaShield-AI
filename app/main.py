from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from app.predict import predict_transaction


app = FastAPI(
    title="VisaShield AI API",
    version="1.0.0",
    description="Payment fraud detection prototype API",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class TransactionRequest(BaseModel):
    amount: float = Field(ge=0)
    time: float = Field(ge=0)


@app.get("/")
def home():
    return {
        "name": "VisaShield AI",
        "status": "healthy",
    }


@app.get("/health")
def health():
    return {"status": "healthy"}


@app.post("/api/predict")
def predict(transaction: TransactionRequest):
    features = [0.0] * 30

    features[0] = transaction.time
    features[29] = transaction.amount

    return predict_transaction(features)