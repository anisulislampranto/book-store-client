import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Navbar.css'

const Navbar = () => {
    const [user, setUser] = useContext(UserContext)
    return (
        <div className='navbar'>

            <Link className="logo" to="/home">
                <h1>BOOK STORE</h1>
            </Link>

            <div className='navigation'>

                <Link className='navigation-links' to="/home">Home</Link>
                <Link className='navigation-links' to="/orders">Orders</Link>
                <Link className='navigation-links' to="/admin">Admin</Link>
                <Link className='navigation-links' to="/checkout">Checkout</Link>

            </div>
            {
                user.isSignedIn ? <img className="user-logo" src={user.photo} alt="" srcset="" /> : 
                <Link className='navigation-links' to="/login">Log In</Link>

            }

        </div>
    );
};

export default Navbar;