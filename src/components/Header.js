import React from 'react';

import './Header.css';

export const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="navbar-header">
                <h1 className="header">Star Wars Characters</h1>
            </div> 
        </nav>
    );
}