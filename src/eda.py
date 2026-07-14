from pathlib import Path
import pandas as pd

# Project root
BASE_DIR = Path(__file__).resolve().parent.parent

# Dataset path
DATA_PATH = BASE_DIR / "data" / "creditcard.csv"

# Load dataset
df = pd.read_csv(DATA_PATH)

print("=" * 60)
print("DATASET INFORMATION")
print("=" * 60)

print("\nShape of Dataset:")
print(df.shape)

print("\n")

print(df.info())

print("\n")

print("=" * 60)
print("FIRST FIVE ROWS")
print("=" * 60)

print(df.head())

print("\n")

print("=" * 60)
print("STATISTICAL SUMMARY")
print("=" * 60)

print(df.describe())

print("\n")

print("=" * 60)
print("MISSING VALUES")
print("=" * 60)

print(df.isnull().sum())

print("\n")

print("=" * 60)
print("CLASS DISTRIBUTION")
print("=" * 60)

print(df["Class"].value_counts())

print("\n")

fraud_percentage = (df["Class"].sum() / len(df)) * 100

print(f"Fraud Percentage: {fraud_percentage:.4f}%")python src/eda.py