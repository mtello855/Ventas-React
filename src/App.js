import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import GalleryProducts from "./components/GalleryProducts/GalleryProducts";
import Product from "./components/Products/Product";
import "./App.css";

function App() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("https://demo3024862.mockable.io/products")
      .then((response) => response.json())
      .then((data) => setItem(data));
  }, []);
  console.log(item);
  return (
    <Router>
      <Navbar />
      <Route exact path="/">
        <Content itemData={item} />
      </Route>
      <Route exact path="/gallery">
        <GalleryProducts itemData={item} />
      </Route>
      <Route exact path="/product">
        <Product itemData={item} />
      </Route>
    </Router>
  );
}

export default App;
/*<Route
  path="/dashboard"
  render={(props) => <Dashboard {...props} isAuthed={true} />}
/>;*/
