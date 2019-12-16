import React, { Component, useState, useContext } from "react";
import "./admin.scss";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

import { auth } from "../../firebase/util";
import useFormHook from "../../hooks/formHook";
import { UserContext } from "../../contexts/userContext";

const Admin = props => {
  const {authenticated, setAuthenticated} = useContext(UserContext);
  

  const [email, setEmail, resetEmail] = useFormHook("");
  const [password, setPassword, resetPassword] = useFormHook("");
  const [error, setError] = useState("");
  if(authenticated){
    return props.history.push("/admin/dashboard")
  }

  const onSubmitHandler = async e => {
    e.preventDefault();

    if (!(typeof email === "string" || typeof password === "string")) {
      alert("Please fill the details");
    }
    try {
      const user = await auth.signInWithEmailAndPassword(email, password);
      

      localStorage.setItem("userId", user.user.uid);
      resetEmail();
      setError("");
      resetPassword();
      setAuthenticated(true);
      
      return props.history.push("/admin/dashboard");
    } catch (error) {
      console.log(error);
      if(error){
        setError(error.message)
      }
      else{
        setError("Something went wrong");
      }
    }
  };

  return (
    <Container className="form-container">
      <form className="form" onSubmit={onSubmitHandler}>
        <Typography
          color="textPrimary"
          variant="h5"
          align="left"
          className="text-login"
        >
          Login for Admin
        </Typography>
        <TextField
          type="email"
          value={email}
          required
          label="email"
          onChange={setEmail}
          name="email"
          variant="outlined"
          className="input-group"
        />
        <TextField
          type="password"
          value={password}
          required
          label="password"
          onChange={setPassword}
          name="password"
          variant="outlined"
          className="input-group"
        />
        <Button
          type="submit"
          className="button"
          variant="outlined"
          color="primary"
        >
          Sign In
        </Button>
        {error && (
          <Typography
            variant="caption"
            color="error"
            style={{ alignSelf: "center", marginTop: "8px" }}
          >
            {error}
          </Typography>
        )}
      </form>
    </Container>
  );
};

export default Admin;
