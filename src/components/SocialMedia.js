import React from "react";
import GithubLogo from "../images/github.svg";
import LinkedInLogo from "../images/linkedin.svg";

const SocialMedia = () => {
  return (
    <div className="flex flex-wrap items-baseline w-full mt-3 mb-6 text-base font-medium sm:flex-nowrap justify-evenly sm:justify-center font-manrope md:text-lg">
      <a
        href="https://github.com/juantamayo26/"
        target="_blank"
        className="flex items-center mt-3 mr-5 rounded-tr-lg rounded-bl-lg flex-nowrap text-themeOffWhite hover:text-themeBlue hover:border-corners duration-300"
      >
        <GithubLogo className="w-6 h-6 md:w-8 md:h-8" />
        <p className="ml-2">Github</p>
      </a>
      <a
        href="https://www.linkedin.com/in/juantamayo26/"
        target="_blank"
        className="flex items-center mt-3 mr-5 rounded-tr-lg rounded-bl-lg flex-nowrap text-themeOffWhite hover:text-themeBlue hover:border-corners duration-300"
      >
        <LinkedInLogo className="w-6 h-6 md:w-8 md:h-8" />
        <p className="ml-2">LinkedIn</p>
      </a>
    </div>
  );
};

export default SocialMedia;
