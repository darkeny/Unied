import { NavLink } from 'react-router-dom';

interface HeroProps {
  language: 'PT' | 'EN';
}

export function Hero({ language }: HeroProps) {
  const texts = {
    PT: {
      title: 'O Futuro da Educação Começa Aqui',
      subtitle: 'Transforme sua escola com o sistema de gestão mais completo e intuitivo. Gerencie matrículas, aulas, finanças e comunicação em um só lugar.',
      ctaPrimary: 'Matricular Agora',
      ctaSecondary: 'Agendar Demonstração',
      features: [
        { icon: '👨‍🎓', title: 'Matrículas Online', desc: 'Processo digital simplificado' },
        { icon: '📚', title: 'Aulas Digitais', desc: 'Material interativo online' },
        { icon: '👨‍👩‍👧‍👦', title: 'Portal dos Pais', desc: 'Acompanhamento em tempo real' },
        { icon: '💼', title: 'Gestão Simplificada', desc: 'Tudo organizado em um painel' }
      ],
      stats: [
        { number: '500+', label: 'Escolas Parceiras' },
        { number: '50k+', label: 'Alunos Ativos' },
        { number: '98%', label: 'Satisfação' },
        { number: '24/7', label: 'Suporte' }
      ]
    },
    EN: {
      title: 'The Future of Education Starts Here',
      subtitle: 'Transform your school with the most complete and intuitive management system. Manage enrollments, classes, finances and communication in one place.',
      ctaPrimary: 'Enroll Now',
      ctaSecondary: 'Schedule Demo',
      features: [
        { icon: '👨‍🎓', title: 'Online Enrollment', desc: 'Simplified digital process' },
        { icon: '📚', title: 'Digital Classes', desc: 'Interactive online material' },
        { icon: '👨‍👩‍👧‍👦', title: 'Parents Portal', desc: 'Real-time monitoring' },
        { icon: '💼', title: 'Simplified Management', desc: 'Everything organized in one dashboard' }
      ],
      stats: [
        { number: '500+', label: 'Partner Schools' },
        { number: '50k+', label: 'Active Students' },
        { number: '98%', label: 'Satisfaction' },
        { number: '24/7', label: 'Support' }
      ]
    }
  };

  const currentTexts = texts[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50/20">
      <div className="relative overflow-hidden">
        {/* Main Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16  lg:pb-24">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="relative z-10">
              <div className="mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                  <span className="text-lg">🏫</span>
                  {language === 'PT' ? 'Sistema Educacional Inteligente' : 'Smart Educational System'}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="block">{currentTexts.title.split(' ').slice(0, 3).join(' ')}</span>
                <span className="block text-blue-600">{currentTexts.title.split(' ').slice(3).join(' ')}</span>
              </h1>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                {currentTexts.subtitle}
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <NavLink
                  to="/signup"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-600 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="text-xl">👨‍🎓</span>
                  <span>{currentTexts.ctaPrimary}</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </NavLink>

                <NavLink
                  to="/demo"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-blue-600 bg-white border-2 border-blue-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="text-xl">🎬</span>
                  <span>{currentTexts.ctaSecondary}</span>
                </NavLink>
              </div>

              {/* Features */}
              <div className="mt-12 grid grid-cols-2 gap-4">
                {currentTexts.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                    <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
                      <span className="text-xl">{feature.icon}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{feature.title}</div>
                      <div className="text-xs text-gray-500">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="mt-12 lg:mt-0 relative">
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                {/* Main image container */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-200 rounded-full translate-y-20 -translate-x-20 opacity-50"></div>

                  {/* Student photos in a collage style */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80">
                    {/* Main student photo */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-56 h-56 rounded-xl overflow-hidden shadow-2xl z-10">
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-6xl mb-2">👨‍🎓</div>
                          <div className="text-blue-600 font-semibold text-sm">{language === 'PT' ? 'Estudante' : 'Student'}</div>
                        </div>
                      </div>
                    </div>

                    {/* Teacher photo */}
                    <div className="absolute top-4 right-4 w-32 h-32 rounded-lg overflow-hidden shadow-lg z-20">
                      <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl mb-1">👩‍🏫</div>
                          <div className="text-blue-600 font-medium text-xs">{language === 'PT' ? 'Professora' : 'Teacher'}</div>
                        </div>
                      </div>
                    </div>

                    {/* Parent photo */}
                    <div className="absolute bottom-8 left-4 w-32 h-32 rounded-lg overflow-hidden shadow-lg z-20">
                      <div className="w-full h-full bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl mb-1">👨‍👩‍👧‍👦</div>
                          <div className="text-green-600 font-medium text-xs">{language === 'PT' ? 'Família' : 'Family'}</div>
                        </div>
                      </div>
                    </div>

                    {/* Books/learning */}
                    <div className="absolute bottom-4 right-8 w-28 h-28 rounded-lg overflow-hidden shadow-lg z-20">
                      <div className="w-full h-full bg-linear-to-br from-yellow-50 to-yellow-100 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl mb-1">📚</div>
                          <div className="text-yellow-600 font-medium text-xs">{language === 'PT' ? 'Aprendizado' : 'Learning'}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats overlay on image */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-11/12">
                <div className="grid grid-cols-4 gap-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-gray-200">
                  {currentTexts.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                      <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}