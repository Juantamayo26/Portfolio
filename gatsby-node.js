const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}


exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  createPage({
    path: "/no-data/",
    component: require.resolve("./src/templates/example.js"),
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
