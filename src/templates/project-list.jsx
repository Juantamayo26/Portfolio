import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const ProjectList = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-wrap items-end justify-center w-full mt-8">
          {posts.map(({ node }) => {
            return (
              <div
                className="flex items-center justify-center w-full px-4 pb-6 flex-nowrap md:w-1/2"
                key={node.id}
              >
                <div className="w-full">
                  <h3 className="w-full mb-2 text-2xl font-light text-left font-manrope text-themeBlue">
                    {node.frontmatter.title}
                  </h3>
                    <Img
                      className = "w-full h-64 mb-2 picture-border-sm-2"
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                      title={"HOLA"}
                      alt={node.frontmatter.title}
                    />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export const PostListQuery = graphql`
  query PostListQuery {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 450) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default ProjectList;
