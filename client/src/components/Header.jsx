import { Link, Navigate } from 'react-router-dom'
import foody from '../assets/images/burger_banner.png'
import { useEffect, useState } from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { cartProducts } from '../stores/cart/cartSlice';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 1,
    padding: '0 4px',
  },
}));


const Header = () => {
    let badgeCount = 0;
    const cart = useSelector(cartProducts);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    if(cart.length > 0) {
        badgeCount = cart.length 
    }

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
                <Link to="#about">About</Link>
            </div>
            <div className='flex items-center justify-center space-x-4 font-bold'>
                <Link to="/cart">
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={badgeCount} color="error">
                            <ShoppingCartIcon style={{ fill: '#fff' }} />
                        </StyledBadge>
                    </IconButton>
                </Link>
                { isLoggedIn ? 
                    <Button  onClick={handleLogout} style={{ backgroundColor: "#f1c200" }} variant="contained" startIcon={<LogoutIcon />}>
                        Log Out
                      </Button>: 
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
