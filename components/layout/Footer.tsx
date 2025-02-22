import React from "react";
import { socials } from "../../lib/content";
import { FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";

const { github, linkedin, codepen } = socials;
const iconSize = 24;

function Footer() {
  return (
    <footer className={"footer"}>
      <ul>
        <li>
          <a href={github} target="_blank" title="Github">
            <FaGithub size={iconSize} />
          </a>
        </li>
        <li>
          <a href={codepen} target="_blank" title="CodePen">
            <FaCodepen size={iconSize} />
          </a>
        </li>
        <li>
          <a href={linkedin} target="_blank" title="Linkedin">
            <FaLinkedin size={iconSize} />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
