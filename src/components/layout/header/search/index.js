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
    const [focusedIndex, setFocusedIndex] = useState(-1)

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

    const dropdownRef = useRef()
    const handleKeyDown = e => {
      if (![38, 40, 13].includes(e.keyCode)) return

      e.preventDefault()

      switch (e.keyCode) {
        case 38: // up
          if (focusedIndex < 0) return
          setFocusedIndex(i => i - 1)
          break
        case 40: // down
          if (
            focusedIndex >=
            dropdownRef.current.childElementCount - 1
          )
            return
          setFocusedIndex(i => i + 1)
          break
        case 13: // enter
          dropdownRef.current.children[focusedIndex].click()
          break
        default:
          break
      }
    }

    const handleChange = e => {
      setFocusedIndex(-1)
      refine(e.target.value)
    }

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
              onChange={handleChange}
              onFocus={() => setIsActive(true)}
              onKeyDown={handleKeyDown}
            />
            {isActive && !!hits.length && (
              <div
                className={styles.autocompleteItems}
                ref={dropdownRef}
              >
                {hits.slice(0, 5).map((hit, i) => (
                  <Link
                    to={hit.url}
                    key={hit.objectID}
                    className={
                      focusedIndex === i ? styles.focused : ''
                    }
                  >
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
  // Implement a proxy to prevent empty searches for initial display: https://www.algolia.com/doc/guides/building-search-ui/going-further/conditional-requests/js/#implementing-a-proxy
  const algoliaClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  )
  const searchClient = {
    search: requests => {
      // In some cases, such as when the end user clicks on a refinementList, this can trigger multiple requests.
      // We therefore need to make sure that every query is empty before we intercept the function call.
      if (requests.every(({ params }) => !params.query)) {
        return Promise.resolve({
          results: requests.map(() => ({
            hits: [],
            nbHits: 0,
            nbPages: 0,
            page: 0,
            processingTimeMS: 0,
          })),
        })
      }

      return algoliaClient.search(requests)
    },
  }

  return (
    <InstantSearch
      indexName="jobcast-www"
      searchClient={searchClient}
    >
      <Autocomplete />
    </InstantSearch>
  )
}

export default Search
