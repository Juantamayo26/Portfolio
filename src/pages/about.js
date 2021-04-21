import React from "react";
import Layout from "../components/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <div className="flex flex-wrap items-center justify-between w-full max-w-6xl mx-auto">
        <div className="w-full px-6 text-base leading-snug text-left font-manrope sm:text-lg font-extralight md:w-1/2 lg:px-8">
          <p className="w-full mt-2 sm:mt-4">
            In case it still wasn't clear, my name is <strong>Max</strong>.
          </p>
          <p className="w-full mt-3 sm:mt-5">
            I'm from <strong>Chicago, IL</strong>.
          </p>
          <p className="w-full mt-3 sm:mt-5">
            I study <strong>Computer Engineering</strong> with a minor in
            <strong> Technology and Management</strong> at <strong>UIUC</strong>
            .
          </p>
          <p className="w-full mt-3 sm:mt-5">
            In my free time I like to <strong>climb</strong> (bouldering), take{" "}
            <strong>pictures</strong> (currently rocking a Fuji X-T3), and
            <strong> travel</strong> (currently at 7 countries).
          </p>
          <p className="w-full mt-3 sm:mt-5">
            Yes, I realize how basic the above interests sound.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
