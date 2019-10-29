import React from "react";
import "./menu-item.scss";
const menuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`menu-item ${size}`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">View Now</span>
      </div>
    </div>
  );
};

export default menuItem;
