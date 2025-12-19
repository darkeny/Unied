import { useState } from 'react';
import { StudentSidebar } from '../../components/Home/Navbar/Student';
import StudentBasicDashboard from '../../components/StudentDashboard';

export function StudentPanel() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [language] = useState<'PT' | 'EN'>('PT');

    return (
        <div className="flex min-h-screen bg-gray-50">
            <StudentSidebar
                language={language}
                isCollapsed={isCollapsed}
                onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
                studentName="João Pereira"
                studentNumber="AL2023002"
                className="12ª Classe - A"
                course="Ensino Secundário"
            />

            <main className={`flex-1 transition-all duration-300 ${isCollapsed ? 'lg:ml-5' : ''}`}>
                {/* Dashboard Básico com os 5 itens */}
                <StudentBasicDashboard
                    studentName="João Pereira"
                    studentNumber="AL2023002"
                    language={language}
                />
            </main>
        </div>
    );
}
