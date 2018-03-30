import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'arto asdfdasf', number: '040-123456' },
        { name: 'asdf zczzxczxc', number: '040-123456' }
      ],
      newName: '',
      newNumber: ''
    }
  }

  nameChange = (event) => this.setState({newName: event.target.value})
  numberChange = (event) => this.setState({newNumber: event.target.value})

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

  render() {
    const contacts = this.state.persons.map(person =>
        <tr key={person.name}>
          <td>{person.name}</td>
          <td>{person.number}</td>
        </tr>)

    return (
      <div>
        <h2>Puhelinluettelo</h2>

        <form onSubmit={this.addContact}>
          <div>
            nimi: <input value={this.state.newName}
                         onChange={this.nameChange} />
          </div>
          <div>
            numero: <input value={this.state.newNumber}
                           onChange={this.numberChange} />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>

        <h2>Numerot</h2>

        <table>
          <thead>
            <tr>
              <th>Nimi</th>
              <th>Numero</th>
            </tr>
          </thead>
          <tbody>
            {contacts}
          </tbody>
        </table>

      </div>
    )
  }
}

export default App
