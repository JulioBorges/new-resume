import React from "react";
import "../assets/css/fonts.css";
import "../assets/css/main.css";

import Header from "../components/header/Header";
import About from "../components/About";
import Resume from "../components/Resume";
//import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import Data from "../Data/pt";

const IndexPage = () => (
  <div>
    <Header {...Data.header} />
    <About {...Data.about} />
    <Resume {...Data.resume} />
    {/*<Portfolio {...Data.portfolio} />*/}
    <Footer />
  </div>
);

export default IndexPage;
