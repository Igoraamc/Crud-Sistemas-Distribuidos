import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import UsersList from './pages/UsersList';
import User from './pages/User';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/signup" exact component={Register} />
            <Route path="/users-list" exact component={UsersList} />
            <Route path="/user/:id" exact component={User} />
        </BrowserRouter>
    );
}