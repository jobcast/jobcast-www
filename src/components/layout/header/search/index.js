import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch } from 'react-instantsearch-dom'
import {
  connectAutoComplete,
  Highlight,
} from 'react-instantsearch-dom'

import styles from './styles.module.css'

const Autocomplete = connectAutoComplete(
  ({ hits, currentRefinement, refine }) => {
    const [isActive, setIsActive] = useState(false)

    // technique to close search results when clicking outside of our component: https://stackoverflow.com/a/50558760/188740
    const containerRef = useRef()
    const handleClickOutside = e => {
      if (!containerRef.current.contains(e.target)) setIsActive(false)
    }

    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside)
      return () =>
        document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
      <div
        ref={containerRef}
        className={`${styles.searchContainer} ${
          isActive ? styles.searchContainerFocus : ''
        }`}
      >
        <form autoComplete="off">
          <div className={styles.autocomplete}>
            <input
              type="search"
              placeholder="Search"
              value={currentRefinement}
              onChange={e => refine(e.target.value)}
              onFocus={() => setIsActive(true)}
            />
            {isActive && !!currentRefinement.trim() && !!hits.length && (
              <div className={styles.autocompleteItems}>
                {hits.slice(0, 5).map(hit => (
                  <Link to={hit.url} key={hit.objectID}>
                    <Highlight
                      hit={hit}
                      attribute="title"
                      tagName="strong"
                    />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </form>
      </div>
    )
  }
)

const Search = () => {
  return (
    <InstantSearch
      indexName="jobcast-www"
      searchClient={algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY
      )}
    >
      <Autocomplete />
    </InstantSearch>
  )
}

export default Search
