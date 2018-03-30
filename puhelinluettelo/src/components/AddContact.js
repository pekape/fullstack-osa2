import React from 'react'

const AddContact = ({addContact, name, number, nameChange, numberChange}) => (
  <form onSubmit={addContact}>
    <div>
      nimi:
      <input value={name} onChange={nameChange} />
    </div>
    <div>
      numero:
      <input value={number} onChange={numberChange} />
    </div>
    <div>
      <button type="submit">lisää</button>
    </div>
  </form>
)

export default AddContact
