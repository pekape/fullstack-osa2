import React from 'react';
import axios from 'axios'
import Contacts from './components/Contacts'
import Contact from './components/Contact'
import AddContact from './components/AddContact'
import SearchForm from './components/SearchForm'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  componentWillMount() {
    const promise = axios.get('http://localhost:3001/persons')
    const eventHandler = (response =>
      this.setState({
        persons: response.data
      }))
    promise.then(eventHandler)
  }

  nameChange = (event) => this.setState({newName: event.target.value})
  numberChange = (event) => this.setState({newNumber: event.target.value})
  filterChange = (event) => this.setState({filter: event.target.value})

  addContact = (event) => {
    event.preventDefault()
    const name = this.state.newName

    if (this.state.persons.map(person => person.name).includes(name)) {
      alert('Henkilö on jo listalla')
      return
    }

    const number = this.state.newNumber
    const newContact = { name, number }
    const persons = this.state.persons.concat(newContact)
    this.setState({
      persons,
      newName: '',
      newNumber: ''
    })
  }

  filterContacts = () => {
    const search = this.state.filter

    const contacts = this.state.persons
    .filter(person =>
      person.name.toLowerCase().includes(search.toLowerCase())
      || person.number.includes(search)
    ).map(person =>
      <Contact key={person.name} person={person} />
    )

    return contacts
  }

  render = () => (
    <div>
      <h1>Puhelinluettelo</h1>

      <SearchForm
        filter={this.state.filter}
        handler={this.filterChange}
      />

      <h3>Lisää uusi</h3>

      <AddContact
        addContact={this.addContact}
        name={this.state.newName} nameChange={this.nameChange}
        number={this.state.newNumber} numberChange={this.numberChange}
      />

      <h3>Numerot</h3>

      <Contacts contacts={this.filterContacts()} />

    </div>
  )
}

export default App
