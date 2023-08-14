import React, { useState } from "react";

const Nav = () => {
  // Crear un menu responsive
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    console.log("changeModal");
  };

  return <div className="nav__container"></div>;
};

export default Nav;
