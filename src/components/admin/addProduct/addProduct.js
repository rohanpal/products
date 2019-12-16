import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import "./addProduct.scss";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { storage, getProducts } from "../../../firebase/util";
import CircularProgress from "@material-ui/core/CircularProgress";
import {fireStore} from '../../../firebase/util'


export default class addProduct extends Component {
  state = {
    productType: "",
    open: false,
    image: null,
    imageUploading: false,
    codeNo: "",
    material: "",
    size: "",
    finish: "",
    picture: ""
  };
  dataRetrived = [];
  handleDropDownChange = async event => {
    try {
      const data = await getProducts(event.target.value);
      this.dataRetrived = data;
      console.log(data)
      this.setState({ productType: event.target.value });
    } catch (error) {
      alert("Something went wrong try again");
    }
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleImageUpload = () => {
    this.setState({ imageUploading: true });
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      null,
      error => {
        this.setState({ imageUploading: false });
        alert("Please try again");
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => this.setState({ picture: url }));
        this.setState({ imageUploading: false });
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
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmitHandler = async (event) => {
    event.preventDefault();
    const { codeNo, size, finish, picture, material } = this.state;
    if (
      !codeNo ||
      !size ||
      !finish ||
      !picture ||
      !material ||
      !this.dataRetrived
    ) {
      alert("Please check and fill all the details");
      return
    }
    let sNo = (parseInt(this.dataRetrived[this.dataRetrived.length-1]["sNo"])+1).toString()
    const updatedProducts = [
      ...this.dataRetrived,
      { sNo,codeNo, size, finish, picture, material, size }
    ];

   try{
     const stringData = JSON.stringify(updatedProducts)
    const res = await fireStore.doc(`/categories/${this.state.productType}`).set({data:stringData})
    console.log(res)
   }
   catch(e){
     console.log(e)
     alert("Couldn't upload please try again")
   }
   

    
  };

  render() {
    return (
      <div className="add">
        <Typography variant="h5" className="heading">
          Add Products
        </Typography>
        <form className="form" onSubmit={this.onSubmitHandler}>
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
              <MenuItem value={"Data_Handler"}>Data Handlers</MenuItem>
              <MenuItem value={"Drawer_Pull"}>Drawer Pull</MenuItem>
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
              {this.state.imageUploading ? (
                <CircularProgress color="secondary" />
              ) : (
                <Button
                  variant="contained"
                  disabled={!this.state.image}
                  onClick={this.handleImageUpload}
                >
                  Upload
                </Button>
              )}
            </span>
          </div>
          <div className="text-inputs">
            <TextField
              id="outlined-error-helper-text"
              label="Code Number"
              helperText="Mandatory."
              margin="normal"
              variant="outlined"
              name="codeNo"
              onChange={this.handleChange}
              required
            />
            <TextField
              id="outlined-error-helper-text"
              label="Material"
              helperText="Mandatory."
              margin="normal"
              variant="outlined"
              name="material"
              onChange={this.handleChange}
              required
            />
            <TextField
              id="outlined-error-helper-text"
              label="Size"
              helperText="Mandatory."
              margin="normal"
              variant="outlined"
              name="size"
              onChange={this.handleChange}
              required
            />
            <TextField
              id="outlined-error-helper-text"
              label="Finish"
              helperText="Mandatory."
              margin="normal"
              variant="outlined"
              name="finish"
              onChange={this.handleChange}
              required
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}
