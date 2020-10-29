import React from 'react'

const YouTube = ({ title, src }) => {
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
        title={title}
        src={src}
        frameBorder="0"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </span>
  )
}

export default YouTube
