import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

export default function Header(props) {

    useEffect(() => {
        if (props.page) console.log(props.page);
    });

    return (
        <div className="header-container">
            <ul>
                <li className="logo">
                    <Link to="">
                        <div>                        
                            K 2.0
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="">
                        <div>                        
                            Sign In
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="signup">
                        <div>                        
                            Sign Out
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="users-list">
                        <div>                        
                            Users List
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    );
}