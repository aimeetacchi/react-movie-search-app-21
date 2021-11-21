import React, { useState } from 'react'

const Search = ({searchMovie}) => {
  const [searchName, setSearchName] = useState("");

  const submitFormSearch = (e) => {
    e.preventDefault()
    // Call function at root to pass search value back up too
    searchMovie(searchName)

  }

  return (
    <form onSubmit={submitFormSearch}>
      <label>Search Movie:
      <input
        type="text" 
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />
      </label>
    </form>
  )
}

export default Search
