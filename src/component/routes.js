import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import App from '../App';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={App} />
            <Route render={() => <Redirect to="/" />} />
        </Switch>
    )
}

export default Routes;