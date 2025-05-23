import React from "react";

export default function TransactionHistory({ transactions }) {
  if (!transactions || transactions.length === 0) {
    return <p>No transactions yet.</p>;
  }

  return (
    <div className="transaction-history">
      <h3>Transaction History</h3>
      <ul>
        {transactions.map((tx, index) => (
          <li key={index} className={tx.amount >= 0 ? "positive" : "negative"}>
            <span>{tx.description || "No description"}</span>
            <span>{tx.amount >= 0 ? `+₹${tx.amount}` : `-₹${Math.abs(tx.amount)}`}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
