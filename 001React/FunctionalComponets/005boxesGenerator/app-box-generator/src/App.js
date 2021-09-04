import './App.css';
import React, { useState } from 'react'
import Boxes from './boxes/Boxes';
import MessageForm from './boxes/MessageForm'
import MessageDisplay from './boxes/MessageDisplay'

function App() {
  const [currentMsg, setCurrentMsg] = useState('There are no Message')

  // const youveGotMail = (newMessage) => {
  //   setCurrentMsg(newMessage)
  // }

  return (
    <div >
      {/* <MessageForm onNewMessage={youveGotMail} />
      <MessageDisplay message={currentMsg} /> */}

      <h3><Boxes /></h3>
    </div>
  )
}

export default App;
