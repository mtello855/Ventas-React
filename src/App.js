import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Accesorios from "./components/Accesorios/Accesorios";
import Product from "./components/Products/Product";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Content} />
      <Route path="/accesorios" component={Accesorios} />
      <Route path="/product" component={Product} />
    </Router>
  );
}

export default App;
