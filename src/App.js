import React, { useState } from 'react';
import Header from './components/header'
import Table from './components/table'
import Footer from './components/footer'
import Addemp from './containers/addemp'
import Updateemp from './containers/updateemp'
import userData from './userData.json'

const App = () =>  {
  const [users, setUsers] = useState(userData)
  const [currentUser, setCurrentUser] = useState(null)
  const [addModalView, setAddModalView]= useState(false)
  const [updateModalView, setUpdateModalView]= useState(false)

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5); //Change this number to get posts per page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentUsers = users.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = (num) => setCurrentPage(num)
  const prevPage = (num) => setCurrentPage(num-1)
  const nextPage = (num) => setCurrentPage(num+1)
  
  const toggleAdd = () => setAddModalView(!addModalView);
  const toggleUpdate = (id, user) => {
    currentUserFunc(user)
    setUpdateModalView(!updateModalView)
  };

  const addUser = user => {
    user.id = users.length + 1
    setUsers(users.concat(user))
    setAddModalView(false)
  }
  const deleteUser = id => setUsers(users.filter(user => user.id !== id))
  const currentUserFunc = (user) => setCurrentUser(user)
  const editUser = (userid, updatedUser) => setUsers(users.map(user => (user.id === userid ? updatedUser : user)))

  return (
    <section className="container">
      <div className="table-wrapper">
        <Header toggleAdd={toggleAdd} />
        <Table 
          users={currentUsers} 
          deleteUser={deleteUser} 
          editUser={editUser} 
          toggleUpdate={toggleUpdate} 
        />
        {users.length > 0 && 
          <Footer 
          users={users} 
          postsPerPage={postsPerPage} 
          paginate={paginate}
          currentPage={currentPage}
          indexOfLastPost={indexOfLastPost}
          indexOfFirstPost={indexOfFirstPost}
          prevPage={prevPage}
          nextPage={nextPage}
        />
        }
        
      </div>
      <Addemp 
        addUser={addUser} 
        addModalView={addModalView} 
        toggleAdd={toggleAdd} 
      />
      <Updateemp 
        editUser={editUser} 
        updateModalView={updateModalView} 
        toggleUpdate={toggleUpdate} 
        currentUser={currentUser} 
      />
    </section>
  );
}

export default App;
