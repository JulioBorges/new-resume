import React from "react";
import "../assets/css/fonts.css";
import "../assets/css/main.css";

import Header from "../components/header/Header";
import About from "../components/About";
import Resume from "../components/Resume";
import Helmet from "react-helmet";
//import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import Data from "../Data/pt";
import favicon from "../assets/favicon.png"

const IndexPage = () => (
  <div>
    <Helmet
      title="Julio Cezar Borges"
      meta={[
        { name: 'description', content: 'Cúrriculo Julio Borges - Desenvolvedor Full Stack' },
        { name: 'keywords', content: 'Full Stack, Desenvolvedor, .NET, Kotlin, Java, currículo' },
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
