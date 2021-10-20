import React from 'react';
import './App.css';
import Navigation from "./Elements/Navigation";
import {
    BrowserRouter as Router
} from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
        <Router>
            <Navigation />

            <Routes />
        </Router>
    </div>
  );
}

export default App;
