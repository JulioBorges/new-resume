import React from "react";

const Work = props => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>{props.title}</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      {props.roles.map(item => {
        return (
          <div className="row item">
            <div className="twelve columns">
              <h3>{item.company}</h3>
              <p className="info">
                {item.role}
                <span>&bull;</span>
                <em className="date">{item.period}</em>
              </p>
              <p>
                {item.roleDescription}
              </p>
            </div>
          </div>)
      })}
    </div>
  </div>
);

export default Work;
