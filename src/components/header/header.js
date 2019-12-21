import React, { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { Link } from "react-router-dom";
import "./header.scss";
import Typography from "@material-ui/core/Typography";
import { auth } from "../../firebase/util";

const Header = () => {
  const { authenticated } = useContext(UserContext);
  console.log(authenticated,"rendering");
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Typography variant="h5">Company name</Typography>
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          Shop
        </Link>

        <Link to="/contact" className="option">
          Contact
        </Link>
        {authenticated ? (
          <Link
            className="option"
            onClick={async () => {
              await auth.signOut()
              localStorage.clear("userId");
              
            }}
          >
            Logout
          </Link>
        ) : (
          null
        )}
        <Link to={authenticated?'/admin/dahboard':'/admin'} className="option">
            Admin
          </Link>
      </div>
    </div>
  );
};

export default Header;
