import React from 'react';
import { HunterLogo } from './HunterLogo';
import { HunterLogoWatermark } from './HunterLogoWatermark';
import { 
  ShieldCheck, 
  Mail, 
  PhoneCall, 
  MapPin, 
  Linkedin, 
  Instagram, 
  ArrowUp,
  Award
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-[#070a0e] border-t-2 border-[#D3AF37] pt-16 pb-12 text-left relative overflow-hidden">
      {/* Background Hunter Logo Watermark */}
      <HunterLogoWatermark position="right" size="lg" opacity={0.04} showWordmark={false} />

      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#D3AF37]/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#D3AF37]/30">
          
          {/* Col 1: Brand & Slogan */}
          <div className="lg:col-span-4 space-y-4">
            <HunterLogo size="md" />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Especialistas em RH por Competência e implantação de todos os subsistemas de Recursos Humanos. Transformamos a gestão de pessoas na maior alavanca de lucro, produtividade e retenção de talentos da sua organização.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-[#D3AF37] font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#D3AF37]" />
              <span>Conformidade com a LGPD e Segurança Jurídica</span>
            </div>
          </div>

          {/* Col 2: Subsistemas */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#D3AF37] uppercase tracking-wider border-b border-[#D3AF37]/30 pb-2">
              Subsistemas de RH
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#subsistemas" className="hover:text-[#D3AF37] transition-colors">
                  Recrutamento & Seleção por Competência
                </a>
              </li>
              <li>
                <a href="#subsistemas" className="hover:text-[#D3AF37] transition-colors">
                  Pesquisa de Clima & Fit Cultural
                </a>
              </li>
              <li>
                <a href="#subsistemas" className="hover:text-[#D3AF37] transition-colors">
                  Plano de Cargos, Carreiras e Salários (PCCS)
                </a>
              </li>
              <li>
                <a href="#subsistemas" className="hover:text-[#D3AF37] transition-colors">
                  Treinamento & Desenvolvimento (T&D)
                </a>
              </li>
              <li>
                <a href="#subsistemas" className="hover:text-[#D3AF37] transition-colors">
                  Testes de Desempenho & Avaliação 360°
                </a>
              </li>
              <li>
                <a href="#subsistemas" className="hover:text-[#D3AF37] transition-colors">
                  Diagnóstico Organizacional Geral
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Ferramentas & Metodologia */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#D3AF37] uppercase tracking-wider border-b border-[#D3AF37]/30 pb-2">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#subsistemas" className="hover:text-[#D3AF37] transition-colors">
                  Subsistemas de RH
                </a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-[#D3AF37] transition-colors">
                  Calculadora de Turnover
                </a>
              </li>
              <li>
                <a href="#diagnostico" className="hover:text-[#D3AF37] transition-colors">
                  Diagnóstico de Maturidade
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-[#D3AF37] transition-colors">
                  Metodologia em 4 Fases
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#D3AF37] transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contato & Atendimento */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#D3AF37] uppercase tracking-wider border-b border-[#D3AF37]/30 pb-2">
              Contato & Sede
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <a 
                href="https://wa.me/5531996290458?text=Ol%C3%A1%21+Gostaria+de+falar+com+a+Hunter+Recursos+Humanos+Inteligentes." 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#D3AF37] transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#D3AF37] flex-shrink-0" />
                <span>(31) 99629-0458</span>
              </a>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D3AF37] flex-shrink-0" />
                <span>contato@hunterrh.com.br</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D3AF37] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Rua Alvares Cabral, Nº 106, Sala 504, Bairro Fabrício, Uberaba - MG, CEP: 38.065-240
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-[#D3AF37] hover:text-[#F3E5AB] bg-slate-950 border border-[#D3AF37] hover:bg-[#D3AF37]/15 shadow-sm shadow-[#D3AF37]/10 transition-all"
              >
                Solicitar Consultoria
              </a>
            </div>
          </div>

        </div>

        {/* Corporate Legal Identification Box */}
        <div className="py-6 border-b border-[#D3AF37]/20 text-xs text-slate-400">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-950/60 border border-[#D3AF37]/30">
            <div>
              <span className="text-[10px] font-bold text-[#D3AF37] uppercase tracking-wider block">Agente / Razão Social</span>
              <span className="text-slate-200 font-medium">Hunter Recursos Humanos Inteligentes</span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#D3AF37] uppercase tracking-wider block">CNPJ</span>
              <span className="text-slate-200 font-medium font-['Space_Grotesk']">54.013.036/0001-39</span>
            </div>
            <div className="lg:col-span-2">
              <span className="text-[10px] font-bold text-[#D3AF37] uppercase tracking-wider block">Endereço Comercial</span>
              <span className="text-slate-200">
                Rua Alvares Cabral, Nº 106, Sala 504 • Bairro Fabrício • Uberaba - Minas Gerais • CEP: 38.065-240
              </span>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Hunter Recursos Humanos Inteligentes • CNPJ 54.013.036/0001-39. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#D3AF37]">Especialistas em RH por Competência</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-[#D3AF37]/40 hover:border-[#D3AF37] text-[#D3AF37] hover:text-white transition-all flex items-center gap-1 text-xs"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#D3AF37]" />
              <span>Topo</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
