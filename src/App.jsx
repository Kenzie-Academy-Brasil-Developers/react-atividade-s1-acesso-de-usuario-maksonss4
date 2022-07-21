import { useState } from 'react';
import './App.css';
import RestrictedPage from './components/RestrictedPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const user = "Makson"

  const Login = () => {
    return setIsLoggedIn(true)
  }

  const Logout = () => {
    return setIsLoggedIn(false)
  }

  return (
    <div className="App">
      <div className="App-header">
        <RestrictedPage isLoggedIn={isLoggedIn} user={user} Login={Login} Logout={Logout}/>
      </div>
    </div>
  );
}

export default App;
