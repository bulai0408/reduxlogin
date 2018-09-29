import React from 'react';

import { Route } from 'react-router-dom';

import App from './components/App';

import SignupPage from './components/singup/signupPage';
import LoginPage from './components/login/loginPage';
import NewEventPage from './components/events/NewEventPage';

import requireAuth from './utils/requireAuth'

export default (
    <div className="container">
        <Route exact path="/" component={ App } />
        <Route path="/signup" component={ SignupPage } />
        <Route path="/login" component={ LoginPage } />
        <Route path="/new-event" component={ requireAuth(NewEventPage) } />
    </div>
)