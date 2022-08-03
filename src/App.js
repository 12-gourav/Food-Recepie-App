import React from "react";
import { Route, Switch } from "react-router";

import Navbar from "./Components/Navbar";

import About from "./Pages/About";
import Home from "./Pages/Home";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return(<>

<ToastContainer position="top-center"></ToastContainer>

<Navbar />


<Switch>
  <Route exact path="/" component={Home}></Route>
  <Route exact path="/about" component={About}></Route>

</Switch>

  </>)
}
export default App;