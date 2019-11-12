import React from "react";
import DisplayItem from "../displayItem/displayItem";
import './displayPreview.scss'

function displayPreview({ itemType, items }) {
  return (
    <div className="display-preview">
      <h1 className="title">{itemType.toUpperCase()}</h1>
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

// SIZE: "4.5"
// SNO: "1"
// codeNo: "1351"
// itemType: "DOOR KNOCKER"
// material: "IRON"
// picture: "https://firebasestorage.goog
