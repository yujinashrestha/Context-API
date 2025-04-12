import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'


function login() {
    const [username, setUsername]= useState(null)
    const [password, setPassword]=useState(null)
    const {setUser}=useContext(UserContext)

    const handleSubmit=(e)=>{
     e.preventDefault()
     setUser({username, password})
5
    }
  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder='username' value={username} 
      onChange={(e)=>{
        setUsername(e.target.value)
      }}/>
      {' '}
      <input type="password" placeholder='password' value={password}
      onChange={(e)=>{

        setPassword(e.target.value)
      }}
      />
      <button onClick={handleSubmit}>Submit</button>




    </div>
  )
}

export default login