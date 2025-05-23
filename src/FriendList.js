import React, { useState } from "react";

export default function FriendList({
  friends,
  selectedFriendId,
  setSelectedFriendId,
  addFriend,
  onRemoveFriend,
  darkMode,
}) {
  const [friendName, setFriendName] = useState("");

  const handleAddFriend = (e) => {
    e.preventDefault();
    if (!friendName.trim()) return;
    addFriend(friendName);
    setFriendName("");
  };

  const handleDeleteClick = (id) => {
    if (window.confirm("Are you sure you want to remove this friend?")) {
      onRemoveFriend(id);
    }
  };

  return (
    <section className={`card ${darkMode ? "dark-card" : "light-card"}`}>
      <h2>Friends</h2>
      {friends.length === 0 ? (
        <p>No friends added yet.</p>
      ) : (
        <ul>
          {friends.map((friend) => (
            <li
              key={friend.id}
              className={friend.id === selectedFriendId ? "selected" : ""}
              onClick={() => setSelectedFriendId(friend.id)}
            >
              {friend.name} – ₹{friend.currentAmount.toFixed(2)}
              <button
                className="remove-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteClick(friend.id);
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <form onSubmit={handleAddFriend} className="add-friend-form">
        <input
          type="text"
          placeholder="Enter friend name"
          value={friendName}
          onChange={(e) => setFriendName(e.target.value)}
          className={`input ${darkMode ? "dark-input" : "light-input"}`}
        />
        <button type="submit" className="add-btn">
          Add Friend
        </button>
      </form>
    </section>
  );
}
