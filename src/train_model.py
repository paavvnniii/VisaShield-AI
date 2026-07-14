from pathlib import Path
import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import (
    accuracy_score,
    confusion_matrix,
    classification_report
)

# ----------------------------
# Load Dataset
# ----------------------------

BASE_DIR = Path(__file__).resolve().parent.parent
DATA_PATH = BASE_DIR / "data" / "creditcard.csv"

df = pd.read_csv(DATA_PATH)

# ----------------------------
# Features & Target
# ----------------------------

X = df.drop("Class", axis=1)
y = df["Class"]

# ----------------------------
# Train Test Split
# ----------------------------

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

# ----------------------------
# Feature Scaling
# ----------------------------

scaler = StandardScaler()

X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# ----------------------------
# Train Logistic Regression
# ----------------------------

model = LogisticRegression(max_iter=1000)

model.fit(X_train, y_train)

# ----------------------------
# Prediction
# ----------------------------

predictions = model.predict(X_test)

# ----------------------------
# Evaluation
# ----------------------------

print("=" * 50)
print("LOGISTIC REGRESSION RESULTS")
print("=" * 50)

print(f"\nAccuracy : {accuracy_score(y_test, predictions):.4f}")

print("\nConfusion Matrix")
print(confusion_matrix(y_test, predictions))

print("\nClassification Report")
print(classification_report(y_test, predictions))