import React,{useContext,useEffect} from "react";
import HomePage from "../../pages/homePage/homePage";
import ShopPage from "../../pages/displayPage/displayPage";
import Dashboard from "../../pages/dashboard/dashboard";
import Header from "../../components/header/header";
import { Route, Switch } from "react-router-dom";
import Admin from "../../pages/admin/admin";
import { UserContext } from "../../contexts/userContext";
import {auth} from '../../firebase/util'

export const Routes = () => {
  console.log("user")
  let unsubsribeFromAuth=null
  const {authenticated,setAuthenticated} = useContext(UserContext);
   unsubsribeFromAuth = auth.onAuthStateChanged(async user=>{
    
    if(user){
      //console.log(user)
      localStorage.setItem("userId",user.uid)
       setAuthenticated(user.uid)
    }
    else{
      localStorage.setItem("userId",null)
       setAuthenticated(null)
    }
    
    
  })

  useEffect(()=>{
    console.log("inside use effect")
    return ()=>{
      console.log("unsub")
      unsubsribeFromAuth()
    }
  },[])
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
