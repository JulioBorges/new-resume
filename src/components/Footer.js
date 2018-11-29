import React from "react";
import SocialLinks from "./SocialLinks";
import { FaChevronCircleUp } from "react-icons/lib/fa";

const Footer = () => (
  <footer id="footer">
    <div className="row">
      <div className="twelve columns">
        <SocialLinks />

        <ul className="copyright">
          <li>&copy; Copyright {(new Date().getFullYear())} Julio Borges</li>
          <li>
            Design by{" "}
            <a title="Styleshout" href="https://www.styleshout.com/">
              Styleshout
            </a>
          </li>
          <li>
            Developed with React ⚛️ by Julio Borges using{" "}
            <a title="GatsbyJS" href="https://www.gatsbyjs.org/">
              Gatsby JS
            </a>
          </li>
        </ul>
      </div>

      <div id="go-top">
        <a className="smoothscroll" title="Back to Top" href="#home">
          <FaChevronCircleUp />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
