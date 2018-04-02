import React from 'react'

const Contact = ({person, deleteContact}) => (
  <tr>
    <td>{person.name}</td>
    <td>{person.number}</td>
    <td><button onClick={deleteContact}>Poista</button></td>
  </tr>
)

export default Contact
