import React, { Component } from "react";
import "./admin.scss";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { auth } from "../../firebase/util";

export class admin extends Component {
  state = {
    email: "",
    password: "",
    error: null
  };
  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmitHandler = async e => {
    e.preventDefault();
    let { email, password } = this.state;
    if (!(typeof email === "string" || typeof password === "string")) {
      alert("Please fill the details");
    }
    try {
      const user = await auth.signInWithEmailAndPassword(email, password);

      localStorage.setItem("userId", user.user.uid);
      this.setState({ email: "", password: "", error: null });
      return this.props.history.push("/admin/dashboard");
    } catch (error) {
      this.setState({ error: "Something went wrong" });
    }
  };
  render() {
    return (
      <Container className="form-container">
        <form className="form" onSubmit={this.onSubmitHandler}>
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
            value={this.state.email}
            required
            label="email"
            onChange={this.onChangeHandler}
            name="email"
            variant="outlined"
            className="input-group"
          />
          <TextField
            type="password"
            value={this.state.password}
            required
            label="password"
            onChange={this.onChangeHandler}
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
          {this.state.error && (
            <Typography
              variant="caption"
              color="error"
              style={{ alignSelf: "center", marginTop: "8px" }}
            >
              {this.state.error}
            </Typography>
          )}
        </form>
      </Container>
    );
  }
}

export default admin;
