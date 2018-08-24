import React from "react";

const Navigation = (props) => (
  <nav id="nav-wrap">
    <a className="mobile-btn" href="#nav-wrap" />
    <ul id="nav" className="nav">
            {this.props.menuItens.map((item, i) => {
                return 
                <li className="current">
                    <a className="smoothscroll" href="#home">
                        Home
        </a>
                </li>
            })}
      <li className="current">
        <a className="smoothscroll" href="#home">
          Home
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#about">
          About
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#resume">
          Resume
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#portfolio">
          Works
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#testimonials">
          Testimonials
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#footer">
          Footer
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
