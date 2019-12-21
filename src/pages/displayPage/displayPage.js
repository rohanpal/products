import React, { PureComponent } from "react";

import "./displayPage.scss";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getProducts } from "../../firebase/util";
import Navigation from "../../components/admin/navigation/navigation";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import ContactForm from "../../components/contact/contact";
import DialogTitle from "@material-ui/core/DialogTitle";

export class displayPage extends PureComponent {
  state = {
    collections: [],
    product: "Door_Knockers",
    loading: true,
    error: false,
    dialogOpen: false,
    size: "",
    codeNo: "",
    itemType: "",
    material: "",
    picture: "",
    isOpen: false
  };
  handleDialogOpen = () => {
    this.setState({ dialogOpen: true });
  };

  handleDialogClose = () => {
    this.setState({ dialogOpen: false });
  };
  handleQustionOpen = () => {
    this.setState({ isOpen: true });
  };
  handleQustionClose = () => {
    this.setState({ isOpen: false });
  };
  async componentDidMount() {
    try {
      const data = await getProducts(
        this.props.match.params.product || this.state.product
      );
      //console.log(data);
      if (data) {
        this.setState({ collections: data, loading: false, error: false });
      } else {
        this.setState({ loading: false, error: "Could not find products " });
      }
    } catch (error) {
      console.log(error);
      this.setState({ loading: false, error: true });
    }
  }
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.product !== this.state.product) {
      try {
        const data = await getProducts(this.state.product);

        if (data) {
          this.setState({ collections: data, loading: false, error: false });
        } else {
          this.setState({ loading: false, error: true });
        }
      } catch (error) {
        this.setState({ loading: false, error: true });
      }
    }
  }
  setProduct = product => {
    this.setState({ product, loading: true });
  };
  render() {
    let displayData =
      this.state.collections && !this.state.error ? (
        <div className="product-list">
          {this.state.collections.map(
            ({ size, codeNo, itemType, material, picture }) => (
              <Card className="card">
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
                <CardActions
                  onClick={
                    () =>
                      this.setState({
                        size,
                        codeNo,
                        itemType,
                        material,
                        picture
                      })
                    //console.log(size, codeNo, itemType, material, picture)
                  }
                >
                  <Button size="small" color="primary" onClick={()=>this.setState({dialogOpen:true})}>
                    More
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    onClick={()=>this.setState({ isOpen: true })}
                  >
                    Ask
                  </Button>
                </CardActions>
              </Card>
            )
          )}
        </div>
      ) : (
        <h1>Something went wrong please try again</h1>
      );

    return (
      <div className="root">
        <ContactForm
          productCode={this.state.codeNo}
          open={this.state.isOpen}
          closeHandler={this.handleQustionClose}
          openHandler={this.handleQustionOpen}
        />
        <Dialog
          open={this.state.dialogOpen}
          onClose={this.handleDialogOpen}
          aria-labelledby="Product details"
        >
          <DialogTitle id="Product data">Product details</DialogTitle>
          <DialogContent>
            <Typography>SIZE :{this.state.size}</Typography>
          </DialogContent>
          <DialogContent>
            <Typography>Code Number :{this.state.codeNo}</Typography>
          </DialogContent>
          <DialogContent>
            <Typography>Item Type :{this.state.itemType}</Typography>
          </DialogContent>
          <DialogContent>
            <Typography>Material :{this.state.material}</Typography>
          </DialogContent>

          <DialogActions>
            <Button onClick={this.handleDialogClose} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <div className="products">
          {!this.state.loading ? (
            displayData
          ) : (
            <CircularProgress className="progress" />
          )}
        </div>
        <div className="navigation">
          <Navigation setProduct={this.setProduct} type="categories" />
        </div>
      </div>
    );
  }
}

export default displayPage;

//{ SIZE, codeNo, itemType, material, picture }
