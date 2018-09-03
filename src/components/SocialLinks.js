import React from "react";
import {
    FaFacebook,
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaStackOverflow
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
    <ul className="social">
        <li>
            <a href="https://www.linkedin.com/in/juliocezarborges" target="_blank">
                <FaLinkedin />
            </a>
        </li>
        <li>
            <a href="https://www.facebook.com/profile.php?id=100002784992563" target="_blank">
                <FaFacebook />
            </a>
        </li>
        <li>
            <a href="https://pt.stackoverflow.com/users/20712/julio-borges" target="_blank">
                <FaStackOverflow />
            </a>
        </li>
        <li>
            <a href="https://twitter.com/JulioBorges_" target="_blank">
                <FaTwitter />
            </a>
        </li>
        <li>
            <a href="https://github.com/JulioBorges" target="_blank">
                <FaGithub />
            </a>
        </li>
    </ul>
);

export default SocialLinks;
