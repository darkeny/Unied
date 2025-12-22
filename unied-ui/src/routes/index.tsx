import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../ui/pages/Home';
import { StudentPanel } from '../ui/pages/Student';
import TeachersPage from '../ui/pages/Student/TeachersPage';
import { Tests } from '../ui/pages/testes/testes';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                {/* Rotas Públicas */}
                <Route path="/" element={<Tests />} />
                <Route path="/" element={<Home />} />
                <Route path="/student/dashboard" element={<StudentPanel />} />
                <Route path="/student/teachers" element={<TeachersPage />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;