import React from "react";

import Education from "./Education";
import Work from "./Work";
import Skills from "./Skills";

const Resume = props => (
  <section id="resume">
    <Education {...props.education}/>
    <Work {...props.work}/>
    <Skills {...props.skills}/>
  </section>
);

export default Resume;
