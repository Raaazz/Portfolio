import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex gap-2 my-4">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FaFacebook className="text-gray-400 text-2xl cursor-pointer hover:text-gray-300" />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram className="text-gray-400 text-2xl cursor-pointer hover:text-gray-300" />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <FaTwitter className="text-gray-400 text-2xl cursor-pointer hover:text-gray-300" />
      </a>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="text-gray-400 text-2xl cursor-pointer hover:text-gray-300" />
      </a>
      <a
        href="https://www.github.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaGithubSquare className="text-gray-400 text-2xl cursor-pointer hover:text-gray-300" />
      </a>
    </div>
  );
};

export default SocialLinks;
