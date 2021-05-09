import React from "react";
import Header from "./Header";
import Img from "gatsby-image";

const CodeArtPreview = ({ title, image, type, description }) => {
  if (type % 2 === 0) {
    return (
      <div
        className={
          "flex flex-wrap md:flex-nowrap w-full justify-center md:justify-end items-center"
        }
      >
        <div className="flex-wrap justify-start max-w-lg text-left md:w-3/4 md:ml-8 md:mr-4 md:flex md:w-1/2 xl:w-1/3">
          <Header variant="4">{title}</Header>
          <div className="flex w-full mt-4 mb-4 boxshadow-3d-right">
            <div
              className="w-full m-4 text-sm text-white prose md:text-md lg:text-lg"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>
        <div className="flex justify-center w-3/4 mx-4 md:w-1/2 xl:w-1/3 md:justify-start">
          <Img
            title={title}
            fluid={image}
            className="w-full picture-border-sm-1"
            alt={title + " Preview Image"}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={
          "flex flex-wrap md:flex-nowrap w-full justify-center md:justify-start items-center"
        }
      >
        <div className="flex justify-center hidden w-3/4 mx-4 md:block md:w-1/2 xl:w-1/3 md:justify-end">
          <Img
            title={title}
            fluid={image}
            className="w-full picture-border-sm-2"
            alt={title + " Preview Image"}
          />
        </div>
        <div className="flex-wrap justify-start max-w-lg text-left md:w-3/4 md:ml-8 md:mr-4 md:flex md:w-1/2 xl:w-1/3">
          <Header variant="1">{title}</Header>
          <div className="flex w-full mt-4 mb-4 boxshadow-3d-left">
            <p className="w-full m-4 text-sm md:text-md lg:text-lg font-extralight font-manrope">
              {description}
            </p>
          </div>
        </div>
        <div className="flex justify-center w-3/4 mx-4 md:hidden md:w-1/2 xl:w-1/3 md:justify-end">
          <Img
            title={title}
            fluid={image}
            className="w-full picture-border-sm-2"
            alt={title + " Preview Image"}
          />
        </div>
      </div>
    );
  }
};

export default CodeArtPreview;
