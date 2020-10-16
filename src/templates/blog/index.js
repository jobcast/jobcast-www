import React from 'react'
import { Link, graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Truncate from 'react-truncate'
import Layout from '../../components/layout'
import Paginator from '../../components/paginator'

import styles from './styles.module.css'

// To access our context (limit, skip), we can't use useStaticQuery. Instead, we have to export our query.
export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(
      sort: { fields: publishDate, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
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
`

const BlogList = ({ data, pageContext }) => {
  return (
    <Layout heading="Blog">
      {data.allContentfulBlogPost.edges.map(({ node }) => (
        <div key={node.id} className="clear margin-b15">
          <article>
            <div className={styles.title}>
              <h2>
                <Link to={`/${node.slug}/`} title={node.title}>
                  {node.title}
                </Link>
              </h2>
            </div>
            <div className={styles.date}>{node.publishDate}</div>
            <div className={styles.thumb}>
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
                  className={styles.readMore}
                >
                  Read More
                </Link>
              </p>
            )}
          </article>
        </div>
      ))}
      <Paginator
        basePath="/blog/"
        currentPage={pageContext.currentPage}
        totalPages={pageContext.totalPages}
      />
    </Layout>
  )
}

export default BlogList
