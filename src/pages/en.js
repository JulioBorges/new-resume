import React from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import Header from "../components/header/Header";
import About from "../components/About";
import Resume from "../components/Resume";
import Helmet from "react-helmet";
//import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import Data from "../Data/en";

const IndexPage = () => (
    <div>
        <Helmet
            title="Julio Cezar Borges - English version"
            meta={[
                { name: 'description', content: 'Resume for Julio Borges - Full Stack Developer' },
                { name: 'keywords', content: 'Full Stack, Developer, .NET, Kotlin, Java, Resume' },
            ]}>
            <html lang="pt-br" />
        </Helmet>
        <Header {...Data.header} />
        <About {...Data.about} />
        <Resume {...Data.resume} />
        {/*<Portfolio {...Data.portfolio} />*/}
        <Footer />
    </div>
);

export default IndexPage;
