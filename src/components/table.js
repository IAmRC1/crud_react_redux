import React from 'react'

const Table = (props) => {

  console.log('props of table', props)

  return (
    <table className="table table-sm table-striped table-hover mt-3">
      <thead className="thead-dark">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? props.users.map((user, i) => {
          return (
            <tr key={i}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>{user.phone}</td>
              <td>
                <button className="edit" onClick={() => props.toggleUpdate(user.id)}>
                  <i className="material-icons">&#xE254;</i>
                </button>
                <button className="delete" onClick={() => props.deleteUser(user.id)}>
                  <i className="material-icons">&#xE872;</i>
                </button>
              </td>
              
            </tr>
          )
        }) :
        <tr>
          <td className="py-3">No Record Available</td>
        </tr>}
      </tbody>
    </table>
  )
  
}

export default Table