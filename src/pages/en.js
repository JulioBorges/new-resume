import React from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import Header from "../components/Header";
import About from "../components/About";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Data from "../Data/en";

const IndexPage = () => (
    <div>
        <Header {...Data.header} />
        <About {...Data.about}/>
        <Resume />
        <Portfolio />
        <Testimonials />
        <Footer />
    </div>
);

export default IndexPage;
