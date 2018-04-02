import React from 'react'

const SearchForm = ( {filter, handler, onClick }) => (
  <div>
    find countries:
    <input value={filter} onChange={handler} onClick={onClick} />
  </div>
)

export default SearchForm
