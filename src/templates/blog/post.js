import React from 'react'
import { graphql, Link } from 'gatsby'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Layout, { LayoutType } from '../../components/layout'
import RelatedPosts from '../../components/related-posts'

import styles from './styles.module.css'

// To access our context (slug), we can't use useStaticQuery. Instead, we have to export our query.
export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      author {
        slug
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
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

const Post = ({ data, pageContext }) => {
  const siteMatchRegex = new RegExp(
    '^' +
      data.site.siteMetadata.siteUrl
        .replace(/^https?/gi, 'https?')
        .replace(/\//g, '\\/')
        .replace(/\./g, '\\.')
  )

  return (
    <Layout
      type={LayoutType.SPLIT}
      title={data.contentfulBlogPost.title}
    >
      <article>
        <img
          className="aligncenter"
          src={`${data.contentfulBlogPost.heroImage.file.url}?w=720`}
          alt={data.contentfulBlogPost.heroImage.title}
          srcSet={`${data.contentfulBlogPost.heroImage.file.url}?w=720 720w, ${data.contentfulBlogPost.heroImage.file.url}?w=480 480w`}
          sizes="(max-width: 600px) 480px, 720px"
        />
        <div className={styles.title}>
          <h1>{data.contentfulBlogPost.title}</h1>
        </div>
        <div className={`${styles.date} clear font-12`}>
          <div className="pull-left">
            Posted by{' '}
            <Link to={`/${data.contentfulBlogPost.author.slug}/`}>
              {data.contentfulBlogPost.author.name}
            </Link>
          </div>
          <div className="pull-right">
            <span>{data.contentfulBlogPost.publishDate}</span>
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
                /> // by default, images don't get rendered
              ),
              [INLINES.HYPERLINK]: node => {
                if (node.data.uri.includes('youtube.com/embed'))
                  // https://www.contentfulcommunity.com/t/embed-youtube-or-vimeo-video-directly-into-rich-text-content-type/2639/3
                  return (
                    <span
                      style={{
                        paddingBottom: '56.25%',
                        position: 'relative',
                        display: 'block',
                        width: '100%',
                      }}
                    >
                      <iframe
                        style={{
                          height: '100%',
                          width: '100%',
                          position: 'absolute',
                          top: '0',
                          left: '0',
                        }}
                        title={
                          node.content.find(
                            c => c.nodeType === 'text'
                          ).value
                        }
                        src={node.data.uri}
                        frameBorder="0"
                        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </span>
                  )
                else if (node.content.length)
                  return siteMatchRegex.test(node.data.uri) ? (
                    <Link
                      to={node.data.uri.replace(siteMatchRegex, '')}
                    >
                      {node.content[0].value}
                    </Link>
                  ) : (
                    <a
                      href={node.data.uri}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {node.content[0].value}
                    </a>
                  )
              },
            },
            renderText: text =>
              text
                .split('\n')
                .flatMap((text, i) => [
                  i > 0 && <br key={`text-${i}`} />,
                  text,
                ]), // https://github.com/contentful/rich-text/issues/96#issuecomment-511100434
          }
        )}
      </article>
      <RelatedPosts slug={pageContext.slug} />
    </Layout>
  )
}

export default Post
