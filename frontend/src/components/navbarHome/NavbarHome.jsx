import './navbarHome.css'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

const Navbar = () => {
    const navigate = useNavigate();
    const loginfn = () => {
        navigate('/login')
    }
    const register = () => {
        navigate('/register')
    }

    return (
        <>
            <div className='navbar'>
                <div>
                    <p className="logo">JK ROOMS</p>
                </div>

                {/* if() */}

                <div className="navItems">
                    <button className="navButtonOne" onClick={register}>Register</button>
                    <button className="navButtonTwo" onClick={loginfn}>Login</button>
                </div>

                <div></div>

            </div>
            <div className='description'>
                <p className='firstp'>BOOK DIRECT BENEFITS</p>
                <p className='secondp'>Book your stay directly on our website to avail of the best prices, exclusive rates,</p>
                <p className='secondp'>and a number of special perks we have created for you.</p>
            </div>
        </>

    )
}

export default Navbar