import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    CiLogout,
    CiUser,
    CiSettings,
    CiBellOn,
    CiFileOn,
    CiBookmark,
    CiChat1,
    CiHome,  // Adicionei aqui
    CiCalendar  // Adicionei aqui
} from "react-icons/ci";
import {
    IoStatsChartOutline,
    IoDocumentTextOutline,
    IoTimeOutline,
    IoLibraryOutline,
    IoPeopleOutline,
    IoFolderOpenOutline,
} from "react-icons/io5";
import { FaGraduationCap, FaChalkboardTeacher } from "react-icons/fa";
import { BsBook, BsClockHistory } from "react-icons/bs";
import { studentTexts } from '../../../../../translations/studentTexts';

interface StudentSidebarProps {
    language: 'PT' | 'EN';
    isCollapsed: boolean;
    onToggleCollapse: () => void;
    studentName?: string;
    studentNumber?: string;
    className?: string;
    course?: string;
}

const StudentSidebar: React.FC<StudentSidebarProps> = ({
    language,
    isCollapsed,
    onToggleCollapse,
    studentName = "Carlos Santos",
    studentNumber = "AL2023001",
    className = "12ª Classe",
    course = "Ciências"
}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
        academic: false,
        schedule: false,
        materials: false,
        documents: false
    });

    const currentTexts = studentTexts[language];

    const handleLogout = () => {
        navigate('/');
    };

    const toggleSection = (section: string) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    // Período letivo atual
    const currentTerm = language === 'PT' ? 'Ano Letivo 2024' : 'Academic Year 2024';

    // Menu Items
    const menuItems = [
        { path: '/student/dashboard', icon: CiHome, label: currentTexts.dashboard },
        { path: '/student/notifications', icon: CiBellOn, label: currentTexts.notifications, badge: 3 },
        { path: '/student/messages', icon: CiChat1, label: currentTexts.messages, badge: 5 },
    ];

    // Acadêmico
    const academicItems = [
        { path: '/student/grades', icon: IoStatsChartOutline, label: currentTexts.grades, badgeValue: '15,8' },
        { path: '/student/attendance', icon: BsClockHistory, label: currentTexts.attendance, badgeValue: '94%' },
        { path: '/student/subjects', icon: BsBook, label: currentTexts.subjects },
        { path: '/student/timetable', icon: IoTimeOutline, label: currentTexts.timetable },
        { path: '/student/teachers', icon: FaChalkboardTeacher, label: currentTexts.teachers },
        { path: '/student/classmates', icon: IoPeopleOutline, label: currentTexts.classmates },
    ];

    // Horário e Agenda
    const scheduleItems = [
        { path: '/student/schedule/daily', icon: CiCalendar, label: currentTexts.dailySchedule },
        { path: '/student/schedule/weekly', icon: CiCalendar, label: currentTexts.weeklySchedule },
        { path: '/student/exams', icon: IoDocumentTextOutline, label: currentTexts.exams, badge: 1 },
        { path: '/student/assignments', icon: CiFileOn, label: currentTexts.assignments, badge: 2 },
    ];

    // Materiais e Recursos
    const materialsItems = [
        { path: '/student/materials/study', icon: IoLibraryOutline, label: currentTexts.studyMaterials },
        { path: '/student/materials/homework', icon: CiFileOn, label: currentTexts.homework, badge: 4 },
        { path: '/student/materials/lessons', icon: CiBookmark, label: currentTexts.lessonPlans },
        { path: '/student/materials/library', icon: IoLibraryOutline, label: currentTexts.digitalLibrary },
    ];

    // Documentos e Certificados
    const documentsItems = [
        { path: '/student/documents/reports', icon: IoDocumentTextOutline, label: currentTexts.reportCards },
        { path: '/student/documents/certificates', icon: CiFileOn, label: currentTexts.certificates },
        { path: '/student/documents/declarations', icon: CiFileOn, label: currentTexts.declarations },
        { path: '/student/documents/history', icon: IoFolderOpenOutline, label: currentTexts.academicHistory },
    ];

    // Configurações
    const settingsItems = [
        { path: '/student/profile', icon: CiUser, label: currentTexts.profile },
        { path: '/student/settings', icon: CiSettings, label: currentTexts.settings },
    ];

    // Scroll fino CSS
    const scrollStyles = `
        /* Scroll fino e bonito */
        ::-webkit-scrollbar {
            width: 4px;
        }
        
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 2px;
        }
        
        ::-webkit-scrollbar-thumb {
            background: #c1c1c1;
            border-radius: 2px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background: #a1a1a1;
        }
        
        /* Para Firefox */
        * {
            scrollbar-width: thin;
            scrollbar-color: #c1c1c1 #f1f1f1;
        }
    `;

    return (
        <>
            {/* Estilos para scroll fino */}
            <style>{scrollStyles}</style>

            {/* Sidebar */}
            <div className={`
                fixed lg:sticky top-0 left-0 h-screen bg-gradient-to-b from-blue-50/90 via-white to-blue-50/40 
                border-r border-blue-100 shadow-sm z-50
                transform transition-all duration-300 ease-in-out
                ${isCollapsed ? 'w-20' : 'w-64'}
                flex flex-col overflow-hidden
            `}>

                {/* Header com logo e botão toggle */}
                <div className="flex items-center justify-between p-4 border-b border-blue-100">
                    {!isCollapsed && (
                        <div className="flex items-center space-x-3">
                            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                                <span className="text-sm font-bold text-white">U</span>
                            </div>
                            <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                                Unied
                            </span>
                        </div>
                    )}
                    
                    {isCollapsed && (
                        <div className="flex items-center justify-center w-full">
                            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                                <span className="text-sm font-bold text-white">U</span>
                            </div>
                        </div>
                    )}
                    
                    <button
                        onClick={onToggleCollapse}
                        className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                        {isCollapsed ? (
                            <CiCalendar size={18} />
                        ) : (
                            <CiHome size={18} />
                        )}
                    </button>
                </div>

                {/* Informações do Estudante (apenas quando expandido) */}
                {!isCollapsed && (
                    <div className="p-4 border-b border-blue-100">
                        <div className="flex items-center space-x-3 mb-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-semibold text-sm">
                                    {studentName.split(' ').map(n => n[0]).join('')}
                                </span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-gray-900 truncate">
                                    {studentName}
                                </p>
                                <p className="text-xs text-gray-600 truncate">
                                    {studentNumber}
                                </p>
                            </div>
                        </div>
                        
                        <div className="bg-white/80 border border-blue-200 rounded-lg p-2">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-medium text-gray-700">{className}</span>
                                <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-0.5 rounded">
                                    {language === 'PT' ? 'Ativo' : 'Active'}
                                </span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1 truncate">{course}</p>
                        </div>
                    </div>
                )}

                {/* Menu de Navegação */}
                <div className="flex-1 overflow-y-auto py-4">
                    {/* Menu Principal */}
                    <div className="px-3 pb-4">
                        {!isCollapsed && (
                            <h3 className="px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                {language === 'PT' ? 'Menu' : 'Menu'}
                            </h3>
                        )}
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = location.pathname === item.path;

                            return (
                                <button
                                    key={item.path}
                                    onClick={() => handleNavigation(item.path)}
                                    className={`
                                        flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} 
                                        w-full px-2 py-2.5 rounded-lg text-sm transition-all duration-200 mb-1
                                        ${isActive
                                            ? 'bg-blue-50 text-blue-600 border-l-2 border-blue-500'
                                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                                        }
                                    `}
                                >
                                    <div className="flex items-center space-x-3">
                                        <Icon size={18} className={isActive ? 'text-blue-500' : 'text-gray-500'} />
                                        {!isCollapsed && <span>{item.label}</span>}
                                    </div>
                                    {!isCollapsed && item.badge && (
                                        <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                            {item.badge}
                                        </span>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Acadêmico */}
                    <div className="px-3 pb-4">
                        {!isCollapsed && (
                            <button
                                onClick={() => toggleSection('academic')}
                                className="flex items-center justify-between w-full px-2 py-2.5 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 mb-1"
                            >
                                <div className="flex items-center space-x-3">
                                    <FaGraduationCap size={16} className="text-gray-500" />
                                    <span>{currentTexts.academic}</span>
                                </div>
                                {expandedSections.academic ? (
                                    <CiHome size={14} className="text-gray-500 rotate-90 transform" />
                                ) : (
                                    <CiCalendar size={14} className="text-gray-500" />
                                )}
                            </button>
                        )}
                        
                        {isCollapsed && (
                            <button
                                onClick={() => handleNavigation('/student/grades')}
                                className="flex items-center justify-center w-full px-2 py-2.5 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 mb-1"
                                title={currentTexts.academic}
                            >
                                <FaGraduationCap size={18} className="text-gray-500" />
                            </button>
                        )}

                        {!isCollapsed && expandedSections.academic && (
                            <div className="pl-9 pr-2 space-y-1 mt-1">
                                {academicItems.map((item) => {
                                    const Icon = item.icon;
                                    const isActive = location.pathname === item.path;

                                    return (
                                        <button
                                            key={item.path}
                                            onClick={() => handleNavigation(item.path)}
                                            className={`
                                                flex items-center justify-between w-full px-2 py-1.5 rounded text-xs transition-all duration-200
                                                ${isActive
                                                    ? 'bg-blue-100 text-blue-600'
                                                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                                                }
                                            `}
                                        >
                                            <div className="flex items-center space-x-2">
                                                <Icon size={12} className={isActive ? 'text-blue-500' : 'text-gray-500'} />
                                                <span>{item.label}</span>
                                            </div>
                                            {item.badgeValue && (
                                                <span className={`text-xs font-medium px-1.5 py-0.5 rounded ${item.path === '/student/grades' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
                                                    {item.badgeValue}
                                                </span>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Horário e Agenda */}
                    <div className="px-3 pb-4">
                        {!isCollapsed && (
                            <button
                                onClick={() => toggleSection('schedule')}
                                className="flex items-center justify-between w-full px-2 py-2.5 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 mb-1"
                            >
                                <div className="flex items-center space-x-3">
                                    <CiCalendar size={16} className="text-gray-500" />
                                    <span>{currentTexts.schedule}</span>
                                </div>
                                {expandedSections.schedule ? (
                                    <CiHome size={14} className="text-gray-500 rotate-90 transform" />
                                ) : (
                                    <CiCalendar size={14} className="text-gray-500" />
                                )}
                            </button>
                        )}
                        
                        {isCollapsed && (
                            <button
                                onClick={() => handleNavigation('/student/schedule/daily')}
                                className="flex items-center justify-center w-full px-2 py-2.5 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 mb-1"
                                title={currentTexts.schedule}
                            >
                                <CiCalendar size={18} className="text-gray-500" />
                            </button>
                        )}

                        {!isCollapsed && expandedSections.schedule && (
                            <div className="pl-9 pr-2 space-y-1 mt-1">
                                {scheduleItems.map((item) => {
                                    const Icon = item.icon;
                                    const isActive = location.pathname === item.path;

                                    return (
                                        <button
                                            key={item.path}
                                            onClick={() => handleNavigation(item.path)}
                                            className={`
                                                flex items-center justify-between w-full px-2 py-1.5 rounded text-xs transition-all duration-200
                                                ${isActive
                                                    ? 'bg-blue-100 text-blue-600'
                                                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                                                }
                                            `}
                                        >
                                            <div className="flex items-center space-x-2">
                                                <Icon size={12} className={isActive ? 'text-blue-500' : 'text-gray-500'} />
                                                <span>{item.label}</span>
                                            </div>
                                            {item.badge && (
                                                <span className="text-xs font-medium bg-red-100 text-red-600 px-1.5 py-0.5 rounded">
                                                    {item.badge}
                                                </span>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Materiais e Recursos */}
                    <div className="px-3 pb-4">
                        {!isCollapsed && (
                            <button
                                onClick={() => toggleSection('materials')}
                                className="flex items-center justify-between w-full px-2 py-2.5 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 mb-1"
                            >
                                <div className="flex items-center space-x-3">
                                    <BsBook size={16} className="text-gray-500" />
                                    <span>{currentTexts.materials}</span>
                                </div>
                                {expandedSections.materials ? (
                                    <CiHome size={14} className="text-gray-500 rotate-90 transform" />
                                ) : (
                                    <CiCalendar size={14} className="text-gray-500" />
                                )}
                            </button>
                        )}
                        
                        {isCollapsed && (
                            <button
                                onClick={() => handleNavigation('/student/materials/study')}
                                className="flex items-center justify-center w-full px-2 py-2.5 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 mb-1"
                                title={currentTexts.materials}
                            >
                                <BsBook size={18} className="text-gray-500" />
                            </button>
                        )}

                        {!isCollapsed && expandedSections.materials && (
                            <div className="pl-9 pr-2 space-y-1 mt-1">
                                {materialsItems.map((item) => {
                                    const Icon = item.icon;
                                    const isActive = location.pathname === item.path;

                                    return (
                                        <button
                                            key={item.path}
                                            onClick={() => handleNavigation(item.path)}
                                            className={`
                                                flex items-center justify-between w-full px-2 py-1.5 rounded text-xs transition-all duration-200
                                                ${isActive
                                                    ? 'bg-blue-100 text-blue-600'
                                                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                                                }
                                            `}
                                        >
                                            <div className="flex items-center space-x-2">
                                                <Icon size={12} className={isActive ? 'text-blue-500' : 'text-gray-500'} />
                                                <span>{item.label}</span>
                                            </div>
                                            {item.badge && (
                                                <span className="text-xs font-medium bg-amber-100 text-amber-600 px-1.5 py-0.5 rounded">
                                                    {item.badge}
                                                </span>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Documentos e Certificados */}
                    <div className="px-3 pb-4">
                        {!isCollapsed && (
                            <button
                                onClick={() => toggleSection('documents')}
                                className="flex items-center justify-between w-full px-2 py-2.5 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 mb-1"
                            >
                                <div className="flex items-center space-x-3">
                                    <IoDocumentTextOutline size={16} className="text-gray-500" />
                                    <span>{currentTexts.documents}</span>
                                </div>
                                {expandedSections.documents ? (
                                    <CiHome size={14} className="text-gray-500 rotate-90 transform" />
                                ) : (
                                    <CiCalendar size={14} className="text-gray-500" />
                                )}
                            </button>
                        )}
                        
                        {isCollapsed && (
                            <button
                                onClick={() => handleNavigation('/student/documents/reports')}
                                className="flex items-center justify-center w-full px-2 py-2.5 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 mb-1"
                                title={currentTexts.documents}
                            >
                                <IoDocumentTextOutline size={18} className="text-gray-500" />
                            </button>
                        )}

                        {!isCollapsed && expandedSections.documents && (
                            <div className="pl-9 pr-2 space-y-1 mt-1">
                                {documentsItems.map((item) => {
                                    const Icon = item.icon;
                                    const isActive = location.pathname === item.path;

                                    return (
                                        <button
                                            key={item.path}
                                            onClick={() => handleNavigation(item.path)}
                                            className={`
                                                flex items-center justify-between w-full px-2 py-1.5 rounded text-xs transition-all duration-200
                                                ${isActive
                                                    ? 'bg-blue-100 text-blue-600'
                                                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                                                }
                                            `}
                                        >
                                            <div className="flex items-center space-x-2">
                                                <Icon size={12} className={isActive ? 'text-blue-500' : 'text-gray-500'} />
                                                <span>{item.label}</span>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Configurações */}
                    <div className="px-3 pt-4 border-t border-blue-100">
                        {!isCollapsed && (
                            <h3 className="px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                {language === 'PT' ? 'Conta' : 'Account'}
                            </h3>
                        )}
                        {settingsItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = location.pathname === item.path;

                            return (
                                <button
                                    key={item.path}
                                    onClick={() => handleNavigation(item.path)}
                                    className={`
                                        flex items-center ${isCollapsed ? 'justify-center' : ''} 
                                        w-full px-2 py-2.5 rounded-lg text-sm transition-all duration-200 mb-1
                                        ${isActive
                                            ? 'bg-blue-50 text-blue-600'
                                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                                        }
                                    `}
                                    title={isCollapsed ? item.label : undefined}
                                >
                                    <Icon size={18} className={isActive ? 'text-blue-500' : 'text-gray-500'} />
                                    {!isCollapsed && <span className="ml-3">{item.label}</span>}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Footer com logout */}
                <div className="p-4 border-t border-blue-100 bg-white/50">
                    <button
                        onClick={handleLogout}
                        className={`
                            flex items-center ${isCollapsed ? 'justify-center' : 'justify-center space-x-2'} 
                            w-full px-3 py-2.5 text-sm font-medium text-gray-700 
                            hover:bg-blue-50 hover:text-blue-600 rounded-lg border border-blue-200 
                            transition-all duration-200
                        `}
                        title={isCollapsed ? currentTexts.logout : undefined}
                    >
                        <CiLogout size={18} />
                        {!isCollapsed && <span>{currentTexts.logout}</span>}
                    </button>
                    
                    {!isCollapsed && (
                        <p className="text-xs text-center text-gray-500 mt-3">
                            {language === 'PT'
                                ? 'Sistema de Gestão Escolar'
                                : 'School Management System'} • v2.0
                        </p>
                    )}
                </div>
            </div>
        </>
    );
};

export { StudentSidebar };