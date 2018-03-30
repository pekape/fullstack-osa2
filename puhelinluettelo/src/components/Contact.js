import React from 'react'

const Contact = ({person}) => (
  <tr>
    <td>{person.name}</td>
    <td>{person.number}</td>
  </tr>
)

export default Contact
