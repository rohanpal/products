import React,{useContext} from "react";
import HomePage from "../../pages/homePage/homePage";
import ShopPage from "../../pages/displayPage/displayPage";
import Dashboard from "../../pages/dashboard/dashboard";
import Header from "../../components/header/header";
import { Route, Switch } from "react-router-dom";
import Admin from "../../pages/admin/admin";
import { UserContext } from "../../contexts/userContext";

export const Routes = () => {
  const {authenticated} = useContext(UserContext);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/:product" component={ShopPage} />
        <Route path="/shop" component={ShopPage} />
        {/* //<Route exact path="/admin" component={Admin} /> */}
        <Route
          exact
          path="/admin"
          render={props => authenticated?<Dashboard {...props}/>:<Admin {...props}/>}
        />
        {/* <Route path="/admin/dashboard" component={Dashboard} /> */}
        <Route
          path="/admin/dashboard"
          render={props => authenticated?<Dashboard {...props} />:<Admin {...props}/>}
        />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
};
