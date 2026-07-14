import pandas as pd

# Load the dataset
df = pd.read_csv("data/creditcard.csv")

print("=" * 50)
print("Dataset Loaded Successfully!")
print("=" * 50)

print("\nFirst 5 Rows:")
print(df.head())

print("\nDataset Shape:")
print(df.shape)

print("\nColumn Names:")
print(df.columns)

print("\nMissing Values:")
print(df.isnull().sum())

print("\nFraud vs Legitimate Transactions:")
print(df["Class"].value_counts())