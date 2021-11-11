import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const Navbar = () => {

    const history = useNavigate()
    const { user: { name }, dispatch } = useContext(AuthContext)

    const handleLogout = () => {
        dispatch({
            type: types.logout,
        })
        history('/login')
    }

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
                        <p className='pt-3 text-info'>{name}</p>
                        <button className='nav-item nav-link active btn' onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}