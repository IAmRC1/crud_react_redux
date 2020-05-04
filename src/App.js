import React, { useState } from 'react';
import Header from './components/header'
import Table from './components/table'
import Footer from './components/footer'
import Addemp from './containers/addemp'
import Updateemp from './containers/updateemp'
const userData = [
  {
    id: 1,
    name: 'Thomas Hardy',
    email: 'thomashardy@mail.com',
    address: '89 Chiaroscuro Rd, Portland, USA',
    phone: '13523542345'
  },
  {
    id: 2,
    name: 'Dominique Perrier',
    email: 'dominiqueperrier@mail.com',
    address: 'Obere Str. 57, Berlin, Germany',
    phone: '24576454674'
  },
  {
    id: 3,
    name: 'Maria Anders',
    email: 'mariaanders@mail.com',
    address: '25, rue Lauriston, Paris, France',
    phone: '39745764561'
  },

]

const App = () =>  {
  const [users, setUsers] = useState(userData)
  const [addModalView, setAddModalView]= useState(false)
  const [updateModalView, setUpdateModalView]= useState(false)

  const toggleAdd = () => setAddModalView(!addModalView);
  const toggleUpdate = (key) => {
    console.log('key', key)
    editUser(key);
    setUpdateModalView(!updateModalView)};


  const addUser = user => {
    user.id = users.length + 1
    setUsers(users.concat(user))
    setAddModalView(false)
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  // const updateUser = (id, updatedUser) => {
  //   setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  // }

  const editUser = (user, key) => {
    console.log('key', key)
    console.log('user', user)
  }

  return (
    <section className="container">
      <div className="table-wrapper">
        <Header toggleAdd={toggleAdd} />
        <Table users={users} deleteUser={deleteUser} editUser={editUser} toggleUpdate={toggleUpdate}  />
        <Footer users={users} />
      </div>
      <Addemp addUser={addUser} addModalView={addModalView} toggleAdd={toggleAdd} />
      <Updateemp editUser={editUser} updateModalView={updateModalView} toggleUpdate={toggleUpdate}  />
      
    </section>
  );
}

export default App;
