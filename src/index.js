import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PageTemplate from './template/PageTemplate';
import Dashboard from './dashboard/Dashboard';
import About from './about/About';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <PageTemplate>
                <Redirect path="/" to="/dashboard" />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/about" component={About} />
            </PageTemplate>
        </Switch>
    </BrowserRouter>, 
    document.getElementById('root'));
registerServiceWorker();
