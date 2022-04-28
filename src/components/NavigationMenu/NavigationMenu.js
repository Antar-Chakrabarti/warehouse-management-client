import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navigationMenu.css';

const NavigationMenu = () => {
    const [clicked, setClicked] = useState(true);
    const handleNavbar = value => {
        setClicked(!clicked)
    }
    return (
        <>
            <nav className='main-nav'>
                <div className="logo">
                    <h2>Antar</h2>
                </div>
                <div className="menu-link">
                    <ul className={clicked ? 'nav-links' : 'nav-links1'}>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='#'>About</Link>
                        </li>
                        <li>
                            <Link to='#'>Services</Link>
                        </li>
                        <li>
                            <Link to='#'>contact</Link>
                        </li>
                    </ul>
                </div>
                <button className='nabBtn' onClick={handleNavbar}>XXX</button>
            </nav>
        </>
    );
};

export default NavigationMenu;