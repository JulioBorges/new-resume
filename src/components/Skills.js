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
                <span className="bar-expand bar-expand-anim" style={{ width: item.width }} />
                <em>{item.name}</em>
              </li>)
          })}
        </ul>
      </div>
    </div>
  </div>
);

export default Skills;
