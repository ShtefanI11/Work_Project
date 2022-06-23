import React from 'react'
import { Nav } from 'react-bootstrap'
import './styleActive.css'
const VoulenteerNavigation = () => {
    return (
        <div className='All'>
            <header className="header_commander">
                Profile
            </header>
            <Nav defaultActiveKey="/home" className="flex-column" id='navbar_commander'>
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link eventKey="link-1" href=''>Exit</Nav.Link>
            </Nav>
            <h1 className='block_3'>VoulenteerNavigation</h1>
        </div>
    )
}

export default VoulenteerNavigation