from pathlib import Path

import joblib


BASE_DIR = Path(__file__).resolve().parent.parent

model = joblib.load(BASE_DIR / "models" / "fraud_detector.pkl")
scaler = joblib.load(BASE_DIR / "models" / "scaler.pkl")


def predict_transaction(features: list[float]) -> dict:
    scaled_features = scaler.transform([features])

    prediction = int(model.predict(scaled_features)[0])
    fraud_probability = float(model.predict_proba(scaled_features)[0][1])

    if fraud_probability >= 0.7:
        risk_level = "High"
    elif fraud_probability >= 0.3:
        risk_level = "Medium"
    else:
        risk_level = "Low"

    return {
        "prediction": "Fraudulent" if prediction == 1 else "Legitimate",
        "fraud_probability": round(fraud_probability * 100, 2),
        "confidence": round(max(fraud_probability, 1 - fraud_probability) * 100, 2),
        "risk_level": risk_level,
    }