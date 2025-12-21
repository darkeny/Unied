// components/Dashboard/StudentBasicDashboard.tsx
import React from 'react';
import {
  CiBellOn,
  CiEdit,
  CiUser,
  CiCalendar,
  CiRead
} from "react-icons/ci";
import { IoDocumentText } from "react-icons/io5";
import { BsCheckCircle } from "react-icons/bs";

interface StudentBasicDashboardProps {
  studentName?: string;
  studentNumber?: string;
  language?: 'PT' | 'EN';
}

export const StudentBasicDashboard: React.FC<StudentBasicDashboardProps> = ({
  studentName = "Maria Silva",
  studentNumber = "AL2023002"}) => {
  // Dados simulados para o dashboard básico
  const dashboardData = {
    // Inscrição Realizada (combinada com Inscrições)
    enrollment: {
      status: 'Concluída',
      date: '15/09/2024',
      academicYear: '2024/2025',
      validity: '31/08/2025',
      code: 'INSC-2024-AL2023002',
      courses: [
        { name: '11ª Classe - Humanidades', status: 'ativo' },
        { name: 'Curso de Inglês Básico', status: 'ativo' }
      ]
    },

    // Notificações
    notifications: {
      total: 8,
      unread: 3,
      recent: [
        { id: 1, title: 'Pagamento confirmado', time: 'Hoje, 09:30', isRead: true },
        { id: 2, title: 'Reunião de pais marcada', time: 'Ontem, 16:45', isRead: false },
        { id: 3, title: 'Material escolar disponível', time: '05/10, 14:20', isRead: false },
      ]
    },

    // Regulamento
    regulations: {
      accepted: true,
      acceptanceDate: '10/09/2024',
      document: 'Regulamento Interno 2024/2025',
      lastUpdate: '01/09/2024',
      version: 'v3.1'
    },

    // Matrículas
    registrations: {
      main: '12ª Classe - Turma A',
      period: 'Anual 2025/2026',
      subjects: ['Português', 'Matemática', 'História', 'Geografia', 'Inglês', 'Filosofia'],
      status: 'Regular',
      lastRenewal: '05/09/2024'
    }
  };

  // Função para obter a saudação
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Bom dia';
    if (hour < 18) return 'Boa tarde';
    return 'Boa noite';
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100/50 p-4 md:p-6">
      {/* Cabeçalho com background arredondado */}
      <header className="mb-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/70 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-linear-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center border border-blue-200">
                  <CiUser className="text-blue-600" size={24} />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
                    {getGreeting()}, <span className="text-blue-700">{studentName}</span>
                  </h1>
                  <p className="text-gray-600 mt-1">
                    Nº de Estudante: <span className="font-medium text-gray-700 bg-blue-50 px-2 py-1 rounded">{studentNumber}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-br from-gray-50 to-gray-100/50 rounded-lg p-4 border border-gray-300/50">
              <div className="flex items-center space-x-3">
                <CiCalendar className="text-gray-700" size={20} />
                <div className="text-right">
                  <span className="text-sm text-gray-700 font-medium">
                    {new Date().toLocaleDateString('pt-PT', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">
                    Último acesso: Hoje, 09:42
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Resumo Status Geral - Versão mais viva */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/70 p-6 shadow-sm mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">Visão Geral</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Inscrição */}
          <div className="bg-linear-to-br from-blue-50/80 to-white rounded-xl p-4 border border-blue-100/50 shadow-sm hover:shadow transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-linear-to-br from-blue-100 to-white rounded-xl mb-3 border border-blue-200/30">
              <CiEdit className="text-blue-600" size={20} />
            </div>
            <p className="text-sm text-gray-700 mb-2 font-medium">Inscrição</p>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-linear-to-r from-green-50 to-green-100/50 text-green-700 border border-green-200">
              <BsCheckCircle className="mr-1.5" size={12} />
              Concluída
            </div>
          </div>

          {/* Notificações */}
          <div className="bg-linear-to-br from-amber-50/80 to-white rounded-xl p-4 border border-amber-100/50 shadow-sm hover:shadow transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-linear-to-br from-amber-100 to-white rounded-xl mb-3 border border-amber-200/30 relative">
              <CiBellOn className="text-amber-600" size={20} />
              {dashboardData.notifications.unread > 0 && (
                <span className="absolute -top-1 -right-1 bg-linear-to-r from-blue-500 to-blue-600 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center border-2 border-white shadow-sm">
                  {dashboardData.notifications.unread}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-700 mb-1 font-medium">Notificações</p>
            <div className="flex items-center space-x-1">
              <span className="text-xl font-bold text-gray-900">{dashboardData.notifications.total}</span>
              <span className="text-xs text-gray-600">total</span>
            </div>
          </div>

          {/* Regulamento */}
          <div className="bg-linear-to-br from-purple-50/80 to-white rounded-xl p-4 border border-purple-100/50 shadow-sm hover:shadow transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-linear-to-br from-purple-100 to-white rounded-xl mb-3 border border-purple-200/30">
              <IoDocumentText className="text-purple-600" size={20} />
            </div>
            <p className="text-sm text-gray-700 mb-2 font-medium">Regulamento</p>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-linear-to-r from-green-50 to-green-100/50 text-green-700 border border-green-200">
              Aceite
            </div>
          </div>

          {/* Matrículas */}
          <div className="bg-linear-to-br from-indigo-50/80 to-white rounded-xl p-4 border border-indigo-100/50 shadow-sm hover:shadow transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-linear-to-br from-indigo-100 to-white rounded-xl mb-3 border border-indigo-200/30">
              <CiUser className="text-indigo-600" size={20} />
            </div>
            <p className="text-sm text-gray-700 mb-2 font-medium">Matrículas</p>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-linear-to-r from-blue-50 to-blue-100/50 text-blue-700 border border-blue-200">
              Regular
            </div>
          </div>
        </div>
      </div>

      {/* Grid Principal - 4 Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">


        {/* Card 2: Notificações */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200/70 p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-linear-to-br from-amber-50 to-amber-100/30 rounded-lg border border-amber-200/50">
                <CiBellOn className="text-amber-600" size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Notificações</h3>
                <p className="text-sm text-gray-600 mt-1">Comunicações importantes</p>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center">
                <span className="text-xl font-bold text-gray-900 mr-2">{dashboardData.notifications.total}</span>
                {dashboardData.notifications.unread > 0 && (
                  <span className="bg-linear-to-r from-blue-500 to-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                    {dashboardData.notifications.unread} nova{dashboardData.notifications.unread !== 1 ? 's' : ''}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-3 mb-6 max-h-48 overflow-y-auto pr-2">
            {dashboardData.notifications.recent.map((notification) => (
              <div
                key={notification.id}
                className={`flex items-start justify-between p-3 rounded-lg border ${!notification.isRead ? 'bg-linear-to-r from-blue-50/80 to-blue-100/30 border-blue-200/60' : 'bg-linear-to-br from-gray-50/80 to-white border-gray-200/60'}`}
              >
                <div className="flex-1">
                  <div className="flex items-start">
                    <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${!notification.isRead ? 'bg-blue-500 animate-pulse' : 'bg-gray-400'}`}></div>
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${!notification.isRead ? 'text-gray-800' : 'text-gray-700'}`}>
                        {notification.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                    {!notification.isRead && (
                      <CiRead className="text-blue-500 mt-1 ml-2" size={16} />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-800 hover:bg-gray-50/80 py-3 rounded-lg border border-gray-300/70 transition-colors bg-linear-to-b from-white to-gray-50/50">
            Ver todas as notificações ({dashboardData.notifications.total})
          </button>
        </div>


        {/* Card 4: Matrículas */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200/70 p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-linear-to-br from-indigo-50 to-indigo-100/30 rounded-lg border border-indigo-200/50">
                <CiUser className="text-indigo-600" size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Matrículas</h3>
                <p className="text-sm text-gray-600 mt-1">Disciplinas matriculadas</p>
              </div>
            </div>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-linear-to-r from-blue-50 to-blue-100/50 text-blue-700 border border-blue-200">
              {dashboardData.registrations.status}
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="bg-linear-to-br from-gray-50 to-white rounded-lg p-3 border border-gray-200/60">
              <p className="text-xs text-gray-600 mb-1 font-medium">Curso Principal</p>
              <p className="text-sm text-gray-800">{dashboardData.registrations.main}</p>
            </div>

            <div className="bg-linear-to-br from-gray-50 to-white rounded-lg p-3 border border-gray-200/60">
              <p className="text-xs text-gray-600 mb-2 font-medium">Disciplinas Matriculadas</p>
              <div className="flex flex-wrap gap-2">
                {dashboardData.registrations.subjects.slice(0, 6).map((subject, index) => (
                  <span
                    key={index}
                    className="inline-block bg-white text-gray-700 text-xs font-medium px-3 py-1.5 rounded-lg border border-gray-300/70 hover:border-blue-300/70 hover:text-blue-700 transition-colors"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center">
                <CiCalendar className="mr-2" />
                <span>Período: {dashboardData.registrations.period}</span>
              </div>
              <div className="text-xs font-medium text-blue-600 bg-blue-50/50 px-2 py-1 rounded">
                {dashboardData.registrations.subjects.length} disciplinas
              </div>
            </div>
          </div>

          <button className="w-full flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-800 hover:bg-gray-50/80 py-3 rounded-lg border border-gray-300/70 transition-colors bg-linear-to-b from-white to-gray-50/50">
            Ver detalhes da matrícula
          </button>
        </div>
      </div>

      {/* Rodapé Informativo */}
      <div className="mt-8 text-center">
        <p className="text-xs text-gray-600">
          Sistema Académico • Última atualização: Hoje às 09:42
        </p>
      </div>
    </div>
  );
};

export default StudentBasicDashboard;