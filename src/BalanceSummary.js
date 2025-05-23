import React from "react";

export default function BalanceSummary({ balance, friendName }) {
  return (
    <div className="balance-summary">
      {balance === 0 ? (
        <p>You are even with {friendName}.</p>
      ) : balance > 0 ? (
        <p>{friendName} owes you ₹{balance}.</p>
      ) : (
        <p>You owe {friendName} ₹{Math.abs(balance)}.</p>
      )}
    </div>
  );
}
