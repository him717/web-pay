import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Error from "./pages/Error";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/service" component={Service}></Route>
        <Route component={Error}></Route>
      </Routes>
    </>
  );
};

export default App;
