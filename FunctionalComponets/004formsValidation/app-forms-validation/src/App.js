import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';

function App() {
  const [user, setUser] = useState({})
  return (
    <div className="App">
      <UserForm user={user} setUser={setUser} />
    </div>
  );
}

export default App;
