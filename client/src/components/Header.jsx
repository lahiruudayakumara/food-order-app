import { Link, Navigate } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import foody from '../assets/images/burger_banner.png'
import { useEffect, useState } from 'react';


const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('User Id');
        setIsLoggedIn(false);
        <Navigate to={"/"} />
    }

    useEffect(() => {
        const checkAuthToken = () => {
            const token = sessionStorage.getItem('token');
            if (token) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        }

        checkAuthToken()
    }, [])

  return (
    <nav id='header' className='bg-black text-white'>
        <div className='w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2'>
            <div className='logo-wrapper pl-4 flex items-center'>
                <Link to="/" className='toggleColor flex items-center justify-between text-white no-underline hover:no-underline font-bold text-xl lg:text-2xl'>
                    <img src={foody} alt="logo" className='w-14 h-14 object-cover'/>
                    <h3>Foody</h3>
                </Link>
            </div>
            <div className='nav-menu-wrapper flex items-center justify-between space-x-10 font-bold'>
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/coupn">Coupn</Link>
                <Link to="/special">Special</Link>
                <Link to="#about">New</Link>
            </div>
            <div className='flex items-center justify-center space-x-4 font-bold'>
                <Link to="/cart">
                    <ShoppingCartIcon />
                </Link>
                { isLoggedIn ? <button onClick={handleLogout} className='bg-yellow-500 py-1 px-3 rounded-sm'>Log Out</button> : 
                    <>
                        <Link to="/login">Log In</Link>
                        <Link to="/register">Sign Up</Link>
                    </>
                }
            </div>
        </div>
    </nav>
  )
}

export default Header
