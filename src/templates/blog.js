import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

// To access our context (slug), we can't use useStaticQuery. Instead, we have to export our query.
export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      author {
        name
      }
    }
  }
`

const Blog = ({ data }) => {
  return (
    <Layout>
      <article>
        <div className="cate-title">
          <h1>{data.contentfulBlogPost.title}</h1>
        </div>
        <div className="cate-date clear font-12">
          <div className="pull-left">
            <span className="author">
              {data.contentfulBlogPost.author.name}
            </span>
          </div>
          <div className="pull-right">
            <span className="date">
              {data.contentfulBlogPost.publishDate}
            </span>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export default Blog
