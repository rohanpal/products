import React from "react";
import "./menu-item.scss";
import {Link} from 'react-router-dom'
const menuItem = ({ title, imageUrl, size }) => {
  return (
    <Link className={`menu-item ${size}`} to="/shop">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">View Now</span>
      </div>
    </Link>
  );
};

export default menuItem;
