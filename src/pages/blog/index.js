import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Truncate from 'react-truncate'
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
            heroImage {
              title
              file {
                url
              }
            }
            body {
              json
            }
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
            <div className="cate-thumb">
              <Link to={`/${node.slug}/`} title={node.title}>
                <img
                  className="aligncenter"
                  src={`${node.heroImage.file.url}?w=300&fit=thumb`}
                  alt={node.heroImage.title}
                />
              </Link>
            </div>
            {node.body && (
              <p>
                <Truncate lines={1} width={5000}>
                  {documentToReactComponents(node.body.json)}
                </Truncate>
                <Link
                  to={`/${node.slug}/`}
                  title={node.title}
                  className="view-article"
                >
                  Read More
                </Link>
              </p>
            )}
          </article>
        </div>
      ))}
    </Layout>
  )
}

export default BlogPage
