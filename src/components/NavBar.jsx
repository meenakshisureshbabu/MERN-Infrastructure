import React from 'react'
import { Link } from 'react-router-dom';
import * as UserService from '../utilities/users-service'

function NavBar({user,setUser}) {
    const handleLogout = () => {
        UserService.logOut();
        setUser(null)
      }
  return (
    <nav>
        <h2>Welcome {user.name}</h2>
        <h3>{user.email}</h3>
        <Link to="" onClick={handleLogout}>
        <button>LogOut</button>
        </Link>
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
    </nav>
  )
}

export default NavBar