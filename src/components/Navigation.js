import React from "react";

const Navigation = props => (
  <nav id="nav-wrap">
    <a className="mobile-btn" href="#nav-wrap" />
    <ul id="nav" className="nav">
            {props.menuItens.map(item => {
                return (
                <li className={item.class}>
                    <a className="smoothscroll" href={item.url}>
                        {item.text}
                    </a>
                </li>)
            })}
    </ul>
  </nav>
);

export default Navigation;
