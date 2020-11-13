import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App';
import Home from '../container/Home';
import Login from '../container/Login';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/login" component={Login} />
            </Switch>
        </Router>
    )
}

export default Routes;