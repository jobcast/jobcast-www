import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
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
      body {
        json
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
        {documentToReactComponents(
          data.contentfulBlogPost.body.json,
          {
            renderNode: {
              'embedded-asset-block': node => (
                <img
                  className="aligncenter"
                  alt={node.data.target.fields.title['en-US']}
                  src={node.data.target.fields.file['en-US'].url}
                />
              ),
            }, // by default, images don't get rendered
            renderText: text =>
              text
                .split('\n')
                .flatMap((text, i) => [i > 0 && <br />, text]), // https://github.com/contentful/rich-text/issues/96#issuecomment-511100434
          }
        )}
      </article>
    </Layout>
  )
}

export default Blog
