require('dotenv').config()

const githubAPIKey = process.env.GITHUB_API_KEY

module.exports = {
  siteMetadata: {
    title: "Juan Tamayo",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-github-api",
      options: {
        token: githubAPIKey,
        graphQLQuery: `
          query {
            viewer {
              repositories(last: 20, orderBy: {field: UPDATED_AT, direction: DESC}, privacy: PUBLIC) {
                totalCount
                nodes {
                  url
                  name
                  description
                  stargazers {
                    totalCount
                  }
                  readme: object(expression: "main:README.md") {
                    ... on Blob {
                      text
                    }
                  }
                }
              }
              avatarUrl(size: 250)
              bio
              createdAt
              email
              location
              login
              name
              url
            }
          }
        `,
      },
    },

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          `gatsby-remark-codefence`,
          `gatsby-remark-katex`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          {
            // for youtube
            resolve: "gatsby-remark-embed-youtube",
            options: {
              width: 800,
              height: 400,
            },
          },
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "pages",
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
  ],
};
