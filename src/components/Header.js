import React from "react";

import Navigation from "./Navigation";
import Banner from "./Banner";
import ScrollDown from "./ScrollDown";

const Header = props => (
  <header id="home">
    <Navigation { ...props.navigation}/>
    <Banner { ...props.banner} />
    <ScrollDown />
  </header>
);

export default Header;
