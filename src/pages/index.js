import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header"
import WorkExperiences from '../components/WorkExperiences'

const AboutPage = () => {
  return (
    <Layout>
      <div className="p-12">
        <div className="flex flex-wrap items-center justify-between w-full max-w-6xl mx-auto">
          <div className="w-full px-6 text-base leading-snug text-left font-manrope sm:text-lg font-extralight md:w-1/2 lg:px-8">
            <p className="w-full mt-2 sm:mt-4">
              My name is Juan Carlos Yepes Tamayo, I'm from Colombia, I like so
              much the programming specially the algorithms.
            </p>
            <p className="w-full mt-3 sm:mt-5">
              I study Computer Engineering at Technological University of Pereira 
              (UTP).
            </p>
            <p className="w-full mt-3 sm:mt-5">
              In my spare time I like learn algorithm from cp-algorithm and
              participate on competencies of codeforces and leetcode <span>👨‍💻</span>.
            </p>
            <p className="w-full mt-3 mb-4 sm:mt-5">
              Outside of computer science, I enjoy hiking and play videogames <span>🎮</span>.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <Header variant="1">My Experience</Header>
            <WorkExperiences />
          </div>

          <a
            href="mailto:juancyepest@gmail.com"
            className="flex items-center justify-center mx-auto mt-8 flex-nowrap hover:text-themeBlue hover:border-corners duration-300"
          >
            juancyepest@gmail.com
          </a>

        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
