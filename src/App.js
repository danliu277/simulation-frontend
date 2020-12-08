import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './component/NavBar';
import Home from './container/Home';
import Login from './container/Login';
import Profile from './container/Profile';

const App = (props) => {
  return (
    <div>
      <NavBar {...props} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </div>
  )
}

export default App;
