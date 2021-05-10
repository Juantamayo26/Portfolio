import React, { useRef } from "react";
import Layout from "../components/Layout";
import Project from "../components/Project";
import { graphql } from "gatsby";

const ProjectList = ({ data }) => {
  const projects = data.allMarkdownRemark.edges.filter((i) => {
    return i.node.fields.slug.startsWith("/projects");
  });
  const countRef = useRef(0);

  return (
    <Layout>
      <div className="flex flex-wrap items-center justify-center w-full max-w-6xl mx-auto mt-10 mb-10">
        {projects.map(({ node }) => {
          return (
              <Project
                title={node.frontmatter.title}
                image={node.frontmatter.image.childImageSharp.fluid}
                type={countRef.current++}
                description={node.html}
                key={node.id}
              />
          );
        })}
      </div>
    </Layout>
  );
};

export const ProjectListQuery = graphql`
  query ProjectListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          fields {
            slug
          }
          id
          html
          frontmatter {
            title
            link
            description
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
