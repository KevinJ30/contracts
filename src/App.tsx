import React from 'react';
import Navigation from "./Elements/Navigation/Navigation";

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
