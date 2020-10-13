import React from 'react'
import { Link } from 'gatsby'

import styles from './styles.module.css'

const Paginator = ({ basePath, currentPage, totalPages }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === totalPages
  const prevPage =
    currentPage - 1 === 1
      ? basePath
      : `${basePath}page/${currentPage - 1}/`
  const nextPage = `${basePath}page/${currentPage + 1}/`
  return (
    <div className={styles.paginator}>
      {!isLast && (
        <Link className={styles.next} to={nextPage} rel="next">
          Next Page →
        </Link>
      )}
      {!isFirst && (
        <Link to={prevPage} rel="prev">
          ← Previous Page
        </Link>
      )}
    </div>
  )
}

export default Paginator
