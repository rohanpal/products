import React from 'react';
import Header from './components/header/header'
import './App.css';
import HomePage from './pages/homePage/homePage'
import ShopPage from './pages/displayPage/displayPage'
import {Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div >
      <Header/>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/shop" component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
