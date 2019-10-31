import React from "react";
import "./customButton.scss";

const customButton = ({ children, isSignIn, inverted, ...rest }) => {
  return (
    <button
      {...rest}
      className={`${inverted ? "inverted" : ""} ${
        isSignIn ? "sign-in" : ""
      } custom-button`}
    >
      {children}
    </button>
  );
};

export default customButton;
