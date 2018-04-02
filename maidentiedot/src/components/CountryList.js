import React from 'react'

const CountryList = ({countries, countryClicked}) => (
    <ul>
      { countries.map(country =>
        <li
          key={country.numericCode} onClick={countryClicked(country)}>
          {country.name}
        </li>) }
    </ul>
)

export default CountryList
