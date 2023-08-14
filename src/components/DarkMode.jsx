import React, { useState } from "react";
import SearchUser from "./SearchUser";
import Footer from "./Footer";
import Nav from "./Nav";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container__App ${darkMode ? "dark" : "light"} `}>
      <div className="header__container">
        <Nav />
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
