import React from "react";
import DisplayItem from "../displayItem/displayItem";
import './displayPreview.scss'

function displayPreview({ title, items }) {
  return (
    <div className="display-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <DisplayItem key={item.idx} item={item} />
          ))}
      </div>
    </div>
  );
}

export default displayPreview;
