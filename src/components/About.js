import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";
import profilePic from "../assets/images/profilepic.jpg";

const About = props => (
    <section id="about">
        <div className="row">
            <div className="three columns">
                <img className="profile-pic" src={profilePic} alt="" />
            </div>
            <div className="nine columns main-col">
                <h2>{ props.title }</h2>
                <p dangerouslySetInnerHTML={{__html: props.textHtml}}>
                </p>
                <div className="row">
                    <div className="columns contact-details">
                        <h2>{props.contactTitle}</h2>
                        <p className="address">
                            <span>Jonathan Doe</span>
                            <br />
                            <span>1600 Amphitheatre Parkway <br /> Mountain View, CA 94043 US</span>
                            <br />
                            <span>(123)456-7890</span>
                            <br />
                            <span>anyone@website.com</span>
                        </p>
                    </div>
                    <div className="columns download">
                        <p>
                            <a href={props.downloadResumeLink} className="button">
                                <FaCloudDownload /> {props.downloadButton}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default About;
