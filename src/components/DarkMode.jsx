import React, { useState } from "react";
import Header from "./Header";
import SearchUser from "./SearchUser";
import Footer from "./Footer";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container__App ${darkMode ? "dark" : "light"} `}>
      <div className="header__container">
        <Header />
        <button className="header__button" onClick={handleDarkMode}>
          {darkMode ? "DARK" : "LIGHT"}
          <i className="bx bx-sun"></i>
        </button>
      </div>
      <SearchUser darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default DarkMode;
