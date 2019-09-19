import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../services/api';

import Header from '../components/Header';

import './UsersList.css';

export default function UsersList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getListUsers();
    }, []);

    async function getListUsers() {
        const list = await api.get('/users');

        setUsers(list.data);
    };

    async function deleteUser(id) {
        await api.delete(`/user/${id}`);

        getListUsers();
    }

    return (
        <section className="mg-tp">
            <Header />
            <div className="userslist-container">
                <table>
                    <thead>
                        <tr>
                            <th> ID </th>
                            <th> Name </th>
                            <th> Email </th>
                            <th> Phone </th>
                            <th> Address </th>
                        </tr>
                    </thead>
                    <tbody>
                        { users.map(user => {
                            return (
                                <tr key={ user.id }>
                                    <td>{ user.id }</td>
                                    <td>{ user.name }</td>
                                    <td>{ user.email }</td>
                                    <td>{ user.phone }</td>
                                    <td>{ user.address }</td>
                                    <td>
                                        <Link to={`user/${user.id}`}>
                                            Update
                                        </Link>
                                    </td>
                                    <td>
                                        <span onClick={ _ => deleteUser(user.id)} >Delete</span>
                                    </td>
                                </tr>
                            );
                        }) }
                    </tbody>
                </table>
            </div>
        </section>
    );
}