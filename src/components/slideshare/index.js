import React from 'react'

const SlideShare = ({ title, src }) => {
  return (
    <iframe
      title={title}
      src={src}
      width="595"
      height="485"
      frameBorder="0"
      marginWidth="0"
      marginHeight="0"
      scrolling="no"
    ></iframe>
  )
}

export default SlideShare
