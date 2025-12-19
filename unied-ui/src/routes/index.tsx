import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../ui/pages/Home';
import { StudentPanel } from '../ui/pages/Student';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                {/* Rotas Públicas */}
                <Route path="/" element={<Home />} />
                <Route path="/student/dashboard" element={<StudentPanel />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;