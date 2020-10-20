import React from 'react'
import { Link, graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Truncate from 'react-truncate'
import Layout, { LayoutType } from '../../components/layout'
import Paginator from '../../components/paginator'
import { Helmet } from 'react-helmet'

import styles from './styles.module.css'

// To access our context (limit, skip), we can't use useStaticQuery. Instead, we have to export our query.
export const query = graphql`
  query(
    $skip: Int!
    $limit: Int!
    $filter: ContentfulBlogPostFilterInput
  ) {
    allContentfulBlogPost(
      sort: { fields: publishDate, order: DESC }
      filter: $filter
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
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

const BlogList = ({ data, pageContext }) => {
  const prev =
    pageContext.currentPage > 1
      ? pageContext.currentPage === 2
        ? `${data.site.siteMetadata.siteUrl}${pageContext.basePath}`
        : `${data.site.siteMetadata.siteUrl}${
            pageContext.basePath
          }page/${pageContext.currentPage - 1}/`
      : null

  const next =
    pageContext.currentPage < pageContext.totalPages
      ? `${data.site.siteMetadata.siteUrl}${
          pageContext.basePath
        }page/${pageContext.currentPage + 1}/`
      : null
  return (
    <>
      <Helmet>
        {prev && <link rel="prev" href={prev} />}
        {next && <link rel="next" href={next} />}
      </Helmet>
      <Layout type={LayoutType.SPLIT} heading={pageContext.heading}>
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
                    src={`${node.heroImage.file.url}?w=300&fit=thumb`}
                    alt={node.heroImage.title}
                  />
                </Link>
              </div>
              {node.body && (
                <div>
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
                </div>
              )}
            </article>
          </div>
        ))}
        <Paginator
          basePath={pageContext.basePath}
          currentPage={pageContext.currentPage}
          totalPages={pageContext.totalPages}
        />
      </Layout>
    </>
  )
}

export default BlogList
