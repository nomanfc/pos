import React from 'react';
import {Link} from 'react-router-dom';

//components
import Navigation from './navLink';
//css
import './header.css';

const Header =()=>{
    return(
        <header className='header'>
            <nav className='header-nav'>
                <div className='header-logo'>
                    <Link className='link' to='/home'>Logo</Link>
                </div>
                <div className='gap'/>
                <div className='header-navlink'>
                   <Navigation/>
                </div>
            </nav>
        </header>

    )
}

export default Header;