import logo from './logo.svg';
import './App.css';
import NewOrderPage from './components/NewOrderPage';
import OrderHistoryPage from './components/OrderHistoryPage';
import AuthPage from './components/AuthPage';
import {Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import { getUser } from './utilities/users-service'
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';

import { useState } from 'react';

function App() {

  const [user,setUser] = useState(getUser())
  return (
    <div className="App">
      { user ?
      <>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/orders/new" element={<NewOrderPage />} />
        <Route path="/orders" element={<OrderHistoryPage user={user}/>} />
        
      {/* Route components in here */}
    </Routes>
    </>
      :
      <AuthPage setUser={setUser}/>
    }
    </div>
  );
}

export default App;
