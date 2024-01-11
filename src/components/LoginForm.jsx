import React, { useState } from 'react'
import { signIn } from '../utilities/users-service'

function LoginForm({setUser}) {

    const [credentials,setCredentials] = useState({email:'',password:''})

    const [error,setError] = useState('');
    const handleChange = (e) => {
        setCredentials({...credentials,[e.target.name]:e.target.value})
        setError('')
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try{
            const user = await signIn(credentials)
            setUser(user);
        }
        catch{
            setError("Login failed, Try again")
        }
    }

  return (
    <div>
        <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" name="email" value={credentials.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          
          <button type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  )
}

export default LoginForm