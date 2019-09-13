import React from 'react';
// import logo from './logo.svg';
import './App.css';
import SignIn from "./components/signIn"
import SignUp from "./components/signup"
import JsonPlaceHolder from "./components/jsonholder"
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
   
    <Route path='/' exact component={SignIn} />
    <Route path='/signup' exact component={SignUp} />
    <Route path='/jsonholder' exact component={JsonPlaceHolder} />
    </Router>
    
  );
}

export default App;
