import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' },
        { name: 'arto asdfdasf' },
        { name: 'asdf zczzxczxc' }
      ],
      newName: ''
    }
  }

  addContact = (event) => {
    event.preventDefault()
    const name = this.state.newName

    if (this.state.persons.map(person => person.name).includes(name)) {
      alert('Henkilö on jo listalla')
      return
    }

    const newContact = { name }
    const persons = this.state.persons.concat(newContact)
    this.setState({
      persons,
      newName: ''
    })
  }

  nameChange = (event) => this.setState({newName: event.target.value})

  render() {
    const nimet = this.state.persons
      .map(person => <li key={person.name}>{person.name}</li>)

    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addContact}>
          <div>
            nimi: <input value={this.state.newName} onChange={this.nameChange}/>
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <ul>
          {nimet}
        </ul>
      </div>
    )
  }
}

export default App
