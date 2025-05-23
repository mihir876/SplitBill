import React, { useState } from "react";
import Header from "./Header";
import FriendList from "./FriendList";
import ExpenseForm from "./ExpenseForm";

function App() {
  const [friends, setFriends] = useState([]);
  const [selectedFriendId, setSelectedFriendId] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const addFriend = (name) => {
    const newFriend = {
      id: Date.now(),
      name,
      currentAmount: 0,
    };
    setFriends((prev) => [...prev, newFriend]);
    setSelectedFriendId(newFriend.id);
  };

  const handleRemoveFriend = (id) => {
    setFriends((prev) => prev.filter((friend) => friend.id !== id));
    if (selectedFriendId === id) {
      setSelectedFriendId(null);
    }
    setExpenses((prev) => prev.filter((expense) => expense.friendId !== id));
  };

  const addExpense = ({ description, amount, payer }) => {
    if (!selectedFriendId) return;

    const expense = {
      id: Date.now(),
      description,
      amount,
      payer,
      friendId: selectedFriendId,
    };

    setExpenses((prev) => [...prev, expense]);

    setFriends((prevFriends) =>
      prevFriends.map((friend) => {
        if (friend.id === selectedFriendId) {
          let newAmount = friend.currentAmount;
          if (payer === "you") {
            newAmount += amount; // friend owes you
          } else if (payer === "friend") {
            newAmount -= amount; // you owe friend
          }
          return { ...friend, currentAmount: newAmount };
        }
        return friend;
      })
    );
  };

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="main-container">
        <FriendList
          friends={friends}
          selectedFriendId={selectedFriendId}
          setSelectedFriendId={setSelectedFriendId}
          addFriend={addFriend}
          onRemoveFriend={handleRemoveFriend}
          darkMode={darkMode}
        />
        <ExpenseForm
          friends={friends}
          selectedFriendId={selectedFriendId}
          onAddExpense={addExpense}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
}

export default App;
