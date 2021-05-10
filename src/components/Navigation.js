import { Link } from "gatsby";
import React from "react";
import NavItem from "./NavItem";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Navigation = () => {
  const myResume = useStaticQuery(graphql`
    {
      pdf: file(name: { eq: "resume" }) {
        publicURL
      }
    }
  `);
  return (
    <nav className="flex flex-wrap items-start justify-center w-full max-w-6xl pb-1 mx-auto mb-6 bg-black nav-border">
      <Link to="/" className="flex w-1/2 mt-1 mb-3 md:hidden">
        <StaticImage 
          src="../images/Logo.png"
          alt="Juan Tamayo"
          className="w-full"
          layout="constrained"
          placeholder="tracedSVG"
          tracedSVGOptions={{background: "#000000", color: "#0bbcd6"}}
        />
      </Link>


      <div className="flex items-end justify-around w-11/12 mt-2 flex-nowrap">
        <a
          className="flex justify-center w-1/4 p-1 mr-5 text-sm font-light no-underline first boxshadow-3d-left md:text-lg text-themeOffWhite font-manrope md:mr-6 md:w-2/12 duration-700 hover:boxshadow-3d-collapse hover:gradient"
          href={myResume.pdf.publicURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>RESUME</p>
        </a>
        <NavItem to="/courses/" className="boxshadow-3d-left">
          COURSES
        </NavItem>
        <Link to="/" className="hidden md:flex md:w-4/12 md:mr-6">
          <StaticImage 
            src="../images/Logo.png"
            alt="Juan Tamayo"
            className="w-full"
            layout="constrained"
            placeholder="tracedSVG"
            tracedSVGOptions={{background: "#000000", color: "#0bbcd6"}}
          />
        </Link>
        <NavItem
          to="/projects/"
          className="boxshadow-3d-left md:boxshadow-3d-right"
        >
          PROJECTS
        </NavItem>
        <NavItem
          to="/"
          className="last boxshadow-3d-left md:boxshadow-3d-right"
        >
          ABOUT
        </NavItem>
      </div>
    </nav>
  );
};

export default Navigation;
