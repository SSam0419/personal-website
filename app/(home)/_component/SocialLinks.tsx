import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import Header from "./Header";
import Link from "next/link";

const SocialLinks = () => {
  const socialLinks = [
    {
      link: "https://github.com/SSam0419",
      socialMedia: "Github",
      icon: <FaGithub size={25} />,
    },
    {
      link: "https://www.linkedin.com/in/sam-lee-2b92a7265/",
      socialMedia: "LinkedIn",
      icon: <FaLinkedin size={25} />,
    },
  ];
  return (
    <div>
      <Header headerText="Find Me At" />
      {socialLinks.map((social, idx) => (
        <Link
          key={idx}
          href={social.link}
          className="flex items-center justify-center  p-10 bg-white hover:bg-gray-300 mr-4 mb-4 rounded-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col items-center gap-5 justify-center">
            <div className="flex items-center justify-center gap-5 w-full">
              <p>{social.icon}</p>
              <p>{social.socialMedia}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
