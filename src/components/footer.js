import React from 'react'

const Footer =(props)=> {
  const pageNumbers = [];
  const totalPages = Math.ceil(props.users.length/props.postsPerPage)
  for(let i=1 ; i<= totalPages; i++){
    pageNumbers.push(i)
  }
  
  return (
    <div className="d-flex-between">
      <div className="hint-text">Showing <b>{props.indexOfFirstPost===0?"1":props.indexOfFirstPost}-{props.indexOfLastPost<props.users.length?props.indexOfLastPost:props.users.length}</b> out of <b>{props.users.length}</b> entries</div>
      <div>
        <ul className="pagination">
          <li className={`page-item ${props.currentPage === 1 ? 'disabled' : ''}`}>
            <a href="!#" className="page-link" onClick={() => props.prevPage(props.currentPage)}>&laquo;</a>
          </li>
          {pageNumbers.map(num => (
            <li key={num} className={`page-item ${props.currentPage === num ? 'active' : ''}`}>
              <a href="!#" className="page-link" onClick={() => props.paginate(num)}>{num}</a>
            </li>
            )
          )}
          <li className={`page-item ${props.currentPage === totalPages ? 'disabled' : ''}`}>
            <a href="!#" className="page-link" onClick={() => props.nextPage(props.currentPage)}>&raquo;</a>
          </li>
        </ul>
        
      </div>
    </div>
  )
}
export default Footer
