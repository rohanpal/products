import React, { Component } from "react";
import displayData from "./displayData";
import DisplayPreview from "../../components/displayPreview/displayPreview";

export class displayPage extends Component {
  state = {
    collections: displayData
  };
  render() {
    return (
      <div >
        {this.state.collections.map(({ id, ...otherProps }) => (
          <div key={id}>
            <DisplayPreview {...otherProps}/>
          </div>
        ))}
      </div>
    );
  }
}

export default displayPage;
