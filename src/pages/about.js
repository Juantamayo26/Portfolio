import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

const AboutPage = ({ data }) => {
  const user = data.githubData.data.viewer;
  console.log(user.avatarUrl);
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
              I study Computer Engineering at Universidad Tecnologica de Pereira
              (UTP).
            </p>
            <p className="w-full mt-3 sm:mt-5">
              In my spare time I like learn algorithm from cp-algorithm and
              participate on competencies of codeforces and leetcode👨‍💻.
            </p>
            <p className="w-full mt-3 mb-4 sm:mt-5">
              Outside of computer science, I enjoy hiking, playing with my puppy
              🐕 and play videogames 🎮.
            </p>
          </div>
          <div className="flex justify-center w-full prose md:w-1/2">
            <div className="flex flex-wrap justify-center h-full p-5 mb-1 w-25 picture-border-sm-1">
              <h1 className="mb-5">{user.name}</h1>
              <img
                className="picture-border-sm-2"
                src={user.avatarUrl}
                alt=""
              />
              <p>{user.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const GithubApi = graphql`
  query GithubApi {
    githubData {
      data {
        viewer {
          avatarUrl
          bio
          email
          location
          login
          name
          url
        }
      }
    }
  }
`;

export default AboutPage;
