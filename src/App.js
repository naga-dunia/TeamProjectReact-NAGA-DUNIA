import React from 'react';
// import logo from './logo.svg';
import './App.css';
import SignIn from "./components/signIn"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from './components/dashboard.js'
// function App() {
//   return (
//     <Router>
   
//     <Route path='/' exact component={SignIn} />
    
    
//     </Router>

function App() {
  return (
    <div>
    <Dashboard />
    </div>
  );
}

export default App;
