import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './component/NavBar';
import Home from './container/Home';
import Login from './container/Login';

const App = (props) => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  )
}

export default App;
