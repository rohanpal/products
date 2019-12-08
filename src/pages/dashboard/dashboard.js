import React from "react";
import { Route, Switch,Redirect } from "react-router-dom";
import AdminNavigation from "../../components/admin/navigation/navigation";
import "./dashboard.scss";
import AddProduct from '../../components/admin/addProduct/addProduct'

const dashboard = props => {
  if(!localStorage.getItem("userId")){
    return <Redirect to="/"/>
  }
  
  return (
    <div className="root">
      <div className="display">
        <Switch>
          <Route exact path={`${props.match.url}/add`} component={AddProduct}/>
          <Route
            path={`${props.match.url}/home`}
            
            component={() => <h1 style={{ color: "black" }}>Home</h1>}
          />
        </Switch>
      </div>
      <div className="admin-navigation">
        <AdminNavigation />
      </div>
    </div>
  );
};

export default dashboard;
