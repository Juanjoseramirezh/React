import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import Home from './components/Home';
import Number from './components/Number'
import String from './components/String'
import MultiRoute from './components/MultiRoute'

function App() {
  const { id } = useParams()

  const RouteNumberOrString = ({ match: { params } }) => {
    console.log(params)
    console.log(typeof (params))

    if (isNaN(params.id)) {
      return <Route exact path='/:id' component={String} ></Route>
    } else {
      return <Route exact path='/:id' component={Number}></Route>
    }

  }





  return (
    <div className="App">
      <Switch>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path='/:id' component={RouteNumberOrString}></Route>
        <Route exact path='/:id/:colorTxt/:colorBg' component={MultiRoute}></Route>
      </Switch>
    </div>
  );
}

export default App;
