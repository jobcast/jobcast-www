import React from 'react'
import { graphql } from 'gatsby'
import { BLOCKS } from '@contentful/rich-text-types'
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
`

const Blog = ({ data }) => {
  return (
    <Layout>
      <article>
        <img
          className="aligncenter"
          src={`${data.contentfulBlogPost.heroImage.file.url}?w=720`}
          alt={data.contentfulBlogPost.heroImage.title}
          srcset={`${data.contentfulBlogPost.heroImage.file.url}?w=720 720w, ${data.contentfulBlogPost.heroImage.file.url}?w=480 480w`}
          sizes="(max-width: 600px) 480px, 720px"
        />
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
              [BLOCKS.EMBEDDED_ASSET]: node => (
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
