import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const ProjectList = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.filter((i) => {
    return i.node.fields.slug.startsWith("/courses");
  });

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
                  <a
                    href={node.frontmatter.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Img
                      className="w-full h-64 mb-2 picture-border-sm-2"
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                      title={node.frontmatter.title}
                      alt={node.frontmatter.title}
                    />
                  </a>
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
  query PostListQuery ($skip: Int!, $limit: Int!){
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip 
      limit: $limit 

    ){
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            link
            image {
              childImageSharp {
                fluid(maxWidth: 550) {
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
