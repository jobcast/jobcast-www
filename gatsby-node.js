const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog.js')
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach(({ node }) => {
    createPage({
      component: blogTemplate,
      path: `/${node.slug}/`,
      context: {
        slug: node.slug,
      },
    })
  })
}
