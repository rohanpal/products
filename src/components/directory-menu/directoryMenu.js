import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item";
import "./directoryMenu.scss";

class directoryMenu extends Component {
  state = {
    categories: [
      {
        title: "handles",
        id: 1,
        imageUrl:
          "https://media.istockphoto.com/photos/open-the-modern-wooden-door-picture-id672475256?k=6&m=672475256&s=612x612&w=0&h=U3O4VZ1LFwTblgFSWbv9en6yg0m-14iKe3wohWTg3FI="
      },
      {
        title: "handles",
        id: 2,
        imageUrl:
          "https://media.istockphoto.com/photos/open-the-modern-wooden-door-picture-id672475256?k=6&m=672475256&s=612x612&w=0&h=U3O4VZ1LFwTblgFSWbv9en6yg0m-14iKe3wohWTg3FI="
      },
      {
        title: "handles",
        id: 3,
        imageUrl:
          "https://media.istockphoto.com/photos/open-the-modern-wooden-door-picture-id672475256?k=6&m=672475256&s=612x612&w=0&h=U3O4VZ1LFwTblgFSWbv9en6yg0m-14iKe3wohWTg3FI="
      },
      {
        title: "handles",
        id: 4,
        imageUrl:
          "https://media.istockphoto.com/photos/open-the-modern-wooden-door-picture-id672475256?k=6&m=672475256&s=612x612&w=0&h=U3O4VZ1LFwTblgFSWbv9en6yg0m-14iKe3wohWTg3FI=",
        size: "large"
      },
      {
        title: "handles",
        id: 5,
        imageUrl:
          "https://media.istockphoto.com/photos/open-the-modern-wooden-door-picture-id672475256?k=6&m=672475256&s=612x612&w=0&h=U3O4VZ1LFwTblgFSWbv9en6yg0m-14iKe3wohWTg3FI=",
        size: "large"
      }
    ]
  };
  render() {
    return (
      <div className="directory-menu">
        {this.state.categories.map(category => (
          <MenuItem key={category.id} {...category} />
        ))}
      </div>
    );
  }
}
export default directoryMenu;
