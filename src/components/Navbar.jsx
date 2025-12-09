import React, { use } from 'react';

import userIcon from "../assets/user.png";
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    const handleLogout = () => {
        logOut().then(() => {
            alert("You logged Out successfully!")
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div className='flex justify-between items-center'>
            <div>{user && user.email}</div>
            <div className="nav flex gap-5 text-accent">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="login-btn flex gap-5">
                <img className='rounded-full w-12' src={`${user ? user.photoURL : userIcon}`} alt="" />
                {user ? (<button onClick={handleLogout} className='btn btn-primary px-10' >LogOut</button>) : (<Link to="/auth/login" className='btn btn-primary px-10'>Login</Link>)}

            </div>
        </div>
    );
};

export default Navbar;