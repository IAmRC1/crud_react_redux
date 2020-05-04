import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Removeemp = (props) => {
  console.log('props of removeemp', props)
  
  // const handleDelete = (e, id) => {
  //   e.preventDefault()
  //   props.deleteUser(id)
  //   console.log('id in modal', id)
  // }

  return (
    <Modal 
    // isOpen={props.removeModalView} toggle={props.toggleRemove}
    >
      <ModalHeader>
        Delete Employee
      </ModalHeader>
      <ModalBody>
        <p>Are you sure you want to delete these Records?</p>
        <p className="text-warning">
          <small>This action cannot be undone.</small>
        </p>
      </ModalBody>
      <ModalFooter>
        {/* <Button color="default" onClick={props.toggleRemove}>Cancel</Button>
        <Button color="danger" className="mr-3" onClick={(id) => handleDelete(id)}>Delete</Button> */}
      </ModalFooter>
    </Modal>
  )
}
export default Removeemp
