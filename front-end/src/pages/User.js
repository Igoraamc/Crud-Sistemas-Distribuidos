import React, { useState, useEffect } from 'react';

import api from '../services/api';

import Header from '../components/Header';

import './User.css';

export default function User({ match, history }) {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        getUserData();

    }, []);

    async function getUserData() {
        const id = match.params.id;

        const response = await api.get(`user/${id}`);

        setStates(response.data);
    }

    function setStates(data) {
        setId(data.id);
        setName(data.name);
        setEmail(data.email);
        setPhone(data.phone);
        setAddress(data.address);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if(validateFields()) {
            
            await api.put(`/user/${id}`, {
                name,
                email,
                phone,
                address
            });

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
                        <input type="text" placeholder="Name" name="name" onChange={e => setName(e.target.value)} value={name} />
                        <input type="text" placeholder="Email" name="email" onChange={e => setEmail(e.target.value)} value={email} />
                        <input type="text" placeholder="Phone" name="phone" onChange={e => setPhone(e.target.value)} value={phone} />
                        <input type="text" placeholder="Address" name="address" onChange={e => setAddress(e.target.value)} value={address} />
                        <button type="submit">Update</button>
                    </form>
                </div>
            </div>
        </section>
    )
}