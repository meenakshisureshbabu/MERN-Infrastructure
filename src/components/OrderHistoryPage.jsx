import React from 'react'
import  {checkToken} from '../utilities/users-service'

function OrderHistoryPage({user}) {

  const handleCheckButton = async () => {
    let expdate = await checkToken();
    console.log(expdate)
  }
  return (
    <>
    <div><h1>OrderHistoryPage</h1></div>
    <button onClick={handleCheckButton}>Check When my Login Expires</button>
    </>
  )
}

export default OrderHistoryPage