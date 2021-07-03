import { useState } from 'react'
import './App.css'
import UserForm from './functionalComponents/UserForm'
import UserData from './functionalComponents/UserData'

function App() {
  const [user, setUser] = useState({})

  return (
    <div className="App">
      <UserForm user={user} setUser={setUser} />
      <UserData {...user} />
    </div>
  )
}

export default App;
