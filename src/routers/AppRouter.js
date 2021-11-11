import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { DaschboardRoutes } from './DaschboardRoutes';

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/login' element={<LoginScreen />} />
                <Route path='/*' element={<DaschboardRoutes />} />
            </Routes>
        </Router>
    )
}
