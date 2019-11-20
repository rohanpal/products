import React from "react";
import "./homePage.scss";
import MenuItem from '../../components/menu-item/menu-item'
import Diretcory from '../../components/directory-menu/directoryMenu'
import Navigation from '../../components/admin/navigation/navigation'


const homePage = () => {
  return (
    <div className="homepage">
      <div className="directory"><Diretcory /></div>
      <span className="navigation"><Navigation/></span>
    </div>
  );
};

export default homePage;
