import React from "react";

const Footer = (props) => {
  const text = "Made by " + props.person;
  return (
    <footer>
      <h3 className="footer text-align">{text}</h3>
    </footer>
  );
};

export default Footer;
