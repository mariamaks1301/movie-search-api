import React from 'react';

const Header = () => {
    return (
        <nav className='#616161 grey darken-2 '>
            <div className="nav-wrapper #616161 grey darken-2 container">
            <a href="#" className="brand-logo">MOVIES</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="!#">Repo</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
            </div>
        </nav>

    );
};

export default Header;