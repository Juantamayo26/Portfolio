const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const courses = result.data.allMarkdownRemark.edges.filter((i) => {
    return i.node.fields.slug.startsWith("/courses");
  });
  const projects = result.data.allMarkdownRemark.edges.filter((i) => {
    return i.node.fields.slug.startsWith("/projects");
  });

  const courseList = path.resolve("./src/templates/courses-list.js");
  const projecList = path.resolve("./src/templates/projects-list.js");

  const { paginate } = require("gatsby-awesome-pagination");

  paginate({
    createPage,
    items: courses,
    itemsPerPage: 10,
    pathPrefix: "/courses",
    component: courseList,
  });

  paginate({
    createPage,
    items: projects,
    itemsPerPage: 10,
    pathPrefix: "/projects",
    component: projecList,
  });
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(glsl|frag|vert|geom|comp|vs|fs|gs|vsh|fsh|gsh|vshader|fshader|gshader)$/,
          use: ["raw-loader"],
        },
      ],
    },
  });

  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /p5/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
