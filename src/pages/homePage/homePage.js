import React from "react";
import "./homePage.scss";
import MenuItem from '../../components/menu-item/menu-item'
import Diretcory from '../../components/directory-menu/directoryMenu'


const homePage = () => {
  return (
    <div className="homepage">
      <Diretcory/>
    </div>
  );
};

export default homePage;
