import React from "react";
import { Navbar } from "./components";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from "./globalStyles";
import {SignUP} from './pages';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <SignUP/>
    </Router>
  );
}

export default App;
