import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../Home';
import About from '../About';

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/About' component={ About } />
        </Switch>
    </BrowserRouter>
);

export default Rotas;