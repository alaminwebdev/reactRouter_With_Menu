import React from "react";
import { Route  } from "react-router-dom";
import Home from "./Home/Home";
import Menu from "./Menu/Menu";
import MenuItem from "./Menu/MenuItem";
import About from "./About/About";


const Body = () => {
  return (
    <div>
      <Route path="/" exact render={() => <Home name="my home" />} />
      <Route path="/menu" exact component={Menu} />
      <Route path="/menuitem" exact component={MenuItem} />
      <Route path="/about" exact component={About} />
    </div>
  );
};

export default Body;
