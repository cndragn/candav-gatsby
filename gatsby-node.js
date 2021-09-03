const path = require("path")
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`)

exports.onCreateWebpackConfig = ({ actions, plugins }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        stream: require.resolve("stream-browserify"),
        zlib: require.resolve("browserify-zlib"),
      },
      fallback: { fs: false, crypto: false },
    },
    plugins: [
      plugins.provide({
        process: "process/browser",
        Buffer: ["buffer", "Buffer"],
      }),
    ],
  })
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
    {
      allMarkdownRemark(
        sort: {fields: [frontmatter___date], order: DESC}, 
         ${
           process.env.NODE_ENV === "production"
             ? "filter: {frontmatter: {draft: {ne: true}}}"
             : ""
         }
         limit: 1000
      ) {
        edges {
          node {
              fields{
                  slug
              }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          return reject(result.errors)
        }
        const blogTemplate = path.resolve("./src/templates/blog-post.js")
        const posts = result.data.allMarkdownRemark.edges
        posts.forEach(({ node }, index) => {
          createPage({
            path: node.fields.slug,
            component: blogTemplate,
            context: {
              slug: node.fields.slug,
              prev: index === 0 ? null : posts[index - 1],
              next: index === result.length - 1 ? null : posts[index + 1],
            }, // additional data can be passed via context
          })
        })
        return
      })
    )
  })
}

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
