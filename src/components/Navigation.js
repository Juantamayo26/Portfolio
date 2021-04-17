import { Link } from "gatsby";
import React from "react";
import NavItem from "./NavItem";

const Navigation = () => {
  return (
    <nav className="flex flex-wrap items-start justify-center w-full max-w-6xl pb-1 mx-auto mb-6 text-white bg-black nav-border">
      <Link to="/" className="flex w-1/2 mt-1 mb-3 md:hidden">
        Hola2
      </Link>

      <div className="flex items-end justify-around w-11/12 mt-2 flex-nowrap">
        <NavItem to="/photos/" className="text-white first boxshadow-3d-left">
          BLOG
        </NavItem>
        <NavItem to="/videos/" className="boxshadow-3d-left">
          ALGORITHMS
        </NavItem>

        <Link to="/" className="hidden md:flex md:w-4/12 md:mr-6">
          JUAN TAMAYO
        </Link>

        <NavItem
          to="/code_art/"
          className="boxshadow-3d-left md:boxshadow-3d-right"
        >
          PROJECTS
        </NavItem>
        <NavItem
          to="/about/"
          className="last boxshadow-3d-left md:boxshadow-3d-right"
        >
          ABOUT
        </NavItem>
      </div>
    </nav>
  );
};

export default Navigation;
