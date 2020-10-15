import React from 'react'
import { Link } from 'gatsby'

import './styles.css'

const Paginator = ({ basePath, currentPage, totalPages }) => {
  const linkTo = page => {
    if (page < 1) page = 1
    if (page > totalPages) page = totalPages
    return page === 1 ? basePath : `${basePath}page/${page}/`
  }

  const pages = []

  pages.push({
    link: linkTo(currentPage - 1),
    label: '«',
    className: currentPage === 1 ? 'disabled' : '',
  })

  if (totalPages < 8)
    Array.from({ length: totalPages }).forEach((_, i) => {
      const page = i + 1
      pages.push({
        link: linkTo(page),
        label: page,
        className: currentPage === page ? 'active disabled' : '',
      })
    })
  else {
    if (currentPage > 5) {
      pages.push({
        link: linkTo(1),
        label: 1,
        className: 'pagination-d-none pagination-d-md-block',
      })
      pages.push({
        link: linkTo(1),
        label: '…',
        className: 'disabled pagination-d-none pagination-d-md-block',
      })
    }

    const startRange = Math.min(
      currentPage < 6 ? 1 : currentPage - 2,
      totalPages - 4
    )
    const endRange = Math.max(
      currentPage + 5 > totalPages ? totalPages : currentPage + 2,
      5
    )
    for (let page = startRange; page <= endRange; page++)
      pages.push({
        link: linkTo(page),
        label: page,
        className:
          page < currentPage - 2 || page > currentPage + 2
            ? 'pagination-d-none pagination-d-md-block'
            : currentPage === page
            ? 'active disabled'
            : '',
      })

    if (currentPage < totalPages - 4) {
      pages.push({
        link: linkTo(totalPages),
        label: '…',
        className: 'disabled pagination-d-none pagination-d-md-block',
      })
      pages.push({
        link: linkTo(totalPages),
        label: totalPages,
        className: 'pagination-d-none pagination-d-md-block',
      })
    }
  }

  pages.push({
    link: linkTo(currentPage + 1),
    label: '»',
    className: currentPage === totalPages ? 'disabled' : '',
  })

  return (
    <ul className="pagination pagination-lg pagination-justify-content-center">
      {pages.map(p => (
        <li className={`page-item ${p.className}`}>
          <Link to={p.link} className="page-link">
            {p.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Paginator
