import React, { useState, useEffect } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const initialFormState = { id: null, name: '', email: '', address: '', phone: '' }

const Updateemp = (props) => {

  const [user, setUser] = useState(initialFormState)
  
  useEffect(() => {
    if(props.currentUser){
      setUser(props.currentUser)
    }
  },[props.currentUser]);


  const handleInputChange = event => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }
  
  const handleSubmit = e => {
    e.preventDefault() 
    props.editUser(user.id, user)
    props.toggleUpdate()
  }
  
  return (
    <Modal isOpen={props.updateModalView} toggle={props.toggleUpdate}>
      <ModalHeader>
        Edit Employee
      </ModalHeader>
      <ModalBody>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" required name="name" value={user.name} onChange={e => handleInputChange(e)} />
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
        <Button color="default" onClick={props.toggleUpdate}>Cancel</Button>
        <Button color="success" className="mr-3" onClick={e => handleSubmit(e)} disabled={!user.name || !user.email|| !user.address || !user.phone}>Save</Button>
      </ModalFooter>
    </Modal>
  )
}

export default Updateemp
