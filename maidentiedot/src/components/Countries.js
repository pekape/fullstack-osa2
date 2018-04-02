import React from 'react'

const ShowCountry = ({country}) => {
  console.log(country);
  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital: {country.capital}</p>
      <p>population: {country.population}</p>
      <img src={country.flag} alt={"flag of " + country.name} width="500px"/>
    </div>
  )
}

const CountryList = ({countries}) => (
    <ul>
      { countries.map(country =>
        <li key={country.name}>{country.name}</li>) }
    </ul>
)

const Countries = ({countries}) => (
  countries.length === 1 ?
  <ShowCountry country={countries[0]} /> :
  <CountryList countries={countries} />
)

export default Countries
