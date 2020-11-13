import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './component/NavBar';
import Home from './container/Home';

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
