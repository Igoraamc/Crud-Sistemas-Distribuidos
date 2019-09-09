import React, { useState, useEffect } from 'react';

import api from '../services/api';

import Header from '../components/Header';

export default function User({ match }) {

    const [user, setUser] = useState({});

    useEffect(() => {
        getUserData();

        console.log(user);
    });

    async function getUserData() {
        const id = match.params.id;

        const response = await api.get(`user/${id}`);

        setUser(response.data);
    }

    return (
        <section>
            <Header />
            <div>User Page</div>
        </section>
    )
}