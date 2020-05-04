import React from 'react'

const Footer =(props)=> {
    return (
      <div className="clearfix">
        <div className="hint-text">Showing <b>{props.users.length}</b> out of <b>25</b> entries</div>
        <ul className="pagination">
          <li className="page-item"><a href="!#" className="page-link">Previous</a></li>
          <li className="page-item active"><a href="!#" className="page-link">1</a></li>
          <li className="page-item"><a href="!#" className="page-link">2</a></li>
          <li className="page-item"><a href="!#" className="page-link">3</a></li>
          <li className="page-item"><a href="!#" className="page-link">4</a></li>
          <li className="page-item"><a href="!#" className="page-link">5</a></li>
          <li className="page-item"><a href="!#" className="page-link">Next</a></li>
        </ul>
      </div>
    )
}
export default Footer
