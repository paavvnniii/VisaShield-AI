# VisaShield AI

An end-to-end credit card fraud detection platform combining machine learning, a FastAPI REST backend, and a professional React dashboard.

## Overview

VisaShield AI evaluates transaction information and returns:

- Transaction classification
- Fraud probability
- Prediction confidence
- Risk level

The project was developed using the European Credit Card Fraud Detection dataset containing 284,807 anonymized transactions.

> This is an independent educational portfolio project and is not affiliated with Visa Inc.

## Screenshots

### Dashboard

![VisaShield AI Dashboard](assets/screenshots/dashboard.png)

### Real-Time Prediction

![Fraud Prediction](assets/screenshots/prediction.png)

### FastAPI Documentation

![Swagger API](assets/screenshots/swagger-api.png)



## Model Performance

| Model | Precision | Recall | F1 Score |
|---|---:|---:|---:|
| Logistic Regression | 0.80 | 0.52 | 0.63 |
| Logistic Regression + Scaling | 0.83 | 0.63 | 0.72 |
| Logistic Regression + SMOTE | 0.06 | 0.92 | 0.11 |
| Random Forest + SMOTE | **0.87** | **0.80** | **0.83** |
| XGBoost + SMOTE | 0.58 | 0.85 | 0.69 |

Random Forest was selected because it achieved the strongest overall precision–recall balance with an F1 score of 0.83.

## Tech Stack

### Machine Learning

- Python
- Pandas
- NumPy
- Scikit-learn
- Imbalanced-learn
- XGBoost
- Joblib

### Backend

- FastAPI
- Pydantic
- Uvicorn
- Swagger / OpenAPI

### Frontend

- React
- Vite
- Tailwind CSS
- Axios
- React Router
- Recharts
- Lucide React

## Architecture

```text
React Dashboard
       |
       | Axios HTTP Request
       v
FastAPI REST API
       |
       | StandardScaler
       v
Random Forest Model
       |
       v
Prediction + Confidence + Fraud Risk + Risk Level
