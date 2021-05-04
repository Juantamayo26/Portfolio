import React from "react";

const Header = ({ variant, children }) => {
  return (
    <div className="w-full mt-5 mb-5 text-center">
      {variant === "1" && (
        <h3 className="inline px-3 pb-1 text-2xl font-bold text-black rounded-tr-lg rounded-bl-lg md:px-4 gradient-bg border-tl">
          {children}
        </h3>
      )}
      {variant === "2" && (
        <h3 className="inline px-3 pb-1 text-2xl font-bold text-black rounded-tr-lg rounded-bl-lg md:px-4 gradient-bg border-corners">
          {children}
        </h3>
      )}
      {variant === "3" && (
        <h3 className="inline px-5 pb-2 mb-5 text-xl font-normal rounded-tr-lg rounded-bl-lg sm:text-2xl md:text-3xl lg:text-4xl md:font-semibold title-bg text-themeOffWhite">
          {children}
        </h3>
      )}
      {variant === "4" && (
        <h3 className="inline px-3 pb-1 text-2xl font-bold text-black rounded-tl-lg rounded-br-lg md:px-4 gradient-bg-2 border-tr">
          {children}
        </h3>
      )}
    </div>
  );
};

export default Header;
