import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import "./addProduct.scss";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { storage, getProducts } from "../../../firebase/util";

export default class addProduct extends Component {
  state = {
    productType: "",
    open: false,
    image: null
  };
  handleDropDownChange = async event => {
    this.setState({ productType: event.target.value });
    try {
      const data = await getProducts(event.target.value);
      console.log(data);
    } catch (error) {
      alert("Something went wrong");
    }
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleImageUpload = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      null,
      error => {
        alert("Something went wrong");
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => console.log(url));
        alert("Image uploaded");
      }
    );
  };
  handleImageChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      this.setState({ image });
    }
  };
  handleChange =(event)=>{
    this.setState({[event.target.name]:event.target.value})
  }
  render() {
    return (
      <div className="add">
        <Typography variant="h5" className="heading">
          Add Products
        </Typography>
        <form className="form">
          <div>
            <InputLabel id="demo-mutiple-name-label">
              Product Category
            </InputLabel>
            <Select
              className="select"
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={this.open}
              onClose={this.handleClose}
              onOpen={this.handleOpen}
              value={this.state.productType}
              onChange={this.handleDropDownChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Coat_Hook"}>Coat Hook</MenuItem>
              <MenuItem value={"Door_Knockers"}>Door Knockers</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
          <div className="image-upload">
            <Typography variant="overline">Upload Image</Typography>{" "}
            <span>
              <input
                type="file"
                onChange={this.handleImageChange}
                accept="image/*"
              />
            </span>
            <span>
              <Button
                variant="contained"
                disabled={!this.state.image}
                onClick={this.handleImageUpload}
              >
                Upload
              </Button>
            </span>
          </div>
          <div className="text-inputs">
            <TextField
              id="outlined-error-helper-text"
              label="Code Number"
              helperText="Mandatory."
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-error-helper-text"
              label="Material"
              helperText="Mandatory."
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-error-helper-text"
              label="Size"
              helperText="Mandatory."
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-error-helper-text"
              label="Finish"
              helperText="Mandatory."
              margin="normal"
              variant="outlined"
            />
          </div>
        </form>
      </div>
    );
  }
}
