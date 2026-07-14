from pathlib import Path
import pandas as pd
import matplotlib.pyplot as plt

# Load dataset
BASE_DIR = Path(__file__).resolve().parent.parent
DATA_PATH = BASE_DIR / "data" / "creditcard.csv"

df = pd.read_csv(DATA_PATH)

# Count fraud vs legitimate
counts = df["Class"].value_counts()

plt.figure(figsize=(6,4))
plt.bar(["Legitimate", "Fraud"], counts)

plt.title("Fraud vs Legitimate Transactions")
plt.xlabel("Transaction Type")
plt.ylabel("Count")

plt.show()