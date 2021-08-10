import PersonCard from './components/PersonCard'

function App() {

  const person = [
    { firstName: 'Jane', lastName: 'Doe', age: 20, hairColor: 'Black' },
    { firstName: 'John', lastName: 'Smith', age: 88, hairColor: 'Brown' },
    { firstName: 'Millard', lastName: 'Fillmore', age: 50, hairColor: 'Brown' },
    { firstName: 'Maria', lastName: 'Smith', age: 60, hairColor: 'Brown' }
  ]

  return (
    <div className="App">
      {person.map((person, index) => (
        <PersonCard key={index}{...person} />
      ))}
    </div>
  );
}

export default App;
