import React from 'react'

const Contacts = ({contacts}) => (
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
)

export default Contacts
