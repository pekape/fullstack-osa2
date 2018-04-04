import React from 'react';

import contactService from './services/contacts'

import Contacts from './components/Contacts'
import Contact from './components/Contact'
import AddContact from './components/AddContact'
import SearchForm from './components/SearchForm'
import Notification from './components/Notification'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: '',
      success: null,
      error: null
    }
  }

  componentWillMount() {
    contactService
      .getAll()
      .then(persons => {
        this.setState({ persons })
      })
      .catch(error => {
        console.log(error)
        alert("virhe tietojen haussa")
      })
  }

  resetMessage = () =>
    setTimeout(() => this.setState({ error: null, success: null }), 3000)

  nameChange = (event) => this.setState({newName: event.target.value})
  numberChange = (event) => this.setState({newNumber: event.target.value})
  filterChange = (event) => this.setState({filter: event.target.value})

  addContact = (event) => {
    event.preventDefault()
    const name = this.state.newName
    const number = this.state.newNumber
    const newContact = { name, number }

    const found = this.state.persons.find(p => p.name === name)

    if (found) {
      if (window.confirm(`${name} on jo listalla, korvataanko numero?`)) {
        contactService
        .update(found.id, newContact)
        .then(updatedContact => {
          this.setState({
            persons: this.state.persons.map(p =>
              p.id !== updatedContact.id ? p : updatedContact),
              newName: '',
              newNumber: '',
              success: `henkilön ${name} numero päivitetty`
          })
        })
        .catch(error => this.setState({ error: 'numeron päivitys epäonnistui' }))
      }

      this.resetMessage()
      return
    }

    contactService
      .create(newContact)
      .then(newContact => {
        this.setState({
          persons: this.state.persons.concat(newContact),
          newName: '',
          newNumber: '',
          success: `lisättiin ${name}`
        })
      })
      .catch(error => this.setState({ error: 'virhe lisäyksessä' }))

      this.resetMessage()
  }

  deleteContact = (person) => () => {
    if (window.confirm(`Poistetaanko ${person.name}`))
    contactService
      .deleteContact(person.id)
      .then(this.setState({
        persons: this.state.persons.filter(p => p.id !== person.id),
        success: `${person.name} poistettiin`
      }))
      .catch(error => this.setState({ error: 'virhe poistossa' }))

      this.resetMessage()
  }

  filterContacts = () => {
    const search = this.state.filter

    const contacts = this.state.persons
    .filter(person =>
      person.name.toLowerCase().includes(search.toLowerCase())
      || person.number.includes(search)
    ).map(person =>
      <Contact key={person.id} person={person}
        deleteContact={this.deleteContact(person)} />
    )

    return contacts
  }

  render = () => (
    <div>
      <h1>Puhelinluettelo</h1>

        { this.state.error ?
          <Notification type="error" message={this.state.error} /> :
          <Notification type="success" message={this.state.success} />}

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
