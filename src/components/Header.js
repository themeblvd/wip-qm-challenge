import React from 'react';
import { Bell as NotificationIcon } from 'react-feather';
import Logo from '../assets/svg/logo.svg';
import avatar from '../assets/img/user.jpg';

/**
 * Static demo header.
 */
const Header = props => {
    return (
        <header className="app-header">
            <div className="wrap">
                <Logo className="logo" />
                <ul className="user-menu">
                    <li className="notification">
                        <NotificationIcon />
                        <span className="count">5</span>
                    </li>
                    <li className="user">
                        <img src={avatar} className="avatar" alt="'John Doe'" />
                    </li>
                </ul>
            </div>
        </header>
    );
};

Header.displayName = 'Header';

export default Header;
