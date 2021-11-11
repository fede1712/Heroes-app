import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const { user } = useContext(AuthContext);
    return (
        <Router>
            <Routes>
                <Route path='/login' element={<PublicRoute isAuh={user.logged} element={<LoginScreen />} />} />
                <Route path='/*' element={<PrivateRoute isAuth={user.logged} element={<DashboardRoutes />} />} />
            </Routes>
        </Router>
    )
}
