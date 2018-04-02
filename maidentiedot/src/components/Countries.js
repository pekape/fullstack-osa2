import React from 'react'

import ShowCountry from './ShowCountry'
import CountryList from './CountryList'

const Countries = ({countries, countryClicked}) => (
  countries.length === 1 ?
  <ShowCountry country={countries[0]} /> :
    <CountryList countries={countries} countryClicked={countryClicked}/>
  )

export default Countries
