import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => axios.get(baseUrl).then(response => response.data)

const create = (newContact) =>
  axios
    .post(baseUrl, newContact)
    .then(response => response.data)

const deleteContact = (id) => axios.delete(`${baseUrl}/${id}`)

const update = (id, contact) =>
  axios
    .put(`${baseUrl}/${id}`, contact)
    .then(response => response.data)

export default { getAll, create, deleteContact, update }
