import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className="fLists">
            <ul className="fList">
                <h2>JK ROOMS</h2>
                <li className="fListItem">49 Evergreen Rd. Rosevilla, Gujarat</li>
                <li className="fListItem">+44 345 678 903</li>
                <li className="fListItem">jk_room@gmail.com</li>
               
            </ul>
            <ul className="fList">
                <li className="fListItem">About us</li>
                <li className="fListItem">Contact</li>
                <li className="fListItem">Terms & Conditions</li>
                
            </ul>
            <ul className="fList">
                <li className="fListItem">Facebook</li>
                <li className="fListItem">Twitter</li>
                <li className="fListItem">Instagram</li>
                
            </ul>
            <></>
        </div>
        <div className='fText'>Copyright © 2022 jk rooms.</div>
    </div>
  )
}

export default Footer