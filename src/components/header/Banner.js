import React from "react";
import SocialLinks from "../SocialLinks";

const Banner = props => (
    <div className="row banner">
        <div className="banner-text">
            <h1 className="responsive-headline">{props.name}</h1><br /><br />
            <h3 dangerouslySetInnerHTML={{ __html: props.simplifiedResume }}></h3>
            <hr />
            <SocialLinks />
        </div>
    </div>
);

export default Banner;
