import React from "react";

const Education = props => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>{props.title}</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      {props.formation.map(item => {
        return (
          <div className="row item" key={item.date}>
            <div className="twelve columns">
              <h3>{item.school}</h3>
              <p className="info">
                {item.course}
                <span>&bull;</span>
                <em className="date">{item.date}</em>
              </p>
              <p>
                {item.description}
              </p>
            </div>
          </div>)
      })}
    </div>
  </div>
);

export default Education;
