import { useState } from 'react';
import { MapPin, Phone, Clock, Dumbbell, Users, Activity, ChevronRight, Instagram, Facebook, Menu, X } from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/95 text-white z-50 border-b border-zinc-800 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              {/* Logo representation */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center border-2 border-[#B92B27]">
                <span className="text-[#B92B27] font-display font-black text-lg sm:text-xl tracking-tighter">A</span>
                <span className="text-white font-display font-black text-lg sm:text-xl tracking-tighter">J</span>
              </div>
              <span className="font-display font-black text-lg sm:text-xl tracking-wider uppercase">AJ Fitness</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="hover:text-[#B92B27] px-3 py-2 rounded-md text-sm font-medium transition-colors">Início</a>
                <a href="#services" className="hover:text-[#B92B27] px-3 py-2 rounded-md text-sm font-medium transition-colors">Serviços</a>
                <a href="#contact" className="hover:text-[#B92B27] px-3 py-2 rounded-md text-sm font-medium transition-colors">Contacto</a>
              </div>
            </div>
            <div className="hidden md:block">
              <a href="#contact" className="bg-[#B92B27] hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-bold transition-colors">
                Junte-se a Nós
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMenu} 
                className="text-zinc-300 hover:text-white focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 border-b border-zinc-800 backdrop-blur-md absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-2 shadow-2xl">
              <a href="#home" onClick={closeMenu} className="block hover:text-[#B92B27] hover:bg-zinc-900 px-3 py-3 rounded-md text-base font-medium transition-colors">Início</a>
              <a href="#services" onClick={closeMenu} className="block hover:text-[#B92B27] hover:bg-zinc-900 px-3 py-3 rounded-md text-base font-medium transition-colors">Serviços</a>
              <a href="#contact" onClick={closeMenu} className="block hover:text-[#B92B27] hover:bg-zinc-900 px-3 py-3 rounded-md text-base font-medium transition-colors">Contacto</a>
              <div className="pt-4">
                <a href="#contact" onClick={closeMenu} className="block w-full text-center bg-[#B92B27] hover:bg-red-700 text-white px-6 py-3.5 rounded-full font-bold transition-colors">
                  Junte-se a Nós
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-28 pb-20 md:pt-20 md:pb-32 flex items-center min-h-[100svh] md:min-h-[90vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            alt="Gym interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/90 via-black/70 to-black/40 md:to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 md:mt-0">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-white leading-tight mb-6 uppercase">
              Transforme o seu <span className="text-[#B92B27]">Corpo</span>,<br/> Eleve a sua <span className="text-[#B92B27]">Mente</span>.
            </h1>
            <p className="text-lg sm:text-xl text-zinc-300 mb-10 max-w-lg">
              A melhor estrutura de Viana para você alcançar seus objetivos. Equipamentos modernos, ambiente climatizado e profissionais qualificados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-[#B92B27] hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg text-center transition-colors flex items-center justify-center gap-2">
                Começar Agora <ChevronRight size={20} />
              </a>
              <a href="#services" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg text-center transition-colors">
                Nossos Serviços
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Services Section */}
      <section id="services" className="py-20 md:py-24 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[#B92B27] font-bold tracking-wider uppercase text-xs sm:text-sm mb-2">Por que escolher a AJ Fitness?</h2>
            <h3 className="text-3xl md:text-4xl font-display font-black uppercase">Tudo o que você precisa</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-zinc-900 p-6 md:p-8 rounded-2xl border border-zinc-800 hover:border-[#B92B27] transition-colors group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#B92B27]/10 text-[#B92B27] rounded-xl flex items-center justify-center mb-5 md:mb-6 group-hover:bg-[#B92B27] group-hover:text-white transition-colors">
                <Dumbbell size={28} className="md:w-8 md:h-8" />
              </div>
              <h4 className="text-lg md:text-xl font-display font-bold mb-3 uppercase">Musculação</h4>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                Equipamentos de última geração para treinos de força e hipertrofia, adequados para todos os níveis.
              </p>
            </div>
            
            <div className="bg-zinc-900 p-6 md:p-8 rounded-2xl border border-zinc-800 hover:border-[#B92B27] transition-colors group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#B92B27]/10 text-[#B92B27] rounded-xl flex items-center justify-center mb-5 md:mb-6 group-hover:bg-[#B92B27] group-hover:text-white transition-colors">
                <Activity size={28} className="md:w-8 md:h-8" />
              </div>
              <h4 className="text-lg md:text-xl font-display font-bold mb-3 uppercase">Cardio</h4>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                Ampla área de cardio com esteiras, elípticos e bicicletas para melhorar seu condicionamento físico.
              </p>
            </div>
            
            <div className="bg-zinc-900 p-6 md:p-8 rounded-2xl border border-zinc-800 hover:border-[#B92B27] transition-colors group sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#B92B27]/10 text-[#B92B27] rounded-xl flex items-center justify-center mb-5 md:mb-6 group-hover:bg-[#B92B27] group-hover:text-white transition-colors">
                <Users size={28} className="md:w-8 md:h-8" />
              </div>
              <h4 className="text-lg md:text-xl font-display font-bold mb-3 uppercase">Acompanhamento</h4>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                Profissionais qualificados prontos para orientar e montar o treino ideal para o seu objetivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info / Contact Section */}
      <section id="contact" className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-[#B92B27] font-bold tracking-wider uppercase text-xs sm:text-sm mb-2">Visite-nos</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-black uppercase mb-8 text-zinc-900">Venha treinar<br/>com a gente</h3>
              
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-100 text-[#B92B27] rounded-full flex items-center justify-center shrink-0">
                    <MapPin size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base md:text-lg mb-1">Localização</h4>
                    <p className="text-sm md:text-base text-zinc-600">Condomínio Girassol<br/>Luanda, Viana (38MQ+F6)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-100 text-[#B92B27] rounded-full flex items-center justify-center shrink-0">
                    <Clock size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base md:text-lg mb-1">Horário de Funcionamento</h4>
                    <p className="text-sm md:text-base text-zinc-600">Aberto todos os dias<br/>Encerra às 21:00 (9 PM)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-100 text-[#B92B27] rounded-full flex items-center justify-center shrink-0">
                    <Phone size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base md:text-lg mb-1">Contacto</h4>
                    <p className="text-zinc-600 text-lg md:text-xl font-medium">924 010 504</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 h-[350px] sm:h-[400px] md:h-[500px] bg-zinc-200 rounded-3xl overflow-hidden relative shadow-2xl">
              {/* Placeholder for Map - using an image that looks like a map area for aesthetic */}
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
                alt="Map location" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center p-4">
                <div className="bg-white p-5 md:p-6 rounded-2xl shadow-xl w-full max-w-xs text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#B92B27] text-white rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <MapPin size={24} className="md:w-8 md:h-8" />
                  </div>
                  <h4 className="font-display font-black text-lg md:text-xl mb-1 md:mb-2 uppercase">AJ Fitness</h4>
                  <p className="text-xs md:text-sm text-zinc-600 mb-4">Condomínio Girassol, Viana</p>
                  <a href="https://maps.google.com/?q=Condomínio+Girassol,+Luanda,+Viana" target="_blank" rel="noreferrer" className="inline-block bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold w-full hover:bg-zinc-800 transition-colors">
                    Ver no Mapa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10 md:py-12 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border-2 border-[#B92B27]">
                <span className="text-[#B92B27] font-display font-black text-lg tracking-tighter">A</span>
                <span className="text-white font-display font-black text-lg tracking-tighter">J</span>
              </div>
              <span className="font-display font-black text-lg tracking-wider uppercase">AJ Fitness Gym</span>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-[#B92B27] transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-[#B92B27] transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-zinc-900 text-center md:text-left text-zinc-500 text-xs sm:text-sm flex flex-col md:flex-row justify-between gap-2">
            <p>&copy; {new Date().getFullYear()} Ginásio AJ Fitness GYM. Todos os direitos reservados.</p>
            <p>Luanda, Angola</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
