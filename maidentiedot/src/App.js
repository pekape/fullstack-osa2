import React, { Component } from 'react'
import axios from 'axios'

import Countries from './components/Countries'
import SearchForm from './components/SearchForm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      filter: ''
    }
  }

  componentWillMount() {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(response => this.setState({
      countries: response.data
    }))
  }

  filterChange = (event) => this.setState({filter: event.target.value})

  filterCountries = () => {
    const search = this.state.filter
    return this.state.countries.filter(country =>
      country.name.toLowerCase().includes(search.toLowerCase()))
  }

  render() {
    const filteredCountries =  this.filterCountries()

    return (
      <div>
        <SearchForm filter={this.state.filter} handler={this.filterChange} />

        { filteredCountries.length > 9 ?
          <p>too many matches, specify another filter</p> :
          <Countries countries={filteredCountries} /> }

      </div>
    )
  }
}

export default App
