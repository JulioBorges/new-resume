import React from "react";

const Skills = props => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>{props.title}</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <p>
        {props.text}
      </p>
      <div className="bars">
        <ul className="skills">
          {props.skills.map(item => {
            return (
              <li key={item.name}>
              <span className="bar-expand " syle="width:{{item.width}} animation: 2s ease; -moz-animation: 2s ease; -webkit-animation: 2s ease;"/>
                <em>{item.name}</em>
              </li>)
          })}
        </ul>
      </div>
    </div>
  </div>
);

export default Skills;
