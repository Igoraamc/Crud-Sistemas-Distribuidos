import React, { useState } from 'react';

import Header from '../components/Header';

import './Register.css';

export default function Register({ history }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if(validateFields()) {
            console.log(
                `
                Name: ${name}
                Email: ${email}
                Password: ${password}
                ConfirmPassword: ${cPassword}
                `
            );

            history.push('/users-list');
        }else {
            console.log('Empty Field')
        }
        
    }

    const validateFields = () => {
        return name !== '' &&
                email !== '' &&
                password !== '' &&
                cPassword !== '';
    }

    return (
        <section>
            <Header page="register" />
            <div className="register-container">
                <div className="card">
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
                        <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                        <input type="password" placeholder="Confirm Password" onChange={e => setCPassword(e.target.value)} />
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </section>
    );
}