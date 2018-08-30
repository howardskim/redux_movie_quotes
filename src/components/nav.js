import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav style={{padding: '0 10px'}}className="purple">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">Movie Quotes</Link>
                    <ul className="right">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/secret-list">Secret List</Link>
                        </li>
                        <li>
                            <Link to="/movie-quote">Movie Quotes</Link>
                        </li>
                        <li>
                            <Link to="/sign-up">Sign Up</Link>
                        </li>
                        <li>
                            <button className="btn blue">Sign In</button>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav;