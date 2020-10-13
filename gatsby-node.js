const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
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

  const posts = result.data.allContentfulBlogPost.edges

  posts.forEach(({ node }) => {
    createPage({
      component: path.resolve('./src/templates/blog.js'),
      path: `/${node.slug}/`,
      context: {
        slug: node.slug,
      },
    })
  })

  const postsPerPage = 10
  const totalPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: totalPages }).forEach((_, i) => {
    createPage({
      component: path.resolve('./src/templates/blog-list.js'),
      path: i === 0 ? '/blog/' : `/blog/page/${i + 1}/`,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        totalPages,
        currentPage: i + 1,
      },
    })
  })
}
