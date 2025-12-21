// pages/Student/TeachersPage.tsx
import React, { useState } from 'react';
import { FaChalkboardTeacher, FaSearch, FaFilter, FaStar } from 'react-icons/fa';
import { IoMdSchool } from 'react-icons/io';
import { BiTimeFive } from 'react-icons/bi';
import { MdEmail, MdPhone, MdSubject, MdDateRange, MdWork, MdMessage, MdSchedule } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';
import { BsFillPersonBadgeFill } from 'react-icons/bs';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { StudentSidebar } from '../../../components/Home/Navbar/Student';

interface Teacher {
    id: string;
    employee_number: string;
    full_name: string;
    specialty: string;
    email: string;
    phone: string;
    admission_date: string;
    status: 'active' | 'inactive' | 'on-leave';
    education: string;
    subjects?: string[];
    rating?: number;
    office_hours?: string;
    experience_years?: number;
    department?: string;
}

const TeachersPage: React.FC = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterSpecialty, setFilterSpecialty] = useState('all');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    // Dados dos professores
    const teachers: Teacher[] = [
        {
            id: "1",
            employee_number: "EMP001",
            full_name: "Prof. Miguel Fernandes",
            specialty: "Matemática",
            email: "miguel.fernandes@escola.edu",
            phone: "+244 923 456 789",
            admission_date: "2020-09-01",
            status: "active",
            education: "Mestrado em Matemática",
            subjects: ["Álgebra", "Cálculo", "Geometria", "Estatística"],
            rating: 4.8,
            office_hours: "Segunda e Quarta: 14h-16h",
            experience_years: 5,
            department: "Ciências Exatas"
        },
        {
            id: "2",
            employee_number: "EMP002",
            full_name: "Dra. Sara Costa",
            specialty: "Física",
            email: "sara.costa@escola.edu",
            phone: "+244 924 567 890",
            admission_date: "2019-08-15",
            status: "active",
            education: "Doutoramento em Física",
            subjects: ["Mecânica", "Termodinâmica", "Ótica", "Eletromagnetismo"],
            rating: 4.9,
            office_hours: "Terça e Quinta: 10h-12h",
            experience_years: 6,
            department: "Ciências Exatas"
        },
        {
            id: "3",
            employee_number: "EMP003",
            full_name: "Prof. David Mendes",
            specialty: "Química",
            email: "david.mendes@escola.edu",
            phone: "+244 925 678 901",
            admission_date: "2021-01-10",
            status: "active",
            education: "Doutoramento em Química",
            subjects: ["Química Orgânica", "Bioquímica", "Química Analítica", "Físico-Química"],
            rating: 4.7,
            office_hours: "Segunda a Sexta: 13h-15h",
            experience_years: 4,
            department: "Ciências Naturais"
        },
        {
            id: "4",
            employee_number: "EMP004",
            full_name: "Prof.ª Carla Silva",
            specialty: "Biologia",
            email: "carla.silva@escola.edu",
            phone: "+244 926 789 012",
            admission_date: "2018-03-22",
            status: "active",
            education: "Mestrado em Biologia",
            subjects: ["Genética", "Ecologia", "Microbiologia", "Botânica"],
            rating: 4.6,
            office_hours: "Quarta e Sexta: 09h-11h",
            experience_years: 7,
            department: "Ciências Naturais"
        },
        {
            id: "5",
            employee_number: "EMP005",
            full_name: "Prof. Rui Gomes",
            specialty: "Informática",
            email: "rui.gomes@escola.edu",
            phone: "+244 927 890 123",
            admission_date: "2022-02-14",
            status: "active",
            education: "Mestrado em Ciência de Computadores",
            subjects: ["Programação", "Algoritmos", "Bases de Dados", "Redes de Computadores"],
            rating: 4.9,
            office_hours: "Terça e Quinta: 15h-17h",
            experience_years: 3,
            department: "Tecnologias"
        },
        {
            id: "6",
            employee_number: "EMP006",
            full_name: "Dra. Marta Santos",
            specialty: "História",
            email: "marta.santos@escola.edu",
            phone: "+244 928 901 234",
            admission_date: "2017-11-05",
            status: "active",
            education: "Doutoramento em História",
            subjects: ["História Mundial", "Civilizações Antigas", "História Moderna", "História de Angola"],
            rating: 4.5,
            office_hours: "Segunda e Quarta: 10h-12h",
            experience_years: 8,
            department: "Humanidades"
        },
        {
            id: "7",
            employee_number: "EMP007",
            full_name: "Prof. João Pereira",
            specialty: "Português",
            email: "joao.pereira@escola.edu",
            phone: "+244 929 012 345",
            admission_date: "2019-04-18",
            status: "active",
            education: "Mestrado em Língua Portuguesa",
            subjects: ["Gramática", "Literatura", "Redação", "Análise Textual"],
            rating: 4.7,
            office_hours: "Terça e Quinta: 14h-16h",
            experience_years: 6,
            department: "Línguas"
        },
        {
            id: "8",
            employee_number: "EMP008",
            full_name: "Prof.ª Ana Rodrigues",
            specialty: "Inglês",
            email: "ana.rodrigues@escola.edu",
            phone: "+244 930 123 456",
            admission_date: "2020-10-30",
            status: "active",
            education: "Mestrado em Língua Inglesa",
            subjects: ["Inglês Técnico", "Conversação", "Gramática Inglesa", "Cultura Angloparlante"],
            rating: 4.8,
            office_hours: "Segunda e Sexta: 11h-13h",
            experience_years: 5,
            department: "Línguas"
        }
    ];

    const specialties = Array.from(new Set(teachers.map(t => t.specialty)));

    const filteredTeachers = teachers.filter(teacher => {
        const matchesSearch = teacher.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            teacher.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
            teacher.subjects?.some(subject => subject.toLowerCase().includes(searchTerm.toLowerCase()));

        const matchesSpecialty = filterSpecialty === 'all' || teacher.specialty === filterSpecialty;

        return matchesSearch && matchesSpecialty;
    });

    const handleTeacherSelect = (teacher: Teacher) => {
        setSelectedTeacher(teacher);
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-PT', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Função para gerar iniciais do nome
    const getInitials = (name: string) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    };

    return (
        <div className="flex min-h-screen bg-linear-to-b from-gray-50 to-gray-100/30">
            <StudentSidebar
                language="PT"
                isCollapsed={isSidebarCollapsed}
                onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            />

            <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarCollapsed ? 'ml-5' : 'ml-0'}`}>
                {/* Header */}
                <header className="bg-white border-b border-gray-200 p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/70 shadow-sm">
                        <div>
                            <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-3">
                                <div className="p-2 bg-blue-50 rounded-lg border border-blue-100">
                                    <FaChalkboardTeacher className="text-blue-600" size={24} />
                                </div>
                                Professores
                            </h1>
                            <p className="text-gray-600 mt-1">Lista de todos os seus professores</p>
                        </div>

                        <div className="flex items-center gap-4">
                            {/* View Toggle */}
                            <div className="flex bg-gray-100 rounded-lg p-1 border border-gray-300">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm text-gray-800 border border-gray-300' : 'text-gray-600 hover:text-gray-800'}`}
                                >
                                    Vista em Grade
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm text-gray-800 border border-gray-300' : 'text-gray-600 hover:text-gray-800'}`}
                                >
                                    Vista em Lista
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Search and Filter */}
                    <div className="mt-6 flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Buscar por nome, disciplina ou matéria..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all bg-white"
                            />
                        </div>

                        <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-3">
                            <FaFilter className="text-gray-400" />
                            <select
                                value={filterSpecialty}
                                onChange={(e) => setFilterSpecialty(e.target.value)}
                                className="bg-transparent border-none focus:ring-0 text-gray-700 font-medium"
                            >
                                <option value="all">Todas as Especialidades</option>
                                {specialties.map(specialty => (
                                    <option key={specialty} value={specialty}>{specialty}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-1 overflow-hidden p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
                        {/* Teachers List */}
                        <div className={`${selectedTeacher ? 'lg:col-span-2' : 'lg:col-span-3'} overflow-hidden`}>
                            <div className="bg-white rounded-xl border border-gray-200 shadow-sm h-full overflow-hidden">
                                <div className="p-4 border-b border-gray-200">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-lg font-semibold text-gray-800">
                                            {filteredTeachers.length} Professor{filteredTeachers.length !== 1 ? 'es' : ''}
                                            {filterSpecialty !== 'all' && ` - ${filterSpecialty}`}
                                        </h2>
                                        <div className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-lg">
                                            Mostrando {filteredTeachers.length} de {teachers.length}
                                        </div>
                                    </div>
                                </div>

                                <div className="overflow-y-auto h-[calc(100%-70px)]">
                                    {filteredTeachers.length === 0 ? (
                                        <div className="flex flex-col items-center justify-center h-full p-8 text-gray-500">
                                            <FaChalkboardTeacher className="text-5xl mb-4 text-gray-300" />
                                            <p className="text-lg font-medium">Nenhum professor encontrado</p>
                                            <p className="text-gray-600 mt-2">Tente alterar os filtros de busca</p>
                                        </div>
                                    ) : viewMode === 'grid' ? (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                                            {filteredTeachers.map(teacher => (
                                                <div
                                                    key={teacher.id}
                                                    onClick={() => handleTeacherSelect(teacher)}
                                                    className={`border rounded-xl p-4 cursor-pointer transition-all hover:shadow-md bg-white ${selectedTeacher?.id === teacher.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                                                >
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-16 h-16 bg-linear-to-br bg-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                                                            {getInitials(teacher.full_name)}
                                                        </div>

                                                        <div className="flex-1">
                                                            <div className="flex items-center justify-between mb-2">
                                                                <h3 className="font-semibold text-gray-800">{teacher.full_name}</h3>
                                                                <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-700 border border-green-200">
                                                                    Ativo
                                                                </span>
                                                            </div>

                                                            <div className="mb-3">
                                                                <div className="flex items-center gap-2 text-gray-600 mb-2">
                                                                    <IoMdSchool className="text-blue-500" size={16} />
                                                                    <span className="text-sm font-medium">{teacher.specialty}</span>
                                                                </div>

                                                                <div className="flex items-center gap-4">
                                                                    <div className="flex items-center gap-1">
                                                                        <FaStar className="text-yellow-500" size={14} />
                                                                        <span className="text-sm font-semibold">{teacher.rating}</span>
                                                                    </div>

                                                                    <div className="flex items-center gap-1">
                                                                        <BiTimeFive className="text-gray-500" size={14} />
                                                                        <span className="text-sm text-gray-600">
                                                                            {teacher.experience_years} anos
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="flex flex-wrap gap-2">
                                                                {teacher.subjects?.slice(0, 3).map((subject, index) => (
                                                                    <span
                                                                        key={index}
                                                                        className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded border border-gray-300"
                                                                    >
                                                                        {subject}
                                                                    </span>
                                                                ))}
                                                                {teacher.subjects && teacher.subjects.length > 3 && (
                                                                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded border border-gray-300">
                                                                        +{teacher.subjects.length - 3}
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="p-4">
                                            <table className="w-full">
                                                <thead>
                                                    <tr className="text-left text-gray-600 border-b border-gray-200">
                                                        <th className="pb-3 font-medium text-sm">Professor</th>
                                                        <th className="pb-3 font-medium text-sm">Especialidade</th>
                                                        <th className="pb-3 font-medium text-sm">Avaliação</th>
                                                        <th className="pb-3 font-medium text-sm">Status</th>
                                                        <th className="pb-3 font-medium text-sm">Contacto</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {filteredTeachers.map(teacher => (
                                                        <tr
                                                            key={teacher.id}
                                                            onClick={() => handleTeacherSelect(teacher)}
                                                            className={`border-b border-gray-200 hover:bg-gray-50 cursor-pointer ${selectedTeacher?.id === teacher.id ? 'bg-blue-50' : ''}`}
                                                        >
                                                            <td className="py-4">
                                                                <div className="flex items-center gap-3">
                                                                    <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-medium">
                                                                        {getInitials(teacher.full_name)}
                                                                    </div>
                                                                    <div>
                                                                        <p className="font-medium text-gray-800">{teacher.full_name}</p>
                                                                        <p className="text-xs text-gray-600">{teacher.employee_number}</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="py-4">
                                                                <div className="flex items-center gap-2">
                                                                    <IoMdSchool className="text-blue-500" size={16} />
                                                                    <span className="text-sm">{teacher.specialty}</span>
                                                                </div>
                                                            </td>
                                                            <td className="py-4">
                                                                <div className="flex items-center gap-2">
                                                                    <FaStar className="text-yellow-500" size={14} />
                                                                    <span className="font-semibold text-sm">{teacher.rating}</span>
                                                                </div>
                                                            </td>
                                                            <td className="py-4">
                                                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200">
                                                                    Ativo
                                                                </span>
                                                            </td>
                                                            <td className="py-4">
                                                                <div className="flex items-center gap-2">
                                                                    <a
                                                                        href={`mailto:${teacher.email}`}
                                                                        className="text-gray-600 hover:text-blue-600 transition-colors p-2 hover:bg-blue-50 rounded-lg"
                                                                        title="Enviar email"
                                                                    >
                                                                        <MdEmail size={18} />
                                                                    </a>
                                                                    <a
                                                                        href={`tel:${teacher.phone}`}
                                                                        className="text-gray-600 hover:text-blue-600 transition-colors p-2 hover:bg-blue-50 rounded-lg"
                                                                        title="Ligar"
                                                                    >
                                                                        <MdPhone size={18} />
                                                                    </a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Teacher Details Sidebar */}
                        {selectedTeacher && (
                            <div className="lg:col-span-1 overflow-hidden">
                                <div className="bg-white rounded-xl border border-gray-200 shadow-sm h-full overflow-hidden">
                                    <div className="p-6 border-b border-gray-200">
                                        <div className="flex items-center justify-between">
                                            <h2 className="text-lg font-semibold text-gray-800">Detalhes do Professor</h2>
                                            <button
                                                onClick={() => setSelectedTeacher(null)}
                                                className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    </div>

                                    <div className="overflow-y-auto h-[calc(100%-80px)] p-6">
                                        {/* Teacher Header */}
                                        <div className="flex flex-col items-center mb-6">
                                            <div className="w-24 h-24 bg-linear-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-4">
                                                {getInitials(selectedTeacher.full_name)}
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-1">{selectedTeacher.full_name}</h3>
                                            <div className="flex items-center gap-2 mb-4">
                                                <span className="text-base font-semibold text-gray-600">{selectedTeacher.specialty}</span>
                                                <span className="text-gray-400">•</span>
                                                <div className="flex items-center gap-1">
                                                    <FaStar className="text-yellow-500" size={14} />
                                                    <span className="font-semibold">{selectedTeacher.rating}</span>
                                                </div>
                                            </div>

                                            <span className="px-4 py-1.5 rounded-full text-sm font-medium mb-6 bg-green-100 text-green-700 border border-green-200">
                                                Ativo
                                            </span>
                                        </div>

                                        {/* Contact Information */}
                                        <div className="space-y-4 mb-8">
                                            <h4 className="text-base font-semibold text-gray-800 flex items-center gap-2 mb-3">
                                                <MdEmail className="text-blue-500" />
                                                Contacto
                                            </h4>

                                            <div className="space-y-3">
                                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                                                    <TfiEmail className="text-gray-600" size={18} />
                                                    <div>
                                                        <p className="text-xs text-gray-600 font-medium">Email</p>
                                                        <a
                                                            href={`mailto:${selectedTeacher.email}`}
                                                            className="text-gray-800 hover:text-blue-600 transition-colors font-medium text-sm"
                                                        >
                                                            {selectedTeacher.email}
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                                                    <MdPhone className="text-gray-600" size={18} />
                                                    <div>
                                                        <p className="text-xs text-gray-600 font-medium">Telefone</p>
                                                        <a
                                                            href={`tel:${selectedTeacher.phone}`}
                                                            className="text-gray-800 hover:text-blue-600 transition-colors font-medium text-sm"
                                                        >
                                                            {selectedTeacher.phone}
                                                        </a>
                                                    </div>
                                                </div>

                                                {selectedTeacher.office_hours && (
                                                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                                                        <BiTimeFive className="text-gray-600" size={18} />
                                                        <div>
                                                            <p className="text-xs text-gray-600 font-medium">Horário de Atendimento</p>
                                                            <p className="text-gray-800 font-medium text-sm">{selectedTeacher.office_hours}</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Subjects */}
                                        {selectedTeacher.subjects && (
                                            <div className="mb-8">
                                                <h4 className="text-base font-semibold text-gray-800 flex items-center gap-2 mb-3">
                                                    <MdSubject className="text-blue-500" />
                                                    Disciplinas Lecionadas
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {selectedTeacher.subjects.map((subject, index) => (
                                                        <span
                                                            key={index}
                                                            className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium border border-blue-200"
                                                        >
                                                            {subject}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Additional Information */}
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                                                <BsFillPersonBadgeFill className="text-gray-600" size={16} />
                                                <div>
                                                    <p className="text-xs text-gray-600 font-medium">Número de Funcionário</p>
                                                    <p className="text-gray-800 font-medium text-sm">{selectedTeacher.employee_number}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                                                <MdDateRange className="text-gray-600" size={18} />
                                                <div>
                                                    <p className="text-xs text-gray-600 font-medium">Data de Admissão</p>
                                                    <p className="text-gray-800 font-medium text-sm">{formatDate(selectedTeacher.admission_date)}</p>
                                                    <p className="text-xs text-gray-500 mt-1">
                                                        ({selectedTeacher.experience_years} anos de experiência)
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                                                <MdWork className="text-gray-600" size={18} />
                                                <div>
                                                    <p className="text-xs text-gray-600 font-medium">Formação Académica</p>
                                                    <p className="text-gray-800 font-medium text-sm">{selectedTeacher.education}</p>
                                                </div>
                                            </div>

                                            {selectedTeacher.department && (
                                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                                                    <HiOutlineAcademicCap className="text-gray-600" size={18} />
                                                    <div>
                                                        <p className="text-xs text-gray-600 font-medium">Departamento</p>
                                                        <p className="text-gray-800 font-medium text-sm">{selectedTeacher.department}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="mt-8 flex gap-3">
                                            <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm">
                                                <MdMessage size={18} />
                                                Enviar Mensagem
                                            </button>
                                            <button className="flex-1 border border-blue-600 text-blue-600 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 text-sm">
                                                <MdSchedule size={18} />
                                                Agendar Reunião
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </main>

                {/* Footer */}
                <footer className="p-4 border-t border-gray-200 bg-white">
                    <div className="text-center">
                        <p className="text-xs text-gray-600">
                            Sistema Académico • Professores • Última atualização: Hoje às {new Date().getHours()}:{new Date().getMinutes().toString().padStart(2, '0')}
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default TeachersPage;