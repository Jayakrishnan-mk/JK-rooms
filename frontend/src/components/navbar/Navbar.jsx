import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
    return (

        <div className="navigationBar">
            <Link to={'/'}>
                <h1 className='jkrooms'>JK ROOMS</h1>
            </Link>
            <button className='navBtn'>Register</button>
            <button className='navBtn'>Log in</button>
        </div>

    )
}

export default Navbar