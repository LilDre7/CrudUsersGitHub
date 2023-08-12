import React, { useState } from "react";
import Header from "./Header";
import SearchUser from "./SearchUser";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div className={`App ${darkMode ? "dark" : "light"} `}>
        <div className="header__container">
          <Header />
          <button className="header__button" onClick={handleDarkMode}>
            {darkMode ? "DARK" : "LIGHT"}
            <i className="bx bx-sun"></i>
          </button>
        </div>
        <SearchUser />
      </div>
    </>
  );
};

export default DarkMode;