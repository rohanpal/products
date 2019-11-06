import React, { Component } from "react";
import "./admin.scss"
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';


export class admin extends Component {
  state = {
    email: "",
    password: ""
  };
  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmitHandler=(e)=>{
      e.preventDefault()
      let {email,password}= this.state
    if(!(typeof email==="string" || typeof password==="string")){
        alert("Please fill the details")
    }
    if(email==="admin@admin" && password==="admin"){
        alert("Welcome Admin")
    }
    else{
        alert("Wrong credentials")
    }
  }
  render() {
    return (
     <Container className="form-container">
            
          <form className="form" onSubmit={this.onSubmitHandler}>
          <Typography  color="textPrimary" variant="h5" align="left" className="text-login">Login for Admin</Typography>
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
        <Button type="submit" className="button" variant="outlined" color="primary">Sign In</Button>
      </form>
     </Container>
    );
  }
}

export default admin;
