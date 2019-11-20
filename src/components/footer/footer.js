import React from "react";
import Typography from "@material-ui/core/Typography";
import './footer.scss'

const footer = () => {
  return (
    <div className="footer">
      <div className="about-us">
        <Typography variant="body1">
          Our company is great Our company is great Our company is great Our
          company is great Our company is great Our company is great Our company
          is great Our company is great Our company is great Our company is
          great Our company is great{" "}
        </Typography>
      </div>
      <div>
          <Typography variant="body1"> Get in touch</Typography>
      </div>
      <div className="address">
          Adress, 203 Dehradun Uttarakhand
      </div>
    </div>
  );
};

export default footer;
