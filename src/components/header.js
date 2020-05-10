import React from 'react'

const Header = (props) => {
    return (
        <div className="table-title mb-0">
          <div className="row">
            <div className="col-sm-6">
              <h2>Manage <b>Employees</b> | CRUD</h2>
            </div>
            <div className="col-sm-6">
              <button className="btn btn-success" onClick={props.toggleAdd}>
                <i className="material-icons">&#xE147;</i> <span>Add New Employee</span>
              </button>
              					
            </div>
          </div>
        </div>
    )
  
}

export default Header
