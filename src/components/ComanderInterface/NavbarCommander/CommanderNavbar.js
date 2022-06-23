import React from 'react'
import { NavLink } from 'react-router-dom';
import './styleCommander.css'
const setActive = ({ isActive }) => isActive ? 'active-link' : '';
const NavbarPerson = () => {

    return (
        <div className='menu_all'>
            <header className='profile_icon'>Profile</header>
            <div class="list-group" className='sidebar_menu'>
                <NavLink to='/main' className={setActive}>
                    Home</NavLink>
                <NavLink to='/' className={setActive}>
                    Exit</NavLink>
            </div>
        </div>
    )
}

export default NavbarPerson