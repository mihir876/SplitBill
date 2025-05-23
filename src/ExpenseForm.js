import React, { useState } from "react";

export default function ExpenseForm({
  friends,
  selectedFriendId,
  onAddExpense,
  darkMode,
}) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [payer, setPayer] = useState("you");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!description || !amount || !payer || !selectedFriendId) return;

    onAddExpense({
      description,
      amount: Number(amount),
      payer,
    });

    setDescription("");
    setAmount("");
    setPayer("you");
  };

  return (
    <form
      className={`card ${darkMode ? "dark-card" : "light-card"}`}
      onSubmit={submitHandler}
    >
      <h2>Add Expense</h2>
      <label htmlFor="desc">Description</label>
      <input
        id="desc"
        type="text"
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={`input ${darkMode ? "dark-input" : "light-input"}`}
      />
      <label htmlFor="amount">Amount</label>
      <input
        id="amount"
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className={`input ${darkMode ? "dark-input" : "light-input"}`}
      />
      <label htmlFor="payer">Paid By</label>
      <select
        id="payer"
        value={payer}
        onChange={(e) => setPayer(e.target.value)}
        className={`input ${darkMode ? "dark-input" : "light-input"}`}
      >
        <option value="you">You</option>
        <option value="friend">Friend</option>
      </select>
      <button type="submit" className="add-btn">
        Add Expense
      </button>
    </form>
  );
}
