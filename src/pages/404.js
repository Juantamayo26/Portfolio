import React from "react";
import Layout from "../components/Layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="flex flex-wrap items-center justify-between w-full max-w-6xl mx-auto text-white">
        <div className="w-full text-lg leading-snug text-center font-manrope sm:text-xl font-extralight">
          <p>
            This page does not exist! Maybe it will in the future? Probably not.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
