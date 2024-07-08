import React from 'react'
import { FaLinkedinIn, FaReact, FaInstagram, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiJavascript, SiHtml5 } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a
              href="https://www.instagram.com/kushagra331"
              target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://github.com/kushagra331"
                target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://www.linkedin.com/in/kushagra-shrivastava-480880148/"
                target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiHtml5 />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media