import React from 'react'
import { NavLink } from 'react-router-dom';
import './style.css'
const setActive = ({ isActive }) => isActive ? 'active-link' : '';
const VolunteerNavbar = () => {

    return (
        <div className='navbar_volunteer'>
            <header className='header_commander'>Profile</header>
            <div class="list-group" className='navbar_menu'>
                <NavLink to='/VolunteerInterface/Active' className={setActive}>
                    Home</NavLink>
                <NavLink to='/' className={setActive}>
                    Exit</NavLink>
            </div>
        </div>
    )
}

export default VolunteerNavbar