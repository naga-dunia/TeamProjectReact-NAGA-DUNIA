import React from 'react';
// import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
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
=======
// import SignIn from "./components/signIn"
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from './components/dashboard.js'
// function App() {
//   return (
//     <Router>
   
//     <Route path='/' exact component={SignIn} />
    
>>>>>>> c50f41f5fdb00fd4926510588ef9e89f76241862
    
//     </Router>

function App() {
  return (
    <div>
    <Dashboard />
    </div>
  );
}

export default App;
