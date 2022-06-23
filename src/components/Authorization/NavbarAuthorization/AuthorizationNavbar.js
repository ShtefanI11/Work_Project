import React from 'react'
import { NavLink } from 'react-router-dom';
import './style.css'
const setActive = ({ isActive }) => isActive ? 'active-link' : '';
const Navbar = () => {

    return (
        <div className='navbar_menus'>
            <header className='header_commander'>Profile</header>
            <div class="list-group" className='navbar_menu'>
                <NavLink to='/login' className={setActive}>
                    Login</NavLink>
                <NavLink to='/' className={setActive}>
                    SignUp</NavLink>
            </div>
        </div>
    )
}

export default Navbar