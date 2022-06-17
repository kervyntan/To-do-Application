import React from "react";

const Header = ({ text, bgColor, textColor }) => {
  /* const headerStyles = {
    backgroundColor: bgColor,
    color: textColor
  };
  */
  return (
    <header>
      <h3 className="header-text"> {text} </h3>
    </header>
  );
};

export default Header;

/* Header.defaultProps = {
  text: "To-do List",
  bgColor: "#e6e6ea",
  textColor: "black"
};
*/
