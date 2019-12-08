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

export class displayPage extends PureComponent {
  state = {
    collections: [],
    product: "Door_Knockers",
    loading: true,
    error: false
  };
  async componentDidMount() {
    try {
      const data = await getProducts(
        this.props.match.params.product || this.state.product
      );
      console.log(data);
      if (data) {
        this.setState({ collections: data, loading: false, error: false });
      } else {
        this.setState({ loading: false, error: true });
      }
    } catch (error) {
      alert("Check your internet connection");
    }
  }
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.product !== this.state.product) {
      try {
        const data = await getProducts(this.state.product);
        console.log(data);
        if (data) {
          this.setState({ collections: data, loading: false, error: false });
        } else {
          this.setState({ loading: false, error: true });
        }
      } catch (error) {
        alert("Check your internet connection");
      }
    }
  }
  setProduct = product => {
    this.setState({ product, loading: true });
  };
  render() {
    console.log(this.props);
    let displayData =
      this.state.collections && !this.state.error ? (
        <div className="product-list">
          {this.state.collections.map(
            ({ SIZE, codeNo, itemType, material, picture }) => (
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
                      {`Size available- ${SIZE}`}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    More
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            )
          )}
        </div>
      ) : (
        <h1>Check your internet connectivity and refresh the page</h1>
      );

    return (
      <div className="root">
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
