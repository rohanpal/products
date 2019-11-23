import React, { Component } from "react";
import displayData from "./displayData";
import DisplayPreview from "../../components/displayPreview/displayPreview";
import DisplayItem from "../../components/displayItem/displayItem";
import { fireStore } from "../../firebase/util";
import "./displayPage.scss";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import CustomButton from "../../components/customButton/customButton";
import { getProducts } from "../../firebase/util";

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
        this.setState({ collections: data, loading: false,error:false });
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
        <div>
          <GridList cellHeight={250} className="gridList" spacing={2}>
            <GridListTile key="Subheader" cols={2} style={{ height: "80" }}>
              <ListSubheader component="div">
                <h2>Door Knobs</h2>
              </ListSubheader>
            </GridListTile>
            {this.state.collections.map(
              ({ SIZE, codeNo, itemType, material, picture }) => (
                <GridListTile key={picture} className="tile">
                  <img src={picture} alt={itemType} className="image" />
                  <GridListTileBar
                    title={itemType}
                    subtitle={<span>Material: {material}</span>}
                    actionIcon={
                      <CustomButton inverted style={{ width: "50" }}>
                        View Details
                      </CustomButton>
                    }
                  />
                </GridListTile>
              )
            )}
          </GridList>
        </div>
      ) : (
        <h1>Check your internet connectivity and refresh the page</h1>
      );

    return (
      <div className="root">
        {!this.state.loading ? displayData : <h1>Loading</h1>}
      </div>
    );
  }
}

export default displayPage;
