import React from 'react';
// import logo from './logo.svg';
import './App.css';
import SignIn from "./components/signIn"
import SignUp from "./components/signup"
import Dashboard from './components/dashboard.js'
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
   
    <Route path='/' exact component={SignIn} />
    <Route path='/signup' exact component={SignUp} />
    <Route path='/Dashboard' exact component={Dashboard} />
    </Router>
  )
// import SignIn from "./components/signIn"
// import { BrowserRouter as Router, Route } from "react-router-dom";
// function App() {
//   return (
//     <Router>
   
//     <Route path='/' exact component={SignIn} />
    
    
//     </Router>


}

export default App;
