import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {

    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <Link className='navbar-brand' to='/'>Asociaciones</Link>
            <div className='container-fluid'>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <div className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <NavLink className='nav-item nav-link active' to='/marvel'>Marvel</NavLink>

                        <NavLink className='nav-item nav-link active' to='/dc'>DC</NavLink>
                        <NavLink className='nav-item nav-link active' to='/search'>Search</NavLink>
                    </div>
                    <div className='navbar-nav mb-lg-0'>
                        <NavLink className='nav-item nav-link active' to='/login'>Logout</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}