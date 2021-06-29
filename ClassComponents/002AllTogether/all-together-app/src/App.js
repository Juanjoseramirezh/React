// import logo from './logo.svg';
import './App.css';
import PersonCard from './classComponents/personCard'

function App() {
  const person = [
    { firstName: 'Jane', lastName: 'Doe', age: 20, hairColor: 'Black' },
    { firstName: 'Smith', lastName: 'Joe', age: 88, hairColor: 'Brown' }
  ]


  return (
    <div className="App">
      {person.map((person, index) => (
        <PersonCard key={index} {...person} />
      ))}
    </div>
  )
}

export default App
