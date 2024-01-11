import React, { useState } from 'react'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import { Link } from 'react-router-dom'
import { render } from '@testing-library/react'
import { ReactDOM } from 'react'


function AuthPage({setUser}) {
  const [toggle,setToggle] = useState(true)
  
  return (
    <div id="auth-menu">
        <h1>MERN COFFEE SHOP</h1>
        <h4 onClick={() => setToggle(!toggle)}>
          {
            toggle ? 'LOGIN' : 'SIGNUP'
          }
        </h4>
        {toggle && <SignUpForm/>}
        {!toggle && <LoginForm setUser={setUser}/>}
        
        
    </div>
  )
}

export default AuthPage