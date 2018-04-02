import React, { Component } from 'react'
import axios from 'axios'

import Countries from './components/Countries'
import ShowCountry from './components/ShowCountry'
import SearchForm from './components/SearchForm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      filter: '',
      focus: null
    }
  }

  componentWillMount() {
    axios.get(
    'https://restcountries.eu/rest/v2/all?fields=name;numericCode;capital;population;flag')
    .then(response => this.setState({
      countries: response.data
    }))
  }

  filterChange = (event) => this.setState({
    filter: event.target.value,
    focus: null
  })

  filterCountries = () => {
    const search = this.state.filter
    return this.state.countries.filter(country =>
      country.name.toLowerCase().includes(search.toLowerCase()))
  }

  searchFocused = () => this.setState({ focus: null })

  countryClicked = country => () => this.setState({ focus: country })

  render() {
    const filteredCountries =  this.filterCountries()

    return (
      <div>
        <SearchForm
          filter={this.state.filter}
          handler={this.filterChange}
          onClick={this.searchFocused}
        />

        { this.state.focus ? <ShowCountry country={this.state.focus} /> :

           filteredCountries.length > 9 ?
          <p>too many matches, specify another filter</p> :
          <Countries countries={filteredCountries}
                     countryClicked={this.countryClicked} /> }

      </div>
    )
  }
}

export default App
