import React from "react";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <div className="h-full min-h-screen antialiased text-themeOffWhite font-manrope">
      <Navigation />
      {children}
      <footer className="flex justify-center text-white">&copy; {new Date().getFullYear()} Juan Tamayo</footer>
    </div>
  );
};

export default Layout;
