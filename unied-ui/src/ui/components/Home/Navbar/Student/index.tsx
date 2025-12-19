// components/Home/Navbar/Student.tsx (StudentSidebar atualizado)
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { VscChevronDown, VscChevronRight } from "react-icons/vsc";
import {
    CiLogout,
    CiUser,
    CiSettings,
    CiBellOn,
    CiFileOn,
    CiBookmark,
    CiChat1,
    CiHome,
    CiCalendar,
    CiEdit,
} from "react-icons/ci";
import {
    IoStatsChartOutline,
    IoDocumentTextOutline,
    IoTimeOutline,
    IoLibraryOutline,
    IoPeopleOutline,
    IoFolderOpenOutline,
    IoBookOutline,
    IoDocumentsOutline,
} from "react-icons/io5";
import { FaGraduationCap, FaChalkboardTeacher } from "react-icons/fa";
import { BsBook, BsClockHistory, BsJournalBookmark } from "react-icons/bs";
import { MdOutlineUpdate, MdOutlineSchool } from "react-icons/md";
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
        curriculum: false,
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
    const currentTerm = language === 'PT' ? 'Ano Letivo 2026' : 'Academic Year 2026';

    // Menu Items
    const menuItems = [
        { path: '/student/dashboard', icon: CiHome, label: currentTexts.dashboard },
        { path: '/student/notifications', icon: CiBellOn, label: currentTexts.notifications, badge: 3 },
        { path: '/student/messages', icon: CiChat1, label: currentTexts.messages, badge: 5 },
    ];

    // Acadêmico
    const academicItems = [
        { path: '/student/timetable', icon: IoTimeOutline, label: currentTexts.timetable },
        { path: '/student/attendance', icon: BsClockHistory, label: currentTexts.attendance, badgeValue: '94%' },
        { path: '/student/grades', icon: IoStatsChartOutline, label: currentTexts.grades, badgeValue: '15,8' },
        { path: '/student/subjects', icon: BsBook, label: currentTexts.subjects },
        { path: '/student/teachers', icon: FaChalkboardTeacher, label: currentTexts.teachers },
    ];

    // Plano Curricular (Nova seção)
    const curriculumItems = [
        { path: '/student/curriculum/plan', icon: IoBookOutline, label: 'Plano Curricular' },
        { path: '/student/curriculum/enrolled', icon: MdOutlineSchool, label: 'Disciplinas Inscritas' },
        { path: '/student/curriculum/academic-history', icon: BsJournalBookmark, label: 'Histórico Académico' },
    ];

    // Horário e Agenda
    const scheduleItems = [
        { path: '/student/exams', icon: IoDocumentTextOutline, label: currentTexts.exams, badge: 1 },
    ];

    // Materiais e Recursos
    const materialsItems = [
        { path: '/student/materials/study', icon: IoLibraryOutline, label: currentTexts.studyMaterials },
        { path: '/student/materials/homework', icon: CiFileOn, label: currentTexts.homework, badge: 4 },
        { path: '/student/materials/lessons', icon: CiBookmark, label: currentTexts.lessonPlans },
        { path: '/student/materials/library', icon: IoLibraryOutline, label: currentTexts.digitalLibrary },
    ];

    // Documentos e Certificados (Atualizado)
    const documentsItems = [
        { path: '/student/documents/reports', icon: IoDocumentTextOutline, label: currentTexts.reportCards },
        { path: '/student/documents/certificates', icon: CiFileOn, label: currentTexts.certificates },
        { path: '/student/documents/declarations', icon: CiFileOn, label: currentTexts.declarations },
        { path: '/student/documents/update', icon: MdOutlineUpdate, label: 'Atualização de Documentos' },
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

            {/* Sidebar - Largura aumentada */}
            <div className={`
                fixed lg:sticky top-0 left-0 h-screen bg-gradient-to-b from-gray-50/90 via-white to-gray-50/40 
                border-r border-gray-200 shadow-sm z-50
                transform transition-all duration-300 ease-in-out
                ${isCollapsed ? 'w-24' : 'w-82'}
                flex flex-col overflow-hidden
            `}>

                {/* Header com logo e botão toggle */}
                <div className="flex items-center justify-between p-5 border-b border-gray-200">
                    {!isCollapsed && (
                        <div className="flex items-center space-x-3">
                            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                                <span className="text-sm font-bold text-white">U</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                    Unied
                                </span>
                                <span className="text-xs text-gray-500 font-medium">Sistema de Gestão Educacional</span>
                            </div>
                        </div>
                    )}

                    {isCollapsed && (
                        <div className="flex items-center justify-center w-full">
                            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                                <span className="text-sm font-bold text-white">U</span>
                            </div>
                        </div>
                    )}

                    <button
                        onClick={onToggleCollapse}
                        className="p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors duration-200"
                        title={isCollapsed ? 'Expandir' : 'Recolher'}
                    >
                        {isCollapsed ? (
                            <VscChevronRight size={20} />
                        ) : (
                            <VscChevronDown size={20} className="rotate-270" />
                        )}
                    </button>
                </div>

                {/* Informações do Estudante (apenas quando expandido) */}
                {!isCollapsed && (
                    <div className="p-5 border-b border-gray-200">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center">
                                <span className="text-white font-semibold text-base">
                                    {studentName.split(' ').map(n => n[0]).join('')}
                                </span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-base font-semibold text-gray-900 truncate">
                                    {studentName}
                                </p>
                                <p className="text-sm text-gray-600 truncate">
                                    {studentNumber}
                                </p>
                            </div>
                        </div>

                        <div className="bg-white/80 border border-gray-300 rounded-lg p-3">
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-medium text-gray-700">{className}</span>
                                <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded">
                                    {language === 'PT' ? 'Ativo' : 'Active'}
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 truncate">{course}</p>
                        </div>
                    </div>
                )}

                {/* Menu de Navegação */}
                <div className="flex-1 overflow-y-auto py-5">
                    {/* Menu Principal */}
                    <div className="px-4">
                        {!isCollapsed && (
                            <h3 className="px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
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
                                        w-full px-3 py-3 rounded-lg text-sm transition-all duration-200 mb-1.5
                                        ${isActive
                                            ? 'bg-gray-100 text-gray-900 border-l-3 border-gray-800'
                                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                                        }
                                    `}
                                >
                                    <div className="flex items-center space-x-3">
                                        <Icon size={20} className={isActive ? 'text-gray-800' : 'text-gray-600'} />
                                        {!isCollapsed && <span className="font-medium">{item.label}</span>}
                                    </div>
                                    {!isCollapsed && item.badge && (
                                        <span className="bg-blue-600 text-white text-xs font-medium rounded-full h-6 w-6 flex items-center justify-center">
                                            {item.badge}
                                        </span>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Acadêmico */}
                    <div className="px-4">
                        {!isCollapsed ? (
                            <>
                                <button
                                    onClick={() => toggleSection('academic')}
                                    className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-all duration-200"
                                >
                                    <div className="flex items-center space-x-3">
                                        <FaGraduationCap size={18} className="text-gray-600" />
                                        <span className="font-medium">{currentTexts.academic}</span>
                                    </div>
                                    {expandedSections.academic ? (
                                        <VscChevronDown size={16} className="text-gray-500 transition-transform duration-200" />
                                    ) : (
                                        <VscChevronRight size={16} className="text-gray-500 transition-transform duration-200" />
                                    )}
                                </button>

                                {expandedSections.academic && (
                                    <div className="pl-11 space-y-1 mt-1">
                                        {academicItems.map((item) => {
                                            const Icon = item.icon;
                                            const isActive = location.pathname === item.path;

                                            return (
                                                <button
                                                    key={item.path}
                                                    onClick={() => handleNavigation(item.path)}
                                                    className={`
                                                        flex items-center justify-between w-full px-2 py-2 rounded text-sm transition-all duration-200
                                                        ${isActive
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                                        }
                                                    `}
                                                >
                                                    <div className="flex items-center space-x-2">
                                                        <Icon size={14} className={isActive ? 'text-gray-800' : 'text-gray-500'} />
                                                        <span>{item.label}</span>
                                                    </div>
                                                    {item.badgeValue && (
                                                        <span className={`text-xs font-medium px-2 py-1 rounded ${item.path === '/student/grades' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                                                            {item.badgeValue}
                                                        </span>
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>
                                )}
                            </>
                        ) : (
                            <button
                                onClick={() => handleNavigation('/student/grades')}
                                className="flex items-center justify-center w-full px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-all duration-200 mb-1.5"
                                title={currentTexts.academic}
                            >
                                <FaGraduationCap size={20} className="text-gray-600" />
                            </button>
                        )}
                    </div>

                    {/* Plano Curricular (Nova seção) */}
                    <div className="px-4">
                        {!isCollapsed ? (
                            <>
                                <button
                                    onClick={() => toggleSection('curriculum')}
                                    className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-all duration-200 mb-1.5"
                                >
                                    <div className="flex items-center space-x-3">
                                        <IoBookOutline size={18} className="text-gray-600" />
                                        <span className="font-medium">Plano Curricular</span>
                                    </div>
                                    {expandedSections.curriculum ? (
                                        <VscChevronDown size={16} className="text-gray-500 transition-transform duration-200" />
                                    ) : (
                                        <VscChevronRight size={16} className="text-gray-500 transition-transform duration-200" />
                                    )}
                                </button>

                                {expandedSections.curriculum && (
                                    <div className="pl-11 space-y-1 mt-1">
                                        {curriculumItems.map((item) => {
                                            const Icon = item.icon;
                                            const isActive = location.pathname === item.path;

                                            return (
                                                <button
                                                    key={item.path}
                                                    onClick={() => handleNavigation(item.path)}
                                                    className={`
                                                        flex items-center justify-between w-full px-2 py-2 rounded text-sm transition-all duration-200
                                                        ${isActive
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                                        }
                                                    `}
                                                >
                                                    <div className="flex items-center space-x-2">
                                                        <Icon size={14} className={isActive ? 'text-gray-800' : 'text-gray-500'} />
                                                        <span>{item.label}</span>
                                                    </div>
                                                </button>
                                            );
                                        })}
                                    </div>
                                )}
                            </>
                        ) : (
                            <button
                                onClick={() => handleNavigation('/student/curriculum/plan')}
                                className="flex items-center justify-center w-full px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-all duration-200 mb-1.5"
                                title="Plano Curricular"
                            >
                                <IoBookOutline size={20} className="text-gray-600" />
                            </button>
                        )}
                    </div>

                    {/* Horário e Agenda */}
                    <div className="px-4">
                        {!isCollapsed ? (
                            <>
                                <button
                                    onClick={() => toggleSection('schedule')}
                                    className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-all duration-200 mb-1.5"
                                >
                                    <div className="flex items-center space-x-3">
                                        <CiCalendar size={18} className="text-gray-600" />
                                        <span className="font-medium">{currentTexts.schedule}</span>
                                    </div>
                                    {expandedSections.schedule ? (
                                        <VscChevronDown size={16} className="text-gray-500 transition-transform duration-200" />
                                    ) : (
                                        <VscChevronRight size={16} className="text-gray-500 transition-transform duration-200" />
                                    )}
                                </button>

                                {expandedSections.schedule && (
                                    <div className="pl-11 space-y-1 mt-1">
                                        {scheduleItems.map((item) => {
                                            const Icon = item.icon;
                                            const isActive = location.pathname === item.path;

                                            return (
                                                <button
                                                    key={item.path}
                                                    onClick={() => handleNavigation(item.path)}
                                                    className={`
                                                        flex items-center justify-between w-full px-2 py-2 rounded text-sm transition-all duration-200
                                                        ${isActive
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                                        }
                                                    `}
                                                >
                                                    <div className="flex items-center space-x-2">
                                                        <Icon size={14} className={isActive ? 'text-gray-800' : 'text-gray-500'} />
                                                        <span>{item.label}</span>
                                                    </div>
                                                    {item.badge && (
                                                        <span className="text-xs font-medium bg-red-100 text-red-700 px-2 py-1 rounded">
                                                            {item.badge}
                                                        </span>
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>
                                )}
                            </>
                        ) : (
                            <button
                                onClick={() => handleNavigation('/student/schedule/daily')}
                                className="flex items-center justify-center w-full px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-all duration-200 mb-1.5"
                                title={currentTexts.schedule}
                            >
                                <CiCalendar size={20} className="text-gray-600" />
                            </button>
                        )}
                    </div>

                    {/* Materiais e Recursos */}
                    <div className="px-4">
                        {!isCollapsed ? (
                            <>
                                <button
                                    onClick={() => toggleSection('materials')}
                                    className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-all duration-200 mb-1.5"
                                >
                                    <div className="flex items-center space-x-3">
                                        <BsBook size={18} className="text-gray-600" />
                                        <span className="font-medium">{currentTexts.materials}</span>
                                    </div>
                                    {expandedSections.materials ? (
                                        <VscChevronDown size={16} className="text-gray-500 transition-transform duration-200" />
                                    ) : (
                                        <VscChevronRight size={16} className="text-gray-500 transition-transform duration-200" />
                                    )}
                                </button>

                                {expandedSections.materials && (
                                    <div className="pl-11 space-y-1 mt-1">
                                        {materialsItems.map((item) => {
                                            const Icon = item.icon;
                                            const isActive = location.pathname === item.path;

                                            return (
                                                <button
                                                    key={item.path}
                                                    onClick={() => handleNavigation(item.path)}
                                                    className={`
                                                        flex items-center justify-between w-full px-2 py-2 rounded text-sm transition-all duration-200
                                                        ${isActive
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                                        }
                                                    `}
                                                >
                                                    <div className="flex items-center space-x-2">
                                                        <Icon size={14} className={isActive ? 'text-gray-800' : 'text-gray-500'} />
                                                        <span>{item.label}</span>
                                                    </div>
                                                    {item.badge && (
                                                        <span className="text-xs font-medium bg-amber-100 text-amber-700 px-2 py-1 rounded">
                                                            {item.badge}
                                                        </span>
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>
                                )}
                            </>
                        ) : (
                            <button
                                onClick={() => handleNavigation('/student/materials/study')}
                                className="flex items-center justify-center w-full px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-all duration-200 mb-1.5"
                                title={currentTexts.materials}
                            >
                                <BsBook size={20} className="text-gray-600" />
                            </button>
                        )}
                    </div>

                    {/* Documentos e Certificados (Atualizado) */}
                    <div className="px-4">
                        {!isCollapsed ? (
                            <>
                                <button
                                    onClick={() => toggleSection('documents')}
                                    className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-all duration-200 mb-1.5"
                                >
                                    <div className="flex items-center space-x-3">
                                        <IoDocumentsOutline size={18} className="text-gray-600" />
                                        <span className="font-medium">Documentos</span>
                                    </div>
                                    {expandedSections.documents ? (
                                        <VscChevronDown size={16} className="text-gray-500 transition-transform duration-200" />
                                    ) : (
                                        <VscChevronRight size={16} className="text-gray-500 transition-transform duration-200" />
                                    )}
                                </button>

                                {expandedSections.documents && (
                                    <div className="pl-11 space-y-1 mt-1">
                                        {documentsItems.map((item) => {
                                            const Icon = item.icon;
                                            const isActive = location.pathname === item.path;

                                            return (
                                                <button
                                                    key={item.path}
                                                    onClick={() => handleNavigation(item.path)}
                                                    className={`
                                                        flex items-center justify-between w-full px-2 py-2 rounded text-sm transition-all duration-200
                                                        ${isActive
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                                        }
                                                    `}
                                                >
                                                    <div className="flex items-center space-x-2">
                                                        <Icon size={14} className={isActive ? 'text-gray-800' : 'text-gray-500'} />
                                                        <span>{item.label}</span>
                                                    </div>
                                                </button>
                                            );
                                        })}
                                    </div>
                                )}
                            </>
                        ) : (
                            <button
                                onClick={() => handleNavigation('/student/documents/reports')}
                                className="flex items-center justify-center w-full px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-all duration-200 mb-1.5"
                                title="Documentos"
                            >
                                <IoDocumentsOutline size={20} className="text-gray-600" />
                            </button>
                        )}
                    </div>

                    {/* Configurações */}
                    <div className="px-4 pt-5 border-t border-gray-200">
                        {!isCollapsed && (
                            <h3 className="px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
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
                                        w-full px-3 py-3 rounded-lg text-sm transition-all duration-200 mb-1.5
                                        ${isActive
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                                        }
                                    `}
                                    title={isCollapsed ? item.label : undefined}
                                >
                                    <Icon size={20} className={isActive ? 'text-gray-800' : 'text-gray-600'} />
                                    {!isCollapsed && <span className="ml-3 font-medium">{item.label}</span>}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Footer com logout */}
                <div className="p-5 border-t border-gray-200 bg-white/50">
                    <button
                        onClick={handleLogout}
                        className={`
                            flex items-center ${isCollapsed ? 'justify-center' : 'justify-center space-x-2'} 
                            w-full px-4 py-3 text-sm font-medium text-gray-700 
                            hover:bg-gray-50 hover:text-gray-900 rounded-lg border border-gray-300 
                            transition-all duration-200
                        `}
                        title={isCollapsed ? currentTexts.logout : undefined}
                    >
                        <CiLogout size={20} />
                        {!isCollapsed && <span className="font-medium">{currentTexts.logout}</span>}
                    </button>

                    {!isCollapsed && (
                        <p className="text-xs text-center text-gray-500 mt-4">
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