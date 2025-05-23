import React, { useState, useEffect } from "react";

export default function Header({ darkMode, toggleDarkMode }) {
  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <header>
      <h1>Split Bill App</h1>
      <button className="toggle-btn" onClick={toggleDarkMode}>
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </header>
  );
}
