import React, { useState, useEffect } from 'react';

import api from '../services/api';

import Header from '../components/Header';

import './User.css';

export default function User({ match, history }) {

    const [user, setUser] = useState({
        id: 0,
        name: '',
        email: '',
        phone: '',
        addresss: '',
    });
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        getUserData();

    }, [match.params.id]);

    async function getUserData() {
        const id = match.params.id;

        const response = await api.get(`user/${id}`);

        setUser(response.data);
        
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if(validateFields()) {
            
            const response = await api.put(`/user/${user.id}`, {
                name,
                email,
                phone,
                address
            });

            console.log(response.status);
            history.push('/users-list');
        }else {
            console.log('Empty Field');
        }
        
    }

    const validateFields = () => {
        return name !== '' &&
                email !== '' &&
                phone !== '' &&
                address !== '';
    }

    return (
        <section>
            <Header />
            <div className="update-container">
                <div className="card">
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="name" onChange={e => setName(e.target.value)} value={user.name} />
                        <input type="text" placeholder="Email" name="email" onChange={e => setEmail(e.target.value)} value={user.email} />
                        <input type="text" placeholder="Phone" name="phone" onChange={e => setPhone(e.target.value)} value={user.phone} />
                        <input type="text" placeholder="Address" name="address" onChange={e => setAddress(e.target.value)} value={user.address} />
                        <button type="submit">Update</button>
                    </form>
                </div>
            </div>
        </section>
    )
}