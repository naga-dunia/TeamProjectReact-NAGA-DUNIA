import React from 'react';
<<<<<<< HEAD
// import logo from './logo.svg';
import './App.css';
import SignIn from "./components/signIn"
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
   
    <Route path='/' exact component={SignIn} />
    
    
    </Router>
    
=======
import './App.css';
import Dashboard from './components/dashboard.js'


function App() {
  return (
    <div>
    <Dashboard />
    </div>
>>>>>>> origin/arsya
  );
}

export default App;
