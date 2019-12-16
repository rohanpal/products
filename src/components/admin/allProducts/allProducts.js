import React, { useState, useEffect } from "react";
import "./allProducts.scss";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getProducts, updateProducts } from "../../../firebase/util";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Select from "@material-ui/core/Select";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import { editProduct, deleteProduct } from "../../../utils/utils";

const AllProducts = props => {
  const [collections, setCollections] = useState([]);
  const [product, setProduct] = useState("Coat_Hook");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false); //SIZE, codeNo, itemType, material, picture,sNo
  const [alert, setAlert] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [size, setSIZE] = useState("");
  const [codeNo, setcodeNo] = useState("");
  const [itemType, setitemType] = useState("");
  const [material, setmaterial] = useState("");
  const [picture, setpicture] = useState("");
  const [sNo, setsNo] = useState("");

  const data = [];

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  const handleAlertOpen = () => {
    setAlert(true);
  };

  const handleAlertClose = () => {
    setAlert(false);
  };

  const fetchProduct = async () => {
    try {
      setLoading(true);
      console.log(product, "ffffffffff");
      const data = await getProducts(product);
      // console.log(data);
      if (data) {
        setCollections(data);
        setLoading(false);
        setError(false);
      } else {
        setLoading(false);
        setError(true);
      }
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    const Fetch = async () => {
      fetchProduct();
    };
    Fetch();
  }, [product]);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleEdit = () => {
    setDialogOpen(true);
  };

  const onCardClickHandler = (
    size,
    codeNo,
    itemType,
    material,
    picture,
    sNo
  ) => {
    console.log(picture)
    setSIZE(size);
    setcodeNo(codeNo);
    setitemType(itemType);
    setmaterial(material);
    setpicture(picture)
    setsNo(sNo);
  };
  const onEditSubmitHandler = async () => {
   try {
    const productData = {
      sNo,
      size: size,
      codeNo,
      itemType,
      material,
      picture
    };
    const updatedProducts = editProduct(collections, sNo, productData);
    console.log(updatedProducts);
    
    const result = await updateProducts(product, updatedProducts);
      if (result) {
        setCollections(result);
        
      }
      else{
        window.alert("Something wenet wrong")
      }
    handleDialogClose();
   } catch (error) {
     window.alert("Something went wrong")
   }
  };
  const onDeleteHandler = async () => {
    console.log(sNo);
    try {
      const updatedProduct = await deleteProduct(collections, sNo);
      console.log(updatedProduct);
      const result = await updateProducts(product, updatedProduct);
      if (result) {
        setCollections(result);
        
      }
      else{
        window.alert("Something wenet wrong")
      }
      setAlert(false);
    } catch (error) {
      setAlert(false);
      window.alert("Something went wrong");
    }
  };
  let displayData =
    collections && !error ? (
      <div className="product-list">
        {collections.map(
          ({ size, codeNo, itemType, material, picture, sNo }) => (
            <Card
              className="card"
              onClick={() =>
                onCardClickHandler(
                  size,
                  codeNo,
                  itemType,
                  material,
                  picture,
                  sNo
                )
              }
              key={sNo}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={itemType}
                  height="140"
                  image={picture}
                  title={itemType}
                  style={{
                    minWidth: "80px",
                    alignSelf: "center",
                    objectFit: "contain",

                    maxWidth: "100px",
                    borderRadius: "50%",
                    maxHeight: "150px",
                    padding: "2"
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {itemType}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {`Size available- ${size}`}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={handleEdit}>
                  Edit
                </Button>
                <Button size="small" color="primary" onClick={handleAlertOpen}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          )
        )}
      </div>
    ) : (
      <h1>Something went wrong please try again</h1>
    );
  const handleDropDownChange = event => {
    setProduct(event.target.value);
  };
  return (
    <div className="root">
      <div className="products">
        <Select
          className="select"
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={product}
          onChange={handleDropDownChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Coat_Hook"}>Coat Hook</MenuItem>
              <MenuItem value={"Door_Knockers"}>Door Knockers</MenuItem>
              <MenuItem value={"Data_Handler"}>Data Handlers</MenuItem>
              <MenuItem value={"Drawer_Pull"}>Drawer Pull</MenuItem>
        </Select>
        <div className="products">
          {!loading ? displayData : <CircularProgress className="progress" />}
        </div>
      </div>
      <Dialog
        open={dialogOpen}
        onClose={handleDialogOpen}
        aria-labelledby="Edit product details"
      >
        <DialogTitle id="Product data">Eidt details</DialogTitle>
        <DialogContent>
          <TextField //SIZE, codeNo, itemType, material, picture,sNo
            autoFocus
            margin="dense"
            id="size"
            label="Size"
            type="text"
            fullWidth
            value={size}
            onChange={e => setSIZE(e.target.value)}
          />
        </DialogContent>
        <DialogContent>
          <TextField //SIZE, codeNo, itemType, material, picture,sNo
            autoFocus
            margin="dense"
            id="size"
            label="Code Number"
            type="text"
            fullWidth
            value={codeNo}
            onChange={e => setcodeNo(e.target.value)}
          />
        </DialogContent>
        <DialogContent>
          <TextField //SIZE, codeNo, itemType, material, picture,sNo
            autoFocus
            margin="dense"
            id="size"
            label="Item Type"
            type="text"
            fullWidth
            value={itemType}
            onChange={e => setitemType(e.target.value)}
          />
        </DialogContent>
        <DialogContent>
          <TextField //SIZE, codeNo, itemType, material, picture,sNo
            autoFocus
            margin="dense"
            id="material"
            label="Material"
            type="text"
            fullWidth
            value={material}
            onChange={e => setmaterial(e.target.value)}
          />
        </DialogContent>
        <DialogContent>
          <TextField //SIZE, codeNo, itemType, material, picture,sNo
            autoFocus
            margin="dense"
            id="picture"
            label="Picture"
            type="text"
            fullWidth
            value={picture}
            disabled
            onChange={e => setpicture(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onEditSubmitHandler} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={alert}
        onClose={handleAlertClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete?"}
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleAlertClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onDeleteHandler} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AllProducts;
