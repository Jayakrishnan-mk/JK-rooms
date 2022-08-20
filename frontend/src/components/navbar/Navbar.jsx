import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
    return (

        <div className="unavigationBar">
            <Link to={'/'}>
                <h1 className='jkrooms'>JK ROOMS</h1>
            </Link>
            {/* <button className='unavBtn'>Register</button>
            <button className='unavBtn'>Log in</button> */}
        </div>
    )
}

export default Navbar