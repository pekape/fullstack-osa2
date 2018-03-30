import React from 'react'

const SearchForm = ({filter, handler}) => (
  <div>
    rajaa näytettäviä
    <input value={filter} onChange={handler} />
  </div>
)

export default SearchForm
