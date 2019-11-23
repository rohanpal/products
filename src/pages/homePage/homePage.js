import React from "react";
import "./homePage.scss";
import Footer from '../../components/footer/footer'
import Diretcory from '../../components/directory-menu/directoryMenu'
import Navigation from '../../components/admin/navigation/navigation'


const homePage = () => {
  return (
    <div >
      <div className="homepage">
      <div className="directory"><Diretcory /></div>
      <span className="navigation"><Navigation type="categories"/></span>
    </div>
    <Footer/>
    </div>
  );
};

export default homePage;
