// import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs'

function App() {
  return (
    <div className="App">
      <Tabs tabsItems={[
        { label: 'Tab1', content: 'Tab1 content' },
        { label: 'Tab2', content: 'Tab2 content' },
        { label: 'Tab3', content: 'Tab3 content' },
      ]} />
    </div>
  );
}

export default App;
