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
import CustomButton from '../../components/customButton/customButton'

export class displayPage extends Component {
  state = {
    collections: [],
    loading: true
  };
  async componentDidMount() {
    try {
      const products = await fireStore.doc("/categories/Door_Knockers").get();
      const data = await JSON.parse(products.data().allDoorKnockers);
      this.setState({ collections: data, loading: false });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    let displayData = (
      <div >
        <GridList cellHeight={180} className="gridList">
          <GridListTile key="Subheader" cols={5} style={{ height: "100" }}>
            <ListSubheader component="div">Door Knobs</ListSubheader>
          </GridListTile>
          {this.state.collections.map(
            ({ SIZE, codeNo, itemType, material, picture }) => (
              <GridListTile key={picture} className="tile">
                <img src={picture} alt={itemType} className="image"/>
                <GridListTileBar
                  title={itemType}
                  subtitle={<span>Material: {material}</span>}
                  actionIcon={<CustomButton inverted>View Details</CustomButton >}
                />
              </GridListTile>
            )
          )}
        </GridList>
      </div>
    );
    return (
      <div className="root">
        {!this.state.loading ? displayData : <h1>Loading</h1>}
      </div>
    );
  }
}

export default displayPage;

// SIZE: "4.5"
// SNO: "1"
// codeNo: "1351"
// itemType: "DOOR KNOCKER"
// material: "IRON"
// picture: "https://firebasestorage.goog
