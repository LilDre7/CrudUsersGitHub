import React, { useState } from "react";

const Nav = ({ darkMode }) => {
  // Crear un menu responsive
  const [isNav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!isNav);
  };

  return (
    <div className="menu">
      <div className={`menu-toggle ${isNav ? "open" : ""}`} onClick={handleNav}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul
        className={`menu-items ${darkMode ? "dark__menu" : "ligth__menu"} ${
          isNav ? "open" : ""
        }`}
      >
        <li>Lil Dre</li>
        <li>Portafolio</li>
        <li>LinkedIn</li>
        <li>Contacto</li>
      </ul>
    </div>
  );
};

export default Nav;
