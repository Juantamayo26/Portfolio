import React from "react";
import Navigation from "./Navigation";
import SocialMedia from "./SocialMedia";

const Layout = ({ children }) => {
  return (
    <div className="h-full min-h-screen antialiased text-white text-themeOffWhite font-manrope">
      <Navigation />
      {children}
      <SocialMedia />
      <footer className="flex justify-center">
        &copy; {new Date().getFullYear()} Juan Tamayo <span role="img">👋</span>
      </footer>
    </div>
  );
};

export default Layout;
