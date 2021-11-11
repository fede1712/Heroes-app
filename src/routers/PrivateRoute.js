import React from 'react'
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({ isAuth, element, ...rest }) => isAuth ? element : <Navigate to='/login' />


PrivateRoute.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    element: PropTypes.func.isRequired
}
