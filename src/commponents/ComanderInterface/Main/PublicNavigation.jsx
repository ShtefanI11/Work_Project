import React from 'react'
import { Nav } from 'react-bootstrap'
import './style.css'
const PublicNavigation = () => {
    return (
        <div className='All'>
            <header className="header_commander">
                Profile
            </header>
            <Nav defaultActiveKey="/Home" className="flex-column" id='navbar_commander'>
                <Nav.Link href="/Login">Login</Nav.Link>
                <Nav.Link eventKey="link-1" href='/SignUp'>SignUp</Nav.Link>
            </Nav>
            <h1 className='block_3'>Hello site</h1>
        </div>
    )
}

export default PublicNavigation