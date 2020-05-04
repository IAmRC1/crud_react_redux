import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const initialFormState = { id: null, name: '', email: '', address: '', phone: '' }

const Addemp = (props) => {
  console.log('props of addemp', props)
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = e => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }
  
  const handleSubmit = e => {
    e.preventDefault()
    props.addUser(user)
    setUser(initialFormState)
  }

  return (
  <Modal isOpen={props.addModalView} toggle={props.toggleAdd}>
    <ModalHeader>
      Add Employee
    </ModalHeader>
    <ModalBody>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" required name="name" value={user.name} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" required name="email" value={user.email} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Address</label>
          <textarea className="form-control" required name="address" value={user.address} onChange={handleInputChange}></textarea>
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="text" className="form-control" required name="phone" value={user.phone} onChange={handleInputChange} />
        </div>
      </form>
    </ModalBody>
    <ModalFooter>
      <Button color="default" onClick={props.toggleAdd}>Cancel</Button>
      <Button color="success" className="mr-3" onClick={e => handleSubmit(e)} disabled={!user.name || !user.email|| !user.address || !user.phone}>Add</Button>
    </ModalFooter>
  </Modal>
  )
}

export default Addemp