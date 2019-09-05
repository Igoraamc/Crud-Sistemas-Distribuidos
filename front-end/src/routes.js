import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import UsersList from './pages/UsersList';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/signup" component={Register} />
            <Route path="/users-list" component={UsersList} />
        </BrowserRouter>
    );
}