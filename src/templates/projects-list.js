import React from "react";
import Layout from "../components/Layout";
import Project from "../components/Project";

const [count, setCount] = useState(0);

const ProjectList = ({ data }) => {
  const projects = data.allMarkdownRemark.edges.filter((i) => {
    return i.node.fields.slug.startWith("/projects");
  });
  
  return (
    <Layout>
      <div className="flex flex-wrap mt-10 justify-center items-center mb-10 max-w-6xl w-full mx-auto">
        {projects.map(({ node }) => {
          {
            setCount(count + 1);
          }
          return (
            <Project
              title="HOLA"
              image="HOLA"
              type={count}
              description={"DSES"}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export const PostListQuery = graphql`
  query PostListQuery($skip: Int!, $limit: Int!) {
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
