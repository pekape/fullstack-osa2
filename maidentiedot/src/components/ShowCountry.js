import React from 'react'

const ShowCountry = ({country}) => (
    <div>
      <h1>{country.name}</h1>
      <p>capital: {country.capital}</p>
      <p>population: {country.population}</p>
      <img src={country.flag} alt={"flag of " + country.name} width="500px"/>
    </div>
)

export default ShowCountry
