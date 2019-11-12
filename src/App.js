import React from 'react';
import Header from './components/header/header'
import './App.css';
import HomePage from './pages/homePage/homePage'
import ShopPage from './pages/displayPage/displayPage'
import Dashboard from './pages/dashboard/dashboard'
import Admin from './pages/admin/admin'
import {Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div >
      <Header/>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/shop" component={ShopPage}/>
      <Route exact path="/admin" component={Admin}/>
      <Route exact path="/admin/dashboard" component={Dashboard}/>
      
      </Switch>
    </div>
  );
}

export default App;
