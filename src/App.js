import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './component/NavBar';
import Home from './container/Home';
import Login from './container/Login';

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
