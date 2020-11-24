import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" render={(props) => <App {...props} />} />
            </Switch>
        </Router>
    )
}

export default Routes;