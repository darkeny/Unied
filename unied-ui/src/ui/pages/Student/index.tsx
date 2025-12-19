import { useState } from 'react';
import { StudentSidebar } from '../../components/Home/Navbar/Student';

export function StudentPanel() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [language] = useState<'PT' | 'EN'>('PT');

    return (
        <div className="flex min-h-screen bg-gray-50">
            <StudentSidebar
                language={language}
                isCollapsed={isCollapsed}
                onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
                studentName="Maria Silva"
                studentNumber="AL2023002"
                className="11ª Classe - B"
                course="Humanidades"
            />

            <main className={`flex-1 transition-all duration-300 ${isCollapsed ? 'lg:ml-20' : 'lg:ml-64'}`}>
                {/* Conteúdo principal aqui */}
            </main>
        </div>
    );
}