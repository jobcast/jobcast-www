import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import styles from './styles.module.css'

const chunk = (arr, len) => {
  const chunks = []
  let i = 0

  while (i < arr.length) chunks.push(arr.slice(i, (i += len)))
  return chunks
}

const RelatedPosts = ({ slug }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        sort: { fields: publishDate, order: DESC }
      ) {
        edges {
          node {
            id
            slug
            title
            heroImage {
              title
              file {
                url
              }
            }
            categories {
              slug
            }
          }
        }
      }
    }
  `)

  const posts = data.allContentfulBlogPost.edges.map(e => e.node)

  const currentPost = posts.filter(p => p.slug === slug)[0]
  if (!currentPost) return null

  const relatedPosts = posts
    .filter(
      p =>
        p.slug !== currentPost.slug &&
        currentPost.categories.some(cp =>
          p.categories.some(c => c.slug === cp.slug)
        )
    )
    .sort(() => 0.5 - Math.random()) // shuffle https://stackoverflow.com/a/7158691/188740
    .slice(0, 6) // take first 6

  if (!relatedPosts.length) return null

  const chunks = chunk(relatedPosts, 3)

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Related Posts</h3>
      {chunks.map((chunk, index) => (
        <div key={`chunk-${index}`} className={styles.row}>
          {chunk.map(post => (
            <div key={post.id} className="col-sm-4 col-xs-12">
              <div className={styles.card}>
                <div>
                  <Link to={`/${post.slug}/`} title={post.title}>
                    <img
                      src={`${post.heroImage.file.url}?w=300&fit=thumb`}
                      alt={post.heroImage.title}
                    />
                  </Link>
                </div>
                <div>
                  <Link to={`/${post.slug}/`} title={post.title}>
                    {post.title}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default RelatedPosts
