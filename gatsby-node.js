const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const posts = await graphql(`
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

  posts.data.allContentfulBlogPost.edges.forEach(({ node }) => {
    createPage({
      component: path.resolve('./src/templates/blog/post.js'),
      path: `/${node.slug}/`,
      context: {
        slug: node.slug,
      },
    })
  })

  await createBlogListPages(graphql, actions, 'blog', 'Blog')

  const categories = await graphql(`
    query {
      allContentfulBlogCategory {
        edges {
          node {
            slug
            name
          }
        }
      }
    }
  `)

  for (const category of categories.data.allContentfulBlogCategory
    .edges)
    await createBlogListPages(
      graphql,
      actions,
      category.node.slug,
      category.node.name,
      {
        categories: {
          elemMatch: {
            slug: { eq: category.node.slug },
          },
        },
      }
    )
}

const createBlogListPages = async (
  graphql,
  actions,
  slug,
  heading,
  filter
) => {
  const { createPage } = actions

  const result = await graphql(
    `
      query($filter: ContentfulBlogPostFilterInput) {
        allContentfulBlogPost(filter: $filter) {
          totalCount
        }
      }
    `,
    {
      filter,
    }
  )

  const postsPerPage = 10
  const totalPages = Math.ceil(
    result.data.allContentfulBlogPost.totalCount / postsPerPage
  )
  Array.from({ length: totalPages }).forEach((_, i) => {
    createPage({
      component: path.resolve('./src/templates/blog/index.js'),
      path: i === 0 ? `/${slug}/` : `/${slug}/page/${i + 1}/`,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        totalPages,
        currentPage: i + 1,
        basePath: `/${slug}/`,
        heading,
        filter,
      },
    })
  })
}
