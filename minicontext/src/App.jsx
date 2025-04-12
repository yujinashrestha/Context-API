import React from "react"
import UserContextProvider from "./Context/UserContextProvider"
import Profile from "./components/profile"
import Login from "./components/login"
import './App.css'

function App() {
 
  return (
    <UserContextProvider>
     
     <h1>Welcome to my Website !!</h1>
     <Profile />
     <Login />
     

    </UserContextProvider>
  )
}

export default App
