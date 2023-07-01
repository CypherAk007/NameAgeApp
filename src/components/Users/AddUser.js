import React,{useState} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";


const AddUser = (props)=>{

  const [enteredAge,setEnteredAge] = useState('')
  const [enteredName,setEnteredName] = useState('')
  const [error,setError]=useState()

  const addUserHandler = (event)=>{
    event.preventDefault()
    if (enteredName.trim().length===0 || enteredAge.trim().length===0){
      setError({
        title:'invalid input',
        message:'Please Enter a valid Name and age (non-empty values).'
      })
      return 
    }
    if (+enteredAge<1){
      setError({
        title:'invalid Age',
        message:'Please Enter a valid Age (>0).'
      })
      return 
    }
    props.onAddUser(enteredName,enteredAge)
    setEnteredName('')
    setEnteredAge('')
  }

  const ageChangeHandler =(event) =>{
    setEnteredAge(event.target.value)
  }

  const nameChangeHandler = (event)=>{
    setEnteredName(event.target.value)
  }

  const errorHandler = ()=>{
    setError(null)
  }

  return(
    <>
    {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}></ErrorModal>}
    <Card className={classes.input}>

    <form onSubmit={addUserHandler}>
      <label htmlFor="username">UserName</label>
      <input value={enteredName} id='username' type='text' onChange={nameChangeHandler}></input>
      <label htmlFor="age">Age</label>
      <input value={enteredAge} id='age' type='number' onChange={ageChangeHandler}></input>
      
      <Button type='submit'>AddUser</Button>
    </form>
    </Card>
    </>
  )
}

export default AddUser;