import './navbarHome.css'
import { useNavigate } from 'react-router-dom'

const NavbarHome = () => {

    const navigate = useNavigate();

    const logoutfn = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        navigate('/landing')
    }

    return (
        <>
            <div className='navbar'>
                <div>
                    <p className="logo">JK ROOMS</p>
                </div>
                <div>
                    <button className="logoutButton" onClick={logoutfn}>Logout</button>

                </div>

            </div>
            <div className='description' id='overlay'>
                <p className='firstp'>BOOK DIRECT BENEFITS</p>
                <p className='secondp'>Book your stay directly on our website to avail of the best prices, exclusive rates,</p>
                <p className='secondp'>and a number of special perks we have created for you.</p>
            </div>
        </>

    )
}

export default NavbarHome