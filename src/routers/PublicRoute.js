import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ isAuth, element }) => (!isAuth) ? element : <Navigate to='/' />


PublicRoute.propTypes = {
    element: PropTypes.func.isRequired
}
