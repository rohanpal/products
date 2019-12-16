import React,{useState,createContext} from "react";
import Header from "./components/header/header";
import "./App.css";
import HomePage from "./pages/homePage/homePage";
import ShopPage from "./pages/displayPage/displayPage";
import Dashboard from "./pages/dashboard/dashboard";
import Admin from "./pages/admin/admin";
import { Route, Switch } from "react-router-dom";
import {Routes} from './components/routes/routes'
import {UserProvider} from './contexts/userContext'
//import Footer from './components/footer/footer'

function App(props) {
  
  
  return (
    <UserProvider>
      <Routes/>
    </UserProvider>
  );
}

export default App;
