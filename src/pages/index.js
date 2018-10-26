import React from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import Header from "../components/Header";
import About from "../components/About";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import Data from "../Data/pt";

const IndexPage = () => (
  <div>
    <Header {...Data.header}/>
    <About {...Data.about}/>
    <Resume {...Data.resume} />
    <Portfolio />
    <Footer />
  </div>
);

export default IndexPage;
