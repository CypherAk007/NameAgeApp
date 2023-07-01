import React,{useState} from 'react';

import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
function App() {
  const [usersList,setUsersList] = useState([])

  const addUserHandler=(uName,uAge)=>{
    console.log(uName,uAge);
    setUsersList((prevUsersList)=>{
      return [...prevUsersList,{name:uName,age:uAge,id:Math.random().toString()}]
    
      })
  }

  return (
    <>
      <p>Name age App</p>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
      
    </>
  )   
}

export default App;
