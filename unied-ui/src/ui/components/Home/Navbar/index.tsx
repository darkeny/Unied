import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { CiLogin } from "react-icons/ci";
import { IoBusinessOutline, IoBookOutline, IoPeopleOutline, IoStatsChartOutline, IoCalendarOutline, IoDocumentTextOutline, IoShieldCheckmarkOutline, IoSettingsOutline } from "react-icons/io5";
import { navbarTexts } from '../../../../translations/navbarTexts';

// Interface para as props
interface NavbarProps {
    language: 'PT' | 'EN';
    setLanguage: (language: 'PT' | 'EN') => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, setLanguage }) => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
    const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);
    const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

    const languageDropdownRef = useRef<HTMLDivElement>(null);
    const featuresDropdownRef = useRef<HTMLDivElement>(null);
    const solutionsDropdownRef = useRef<HTMLDivElement>(null);

    const handleRedirect = () => navigate('/signin');
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const toggleLanguageDropdown = () => setLanguageDropdownOpen(!languageDropdownOpen);
    const toggleFeaturesDropdown = () => setFeaturesDropdownOpen(!featuresDropdownOpen);
    const toggleSolutionsDropdown = () => setSolutionsDropdownOpen(!solutionsDropdownOpen);

    const currentTexts = navbarTexts[language];

    const languages = [
        { code: 'PT' as const, name: 'Português', flag: '🇵🇹' },
        { code: 'EN' as const, name: 'English', flag: '🇺🇸' }
    ];

    // Features para o sistema educacional - Agrupadas em categorias
    const features = [
        {
            category: 'Administração',
            items: [
                { icon: <IoPeopleOutline size={18} />, name: 'Gestão de Alunos', description: 'Matrículas, dados cadastrais e histórico', link: '/features/students' },
                { icon: <IoPeopleOutline size={18} />, name: 'Gestão de Professores', description: 'Controle de docentes e cargas horárias', link: '/features/teachers' },
                { icon: '🏢', name: 'Gestão de Turmas', description: 'Organização de classes e horários', link: '/features/classes' },
                { icon: '📋', name: 'Matrículas Online', description: 'Processo de admissão digital', link: '/features/enrollment' },
            ]
        },
        {
            category: 'Pedagógico',
            items: [
                { icon: <IoBookOutline size={18} />, name: 'Planejamento de Aulas', description: 'Planos de aula digitais', link: '/features/lesson-plans' },
                { icon: '📊', name: 'Avaliações e Notas', description: 'Sistema de avaliação completo', link: '/features/grades' },
                { icon: '✅', name: 'Controle de Frequência', description: 'Registro de presenças digital', link: '/features/attendance' },
                { icon: '📈', name: 'Relatórios Pedagógicos', description: 'Análises de desempenho', link: '/features/reports' },
            ]
        },
        {
            category: 'Financeiro',
            items: [
                { icon: <IoStatsChartOutline size={18} />, name: 'Controle de Mensalidades', description: 'Gestão de pagamentos e inadimplência', link: '/features/tuition' },
                { icon: '💳', name: 'Pagamentos Online', description: 'Integração com meios de pagamento', link: '/features/payments' },
                { icon: '🧾', name: 'Emissão de Boletos', description: 'Cobranças automáticas', link: '/features/invoices' },
                { icon: '📉', name: 'Relatórios Financeiros', description: 'Dashboard financeiro completo', link: '/features/financial-reports' },
            ]
        },
        {
            category: 'Comunicação',
            items: [
                { icon: <IoDocumentTextOutline size={18} />, name: 'Portal do Aluno', description: 'Acesso individualizado', link: '/features/student-portal' },
                { icon: '👨‍👩‍👧‍👦', name: 'Portal dos Pais', description: 'Acompanhamento de desempenho', link: '/features/parent-portal' },
                { icon: '📱', name: 'Aplicativo Mobile', description: 'App para alunos e responsáveis', link: '/features/mobile-app' },
                { icon: '🔔', name: 'Notificações Automáticas', description: 'Alertas por email e SMS', link: '/features/notifications' },
            ]
        }
    ];

    // Soluções por tipo de escola - Organizadas em grid 3x2
    const solutions = [
        {
            category: 'Educação Básica',
            items: [
                { icon: '👶', name: 'Educação Infantil', description: 'Creches e berçários', color: 'from-pink-400 to-pink-500', link: '/solutions/kindergarten' },
                { icon: '🏫', name: 'Ensino Fundamental', description: '1º ao 9º ano', color: 'from-blue-400 to-blue-500', link: '/solutions/elementary' },
                { icon: '🎓', name: 'Ensino Médio', description: 'Colegial e preparatório', color: 'from-purple-400 to-purple-500', link: '/solutions/high-school' },
            ]
        },
        {
            category: 'Ensino Especializado',
            items: [
                { icon: '👨‍🏫', name: 'Escolas de Idiomas', description: 'Cursos de línguas', color: 'from-green-400 to-green-500', link: '/solutions/language' },
                { icon: '🔧', name: 'Cursos Técnicos', description: 'Formação profissional', color: 'from-orange-400 to-orange-500', link: '/solutions/technical' },
                { icon: '💻', name: 'Cursos Online', description: 'EAD e ensino à distância', color: 'from-cyan-400 to-cyan-500', link: '/solutions/online' },
            ]
        },
        {
            category: 'Rede e Gestão',
            items: [
                { icon: '🏛️', name: 'Redes de Ensino', description: 'Múltiplas unidades', color: 'from-indigo-400 to-indigo-500', link: '/solutions/network' },
                { icon: '📚', name: 'Ensino Público', description: 'Gestão municipal/estadual', color: 'from-teal-400 to-teal-500', link: '/solutions/public' },
                { icon: '💼', name: 'Escolas Particulares', description: 'Instituições privadas', color: 'from-red-400 to-red-500', link: '/solutions/private' },
            ]
        }
    ];

    // Estado para o idioma selecionado
    const [selectedLanguage, setSelectedLanguage] = useState<'PT' | 'EN'>(language);

    const handleLanguageSelect = (langCode: 'PT' | 'EN') => {
        setSelectedLanguage(langCode);
        setLanguage(langCode);
        setLanguageDropdownOpen(false);
    };

    // Fechar dropdowns quando clicar fora
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
                setLanguageDropdownOpen(false);
            }
            if (featuresDropdownRef.current && !featuresDropdownRef.current.contains(event.target as Node)) {
                setFeaturesDropdownOpen(false);
            }
            if (solutionsDropdownRef.current && !solutionsDropdownRef.current.contains(event.target as Node)) {
                setSolutionsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Atualizar idioma selecionado quando props mudam
    useEffect(() => {
        setSelectedLanguage(language);
    }, [language]);

    return (
        <>
            <nav className="bg-gradient-to-r from-blue-50 via-white to-blue-50/70 border-b border-blue-100 shadow-sm transition-colors duration-300">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Top Bar - Apenas idioma */}
                    <div className="flex justify-end items-center h-10 bg-white/80 px-4 rounded-b-2xl">
                        <div className="flex items-center space-x-4 text-sm">
                            {/* Language Dropdown */}
                            <div className="relative" ref={languageDropdownRef}>
                                <button
                                    onClick={toggleLanguageDropdown}
                                    className="flex items-center gap-2 px-3 py-1.5 text-gray-600 hover:text-blue-600 transition-colors duration-300 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm"
                                >
                                    <span className="text-base">{languages.find(l => l.code === selectedLanguage)?.flag}</span>
                                    <span className="font-medium">{languages.find(l => l.code === selectedLanguage)?.name}</span>
                                    <svg
                                        className={`w-4 h-4 ml-1 transition-transform duration-200 ${languageDropdownOpen ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Language Dropdown Menu */}
                                {languageDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl border border-gray-200 rounded-lg z-50">
                                        <div className="py-2">
                                            {languages.map((lang) => (
                                                <button
                                                    key={lang.code}
                                                    onClick={() => handleLanguageSelect(lang.code)}
                                                    className={`flex items-center justify-between gap-3 w-full px-4 py-3 text-sm text-left transition-colors duration-200 ${selectedLanguage === lang.code
                                                            ? 'bg-blue-50 text-blue-600'
                                                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                                                        }`}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-lg">{lang.flag}</span>
                                                        <span className="font-medium">{lang.name}</span>
                                                    </div>
                                                    {selectedLanguage === lang.code && (
                                                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <NavLink to="/login" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium hover:underline">
                                {currentTexts.login}
                            </NavLink>
                        </div>
                    </div>

                    {/* Main Navigation */}
                    <div className="relative flex h-20 items-center justify-between">
                        {/* Logo */}
                        <div className="flex flex-1 items-center justify-start">
                            <NavLink to="/" className="flex items-center gap-3 group">
                                <div className="flex shrink-0 items-center">
                                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-100 to-white border border-blue-200 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
                                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">U</span>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-blue-500 transition-all duration-300">Unied</span>
                                    <span className="text-xs text-gray-500 font-medium">Sistema de Gestão Educacional</span>
                                </div>
                            </NavLink>
                        </div>

                        {/* Main navigation for larger screens */}
                        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center">
                            <div className="flex space-x-2 flex-nowrap whitespace-nowrap">
                                {/* Home */}
                                <NavLink to="/" className={({ isActive }) => 
                                    `flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${isActive 
                                        ? 'text-blue-600 bg-blue-50 border border-blue-200' 
                                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'}`
                                }>
                                    {currentTexts.home}
                                </NavLink>

                                {/* Features Dropdown */}
                                <div className="relative" ref={featuresDropdownRef}>
                                    <button
                                        onClick={toggleFeaturesDropdown}
                                        className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${featuresDropdownOpen
                                                ? 'text-blue-600 bg-blue-50 border border-blue-200' 
                                                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'}`}
                                    >
                                        <IoBookOutline size={16} className="mr-1" />
                                        {currentTexts.features}
                                        <svg
                                            className={`w-4 h-4 ml-1 transition-transform duration-200 ${featuresDropdownOpen ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {/* Features Dropdown Menu - AGRANDADO */}
                                    {featuresDropdownOpen && (
                                        <div className="absolute left-0 mt-2 w-[960px] bg-white shadow-2xl border border-gray-200 rounded-lg z-50 overflow-hidden">
                                            <div className="p-6">
                                                <div className="grid grid-cols-4 gap-6">
                                                    {features.map((category, index) => (
                                                        <div key={index} className="space-y-4">
                                                            <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wider text-blue-600 border-b border-blue-100 pb-2">
                                                                {category.category}
                                                            </h3>
                                                            <div className="space-y-3">
                                                                {category.items.map((item, itemIndex) => (
                                                                    <NavLink
                                                                        key={itemIndex}
                                                                        to={item.link}
                                                                        onClick={() => setFeaturesDropdownOpen(false)}
                                                                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition-all duration-200 group"
                                                                    >
                                                                        <div className="text-blue-500 mt-0.5 flex-shrink-0">
                                                                            {item.icon}
                                                                        </div>
                                                                        <div className="flex-1 min-w-0">
                                                                            <div className="font-medium text-gray-900 group-hover:text-blue-600 text-sm">
                                                                                {item.name}
                                                                            </div>
                                                                            <div className="text-xs text-gray-500 mt-1 leading-relaxed">
                                                                                {item.description}
                                                                            </div>
                                                                        </div>
                                                                    </NavLink>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Solutions Dropdown */}
                                <div className="relative" ref={solutionsDropdownRef}>
                                    <button
                                        onClick={toggleSolutionsDropdown}
                                        className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${solutionsDropdownOpen
                                                ? 'text-blue-600 bg-blue-50 border border-blue-200' 
                                                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'}`}
                                    >
                                        <IoBusinessOutline size={16} className="mr-1" />
                                        {currentTexts.solutions}
                                        <svg
                                            className={`w-4 h-4 ml-1 transition-transform duration-200 ${solutionsDropdownOpen ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {/* Solutions Dropdown Menu - AGRANDADO */}
                                    {solutionsDropdownOpen && (
                                        <div className="absolute left-0 mt-2 w-[800px] bg-white shadow-2xl border border-gray-200 rounded-lg z-50 overflow-hidden">
                                            <div className="p-6">
                                                <div className="grid grid-cols-3 gap-6">
                                                    {solutions.map((category, index) => (
                                                        <div key={index} className="space-y-4">
                                                            <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wider text-blue-600 border-b border-blue-100 pb-2">
                                                                {category.category}
                                                            </h3>
                                                            <div className="space-y-4">
                                                                {category.items.map((item, itemIndex) => (
                                                                    <NavLink
                                                                        key={itemIndex}
                                                                        to={item.link}
                                                                        onClick={() => setSolutionsDropdownOpen(false)}
                                                                        className="block group"
                                                                    >
                                                                        <div className="flex flex-col p-4 rounded-lg border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-200 bg-gradient-to-br from-gray-50 to-white group-hover:from-white group-hover:to-blue-50">
                                                                            <div className="flex items-center gap-3 mb-3">
                                                                                <div className={`h-10 w-10 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center text-white`}>
                                                                                    <span className="text-lg">{item.icon}</span>
                                                                                </div>
                                                                                <div className="flex-1">
                                                                                    <div className="font-semibold text-gray-900 group-hover:text-blue-600">
                                                                                        {item.name}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="text-xs text-gray-600 leading-relaxed">
                                                                                {item.description}
                                                                            </div>
                                                                        </div>
                                                                    </NavLink>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Pricing */}
                                <NavLink to="/pricing" className={({ isActive }) => 
                                    `flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${isActive 
                                        ? 'text-blue-600 bg-blue-50 border border-blue-200' 
                                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'}`
                                }>
                                    {currentTexts.pricing}
                                </NavLink>

                                {/* About */}
                                <NavLink to="/about" className={({ isActive }) => 
                                    `flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${isActive 
                                        ? 'text-blue-600 bg-blue-50 border border-blue-200' 
                                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'}`
                                }>
                                    {currentTexts.about}
                                </NavLink>

                                {/* Contact */}
                                <NavLink to="/contact" className={({ isActive }) => 
                                    `flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${isActive 
                                        ? 'text-blue-600 bg-blue-50 border border-blue-200' 
                                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'}`
                                }>
                                    {currentTexts.contact}
                                </NavLink>
                            </div>
                        </div>

                        {/* CTA Button and Mobile menu */}
                        <div className="flex items-center space-x-3">
                            {/* Demo Button */}
                            <div className="hidden md:flex">
                                <button
                                    onClick={() => navigate('/demo')}
                                    className='flex items-center gap-2 rounded-lg border border-blue-300 px-4 py-2.5 text-sm font-medium text-blue-600 hover:bg-blue-50 hover:border-blue-400 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300'
                                >
                                    <span className="text-sm">🎯</span>
                                    {currentTexts.demo}
                                </button>
                            </div>

                            {/* Sign Up Button */}
                            <div className="hidden sm:flex">
                                <button
                                    onClick={handleRedirect}
                                    className='flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:from-blue-600 hover:to-blue-700 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300'
                                >
                                    <CiLogin size={16} />
                                    {currentTexts.signup}
                                </button>
                            </div>

                            {/* Mobile menu button */}
                            <div className="lg:hidden">
                                <button
                                    type="button"
                                    onClick={toggleMenu}
                                    className="relative inline-flex items-center justify-center rounded-lg p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-300"
                                    aria-controls="mobile-menu"
                                    aria-expanded={menuOpen}
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {menuOpen ? (
                                        <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    ) : (
                                        <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                {menuOpen && (
                    <div className="lg:hidden border-t border-blue-100 bg-white/95 backdrop-blur-sm" id="mobile-menu">
                        <div className="px-4 pb-4 pt-2 space-y-1">
                            {/* Home */}
                            <NavLink
                                to="/"
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) => 
                                    `block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-300 ${isActive 
                                        ? 'text-blue-600 bg-blue-50' 
                                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`
                                }
                            >
                                {currentTexts.home}
                            </NavLink>

                            {/* Language Selection */}
                            <div className="px-4 py-3 border-t border-blue-100">
                                <div className="text-sm font-semibold text-gray-500 mb-3">Idioma / Language</div>
                                <div className="grid grid-cols-2 gap-2">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                handleLanguageSelect(lang.code);
                                                setMenuOpen(false);
                                            }}
                                            className={`flex items-center justify-center gap-2 px-3 py-3 text-sm rounded-lg transition-colors duration-200 ${selectedLanguage === lang.code
                                                    ? 'bg-blue-100 text-blue-600 border border-blue-200'
                                                    : 'bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
                                                }`}
                                        >
                                            <span className="text-lg">{lang.flag}</span>
                                            <span className="font-medium">{lang.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Features Section */}
                            <div className="px-4 py-3 border-t border-blue-100">
                                <div className="text-sm font-semibold text-gray-500 mb-3">{currentTexts.features}</div>
                                <div className="space-y-4">
                                    {features.map((category, index) => (
                                        <div key={index}>
                                            <h4 className="font-medium text-gray-700 text-sm mb-2 pl-2">{category.category}</h4>
                                            <div className="grid grid-cols-1 gap-2">
                                                {category.items.map((item, itemIndex) => (
                                                    <NavLink
                                                        key={itemIndex}
                                                        to={item.link}
                                                        onClick={() => setMenuOpen(false)}
                                                        className="flex items-center gap-3 px-3 py-3 text-sm text-gray-700 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                                                    >
                                                        <div className="text-blue-500">
                                                            {item.icon}
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="font-medium">{item.name}</div>
                                                            <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                                                        </div>
                                                    </NavLink>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Solutions Section */}
                            <div className="px-4 py-3 border-t border-blue-100">
                                <div className="text-sm font-semibold text-gray-500 mb-3">{currentTexts.solutions}</div>
                                <div className="grid grid-cols-1 gap-4">
                                    {solutions.map((category, index) => (
                                        <div key={index}>
                                            <h4 className="font-medium text-gray-700 text-sm mb-3 pl-2">{category.category}</h4>
                                            <div className="grid grid-cols-2 gap-2">
                                                {category.items.map((item, itemIndex) => (
                                                    <NavLink
                                                        key={itemIndex}
                                                        to={item.link}
                                                        onClick={() => setMenuOpen(false)}
                                                        className="flex flex-col items-center p-3 text-sm text-gray-700 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 text-center"
                                                    >
                                                        <div className={`h-8 w-8 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white mb-2`}>
                                                            <span className="text-sm">{item.icon}</span>
                                                        </div>
                                                        <div className="font-medium text-xs">{item.name}</div>
                                                        <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                                                    </NavLink>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Other Links */}
                            {['pricing', 'about', 'contact'].map((item) => (
                                <NavLink
                                    key={item}
                                    to={`/${item}`}
                                    onClick={() => setMenuOpen(false)}
                                    className={({ isActive }) => 
                                        `block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-300 ${isActive 
                                            ? 'text-blue-600 bg-blue-50' 
                                            : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`
                                    }
                                >
                                    {currentTexts[item as keyof typeof currentTexts]}
                                </NavLink>
                            ))}

                            {/* Mobile CTA Buttons */}
                            <div className="px-4 py-4 border-t border-blue-100 space-y-3">
                                <button
                                    onClick={() => { navigate('/demo'); setMenuOpen(false); }}
                                    className='w-full flex items-center justify-center gap-2 rounded-lg border border-blue-300 px-4 py-3 text-base font-medium text-blue-600 hover:bg-blue-50 transition-colors duration-300'
                                >
                                    <span className="text-sm">🎯</span>
                                    {currentTexts.demo}
                                </button>
                                
                                <button
                                    onClick={() => { handleRedirect(); setMenuOpen(false); }}
                                    className='w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3 text-base font-medium text-white hover:from-blue-600 hover:to-blue-700 transition-colors duration-300'
                                >
                                    <CiLogin size={18} />
                                    {currentTexts.signup}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export { Navbar };