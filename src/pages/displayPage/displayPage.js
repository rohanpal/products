import React, { Component } from "react";

import "./displayPage.scss";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CustomButton from "../../components/customButton/customButton";
import { getProducts } from "../../firebase/util";
import Navigation from "../../components/admin/navigation/navigation";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { borderRadius } from "@material-ui/system";

export class displayPage extends Component {
  state = {
    collections: [],
    loading: true,
    error: false
  };
  async componentDidMount() {
    try {
      const data = await getProducts("Door_Knockers");
      if (data) {
        this.setState({ collections: data, loading: false, error: false });
      } else {
        this.setState({ loading: false, error: true });
      }
    } catch (error) {
      alert("Check your internet connection");
    }
  }
  render() {
    let displayData =
      this.state.collections && !this.state.error ? (
        <div className="product-list">
          {this.state.collections.map(
            ({ SIZE, codeNo, itemType, material, picture }) => (
              <Card className="card">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={picture}
                    title={itemType}
                    style={{
                      minWidth: "80px",
                      alignSelf: "center",
                      objectFit: "contain",
                      
                      maxWidth: "100px",
                      borderRadius: "50%",
                      maxHeight:'150px',
                      padding:'2'
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
          {!this.state.loading ? displayData : <h1>Loading</h1>}
        </div>
        <div className="navigation">
        <Navigation/>
        </div>
      </div>
    );
  }
}

export default displayPage;

//{ SIZE, codeNo, itemType, material, picture }
