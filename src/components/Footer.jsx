import React from "react";

const Footer = ({ darkMode }) => {
  return (
    <>
      <div
        className={`footer__container ${
          darkMode ? "dark__footer" : "ligth__footer"
        } `}
      >
        <p>
          Challengue by Frontend Mentor. Coded by
          <a href="https://github.com/LilDre7">
            <span>Lil dree</span>
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
