import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import GalleryProducts from "./components/GalleryProducts/GalleryProducts";
import Product from "./components/Products/Product";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Content} />
      <Route path="/gallery" component={GalleryProducts} />
      <Route path="/product" component={Product} />
    </Router>
  );
}

export default App;
