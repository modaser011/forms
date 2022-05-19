import React,{Component} from "react";
import {BrowserRouter as Router, Link, Route,Routes, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {SignUp} from "./signUp";
import './App.css';
import LoginPage from "./login";
import NotPage from "./notfound";
import {Openion} from "./openion";
import  {Order} from "./order";

function App() {

    return (
       <div className="cklj">
           <SignUp/>
       </div>
    );
}

export default App;
