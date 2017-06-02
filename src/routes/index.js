import App from '../views/App'
import Login from '../views/login';
import Home from '../views/home';
import Deatil from '../views/detail';
import Content from '../views/content';

import React from 'react';
import { render } from 'react-dom';
import { Route ,IndexRoute } from 'react-router';

/**
 * route config
 */
const routes = <Route path='/' component={App}>
                    <IndexRoute component={Login}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/home/:id' component={Home}/>
                    <Route path='/detail' component={Deatil}/>
                    <Route path='/content' component={Content}/>
                </Route>;

export default routes;
