import React from 'react'

const SearchForm = ( {filter, handler }) => (
  <div>
    find countries:
    <input value={filter} onChange={handler} />
  </div>
)

export default SearchForm
