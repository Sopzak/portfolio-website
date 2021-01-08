import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../Home';
import Admin from '../ADM';
import Project from '../Project';

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/ADM' component={ Admin } />
            <Route exact path='/Project' component={ Project } />
        </Switch>
    </BrowserRouter>
);

export default Rotas;