import React, { useState } from 'react';

import api from '../services/api';

import Header from '../components/Header';

import './Register.css';

export default function Register({ history }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        if(validateFields()) {
            
            const response = await api.post('/users', {
                name,
                email,
                phone,
                address
            });

            console.log(response);

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
            <Header page="register" />
            <div className="register-container">
                <div className="card">
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
                        <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                        <input type="text" placeholder="Phone" onChange={e => setPhone(e.target.value)} />
                        <input type="text" placeholder="Address" onChange={e => setAddress(e.target.value)} />
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
