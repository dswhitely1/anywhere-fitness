import React from 'react';
import logo from './logo.svg';
import { Route, NavLink } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
     
         <h1> Learn React</h1>

         <ul>
           <li><NavLink to="/login">Login</NavLink></li>
           <li><NavLink to="/signup">Signup</NavLink></li>
           <li><NavLink to="/dashboard">Dashboard</NavLink></li>

         </ul>

         <main>
           <Route path="/login" component = {Login}/>
           <Route path="/signup" component = {Signup}/>
           <Route path="/dashboard" component = {Dashboard}/>
         </main>
     
    </div>
  );
}

export default App;
