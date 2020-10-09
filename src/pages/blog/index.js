import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        sort: { fields: publishDate, order: DESC }
      ) {
        edges {
          node {
            slug
            title
            publishDate(formatString: "MMMM D")
          }
        }
      }
    }
  `)

  return (
    <Layout title="Blog">
      {data.allContentfulBlogPost.edges.map(({ node }) => (
        <div className="clear margin-b15">
          <article>
            <div className="cate-title">
              <h2>
                <Link to={`/${node.slug}/`} title={node.title}>
                  {node.title}
                </Link>
              </h2>
            </div>
            <div className="cate-date">{node.publishDate}</div>
          </article>
        </div>
      ))}
    </Layout>
  )
}

export default BlogPage
