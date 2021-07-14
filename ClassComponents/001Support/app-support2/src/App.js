import logo from './logo.svg';
import PersonCard from './components/PersonCard'


function App() {
  return (
    <div className="App">
      <PersonCard firstName='name1' lastName='lastname1' age='age1' hairColor='haircolor1' />
      <PersonCard firstName='name2' lastName='lastname2' age='age2' hairColor='haircolor2' />
      <PersonCard firstName='name3' lastName='lastname3' age='age3' hairColor='haircolor3' />
    </div>
  );
}

export default App;
