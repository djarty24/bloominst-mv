import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className='mb-24'>
            <ul>
                <li><Link to={"/"}><img src="/logo-small.png" alt="" /></Link></li>
            </ul>
            <ul id='myTopnav' className={menuOpen ? 'right-links-responsive' : 'right-links'}>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/events"}>Events</Link></li>
                <li><a href="https://bloominst.org/" target='_blank'>HQ</a></li>
                <li><a href="https://hcb.hackclub.com/donations/start/bloom-institute" target='_blank'>Donate</a></li>
            </ul>
            <a href="javascript:void(0);" className="icon" onClick={toggleMenu}><i className="fa fa-bars"></i></a>
            {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
        </nav>
    );
};

export default Navbar;
