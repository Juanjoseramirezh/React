import React from 'react'
import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Main from './components/Main'
import SomeOtherComponent from './components/SomeOtherComponent'


function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Main />
      <SomeOtherComponent />
    </div>
  );
}

export default App;
