import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  MessageSquare, 
  ShieldCheck,
  Building2,
  Users
} from 'lucide-react';
import { ContactFormData } from '../types';
import imgContactBg from '../assets/images/bg_boardroom_1786750521886.jpg';

interface ContactSectionProps {
  preselectedSubsystem?: string;
  simulationNote?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  preselectedSubsystem = '', 
  simulationNote = '' 
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    employeesCount: '51-200',
    role: 'Diretor / CEO',
    interestedSubsystem: preselectedSubsystem || 'Todos os Subsistemas (Estruturação Completa)',
    message: '',
    urgency: 'Imediata (Próximos 30 dias)'
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedSubsystem) {
      setFormData(prev => ({
        ...prev,
        interestedSubsystem: preselectedSubsystem
      }));
    }
  }, [preselectedSubsystem]);

  useEffect(() => {
    if (simulationNote) {
      setFormData(prev => ({
        ...prev,
        message: prev.message ? `${prev.message}\n\n[Simulação de Turnover]: ${simulationNote}` : `[Simulação de Turnover]: ${simulationNote}`
      }));
    }
  }, [simulationNote]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        _subject: `[Hunter RH] Nova Solicitação de Diagnóstico - ${formData.companyName || formData.name}`,
        _template: 'table',
        _captcha: 'false',
        'Nome Completo': formData.name,
        'Empresa': formData.companyName,
        'E-mail Corporativo': formData.email,
        'Telefone / WhatsApp': formData.phone,
        'Nº de Colaboradores': formData.employeesCount,
        'Cargo na Empresa': formData.role,
        'Subsistema Prioritário': formData.interestedSubsystem,
        'Urgência': formData.urgency,
        'Mensagem / Detalhes': formData.message || 'Nenhum detalhe adicional informado',
        'Enviado em': new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
      };

      await fetch('https://formsubmit.co/ajax/nacionalestagios1@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });
    } catch (error) {
      console.error('Erro ao despachar formulário para o e-mail:', error);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Olá, Hunter Recursos Humanos Inteligentes!\n\n` +
      `Gostaria de solicitar um diagnóstico corporativo:\n` +
      `• Nome: ${formData.name || 'Não informado'}\n` +
      `• Empresa: ${formData.companyName || 'Não informada'}\n` +
      `• Quadro: ${formData.employeesCount} colaboradores\n` +
      `• Subsistema de Interesse: ${formData.interestedSubsystem}\n` +
      `• Mensagem: ${formData.message || 'Gostaria de conhecer os planos e metodologia por competência.'}`
    );
    // WhatsApp direct link with formatted message
    window.open(`https://wa.me/5531996290458?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-[#0c1015] relative overflow-hidden">
      {/* Background Image with dark luxury overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={imgContactBg}
          alt="Executive Boardroom Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-20 brightness-75 contrast-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c1015]/90 via-[#0c1015]/80 to-[#0c1015]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#0c1015_80%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D3AF37]/10 border border-[#D3AF37] text-[#D3AF37] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D3AF37]" />
            <span>Fale com a Hunter</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Solicite um Diagnóstico ou Proposta{' '}
            <span className="text-gold-gradient">para sua Empresa</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Descubra como estruturar seu RH por competência e estancar custos com turnover. Nossos especialistas entram em contato em até 2 horas úteis.
          </p>
        </div>

        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Contact Cards & Differentiators */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0e141c] border-2 border-[#D3AF37] p-6 sm:p-7 shadow-xl space-y-6">
              
              <h3 className="text-xl font-bold text-white flex items-center gap-2 border-b border-[#D3AF37]/30 pb-3">
                <Building2 className="w-5 h-5 text-[#D3AF37]" />
                <span>Canais de Atendimento</span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5 text-xs sm:text-sm">
                  <div className="w-9 h-9 rounded-xl bg-[#D3AF37]/15 border border-[#D3AF37] flex items-center justify-center text-[#D3AF37] flex-shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block">WhatsApp Corporativo</span>
                    <button 
                      onClick={handleWhatsAppDirect}
                      className="font-bold text-[#D3AF37] hover:text-white transition-colors"
                    >
                      (31) 99629-0458 • Iniciar Conversa
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-xs sm:text-sm">
                  <div className="w-9 h-9 rounded-xl bg-[#D3AF37]/15 border border-[#D3AF37] flex items-center justify-center text-[#D3AF37] flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block">E-mail Comercial & Projetos</span>
                    <a href="mailto:contato@rhhunter.netlify.app" className="font-semibold text-white hover:text-[#D3AF37] transition-colors">
                      contato@rhhunter.netlify.app
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-xs sm:text-sm">
                  <div className="w-9 h-9 rounded-xl bg-[#D3AF37]/15 border border-[#D3AF37] flex items-center justify-center text-[#D3AF37] flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block">Sede & Atendimento</span>
                    <strong className="font-semibold text-white block">Hunter Recursos Humanos Inteligentes</strong>
                    <span className="text-xs text-slate-300 block">Rua Alvares Cabral, Nº 106, Sala 504 • Bairro Fabrício</span>
                    <span className="text-xs text-slate-400 block">Uberaba - MG • CEP: 38.065-240 • Atendimento Nacional</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-xs sm:text-sm">
                  <div className="w-9 h-9 rounded-xl bg-[#D3AF37]/15 border border-[#D3AF37] flex items-center justify-center text-[#D3AF37] flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block">Horário de Atendimento</span>
                    <strong className="font-semibold text-white">Segunda a Sexta, das 08h às 18h</strong>
                  </div>
                </div>
              </div>

              {/* Differentiator Pillars */}
              <div className="pt-4 border-t border-[#D3AF37]/30 space-y-2">
                <span className="text-xs font-bold text-[#D3AF37] uppercase tracking-wider block">
                  Compromisso Hunter:
                </span>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#D3AF37]" />
                  <span>Proposta técnica detalhada com escopo e prazos</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#D3AF37]" />
                  <span>Acordo de Confidencialidade (NDA) e LGPD</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#D3AF37]" />
                  <span>Garantia de reposição em Recrutamento por Competência</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Proposal Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0e141c] border-2 border-[#D3AF37] p-6 sm:p-9 shadow-2xl relative text-left">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-[#D3AF37]/30 pb-3 mb-4">
                    <h3 className="text-xl font-bold text-white">
                      Formulário de Diagnóstico & Proposta
                    </h3>
                    <p className="text-xs text-slate-400">
                      Preencha os dados abaixo para receber uma análise personalizada da Hunter RH.
                    </p>
                  </div>

                  {/* Inputs Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Nome */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-300">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Roberto Silva"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-[#D3AF37]/40 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#D3AF37] transition-colors"
                      />
                    </div>

                    {/* Empresa */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-300">
                        Nome da Empresa *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Grupo Alpha Indústria"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-[#D3AF37]/40 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#D3AF37] transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-300">
                        E-mail Corporativo *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="roberto@empresa.com.br"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-[#D3AF37]/40 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#D3AF37] transition-colors"
                      />
                    </div>

                    {/* Telefone / WhatsApp */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-300">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(11) 99999-9999"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-[#D3AF37]/40 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#D3AF37] transition-colors"
                      />
                    </div>

                    {/* Porte da Empresa */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-300">
                        Nº de Colaboradores
                      </label>
                      <select
                        value={formData.employeesCount}
                        onChange={(e) => setFormData({ ...formData, employeesCount: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-[#D3AF37]/40 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D3AF37] transition-colors"
                      >
                        <option value="Até 25">Até 25 colaboradores</option>
                        <option value="26-50">26 a 50 colaboradores</option>
                        <option value="51-200">51 a 200 colaboradores</option>
                        <option value="201-500">201 a 500 colaboradores</option>
                        <option value="Mais de 500">Mais de 500 colaboradores</option>
                      </select>
                    </div>

                    {/* Cargo */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-300">
                        Seu Cargo na Empresa
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-[#D3AF37]/40 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D3AF37] transition-colors"
                      >
                        <option value="Diretor / CEO / Sócio">Diretor / CEO / Sócio</option>
                        <option value="Gerente / Diretor de RH">Gerente / Diretor de RH</option>
                        <option value="Coordenador / BP de RH">Coordenador / BP de RH</option>
                        <option value="Gerente Operacional / Financeiro">Gerente Operacional / Financeiro</option>
                        <option value="Outro">Outro</option>
                      </select>
                    </div>

                  </div>

                  {/* Subsistema de Interesse */}
                  <div className="space-y-1 pt-1">
                    <label className="text-xs font-semibold text-slate-300">
                      Subsistema de RH Prioritário
                    </label>
                    <select
                      value={formData.interestedSubsystem}
                      onChange={(e) => setFormData({ ...formData, interestedSubsystem: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-[#D3AF37]/40 text-[#D3AF37] font-semibold text-xs sm:text-sm focus:outline-none focus:border-[#D3AF37] transition-colors"
                    >
                      <option value="Todos os Subsistemas (Estruturação Completa)">
                        🌟 Implantação Completa de Todos os Subsistemas
                      </option>
                      <option value="Recrutamento & Seleção por Competência">
                        01. Recrutamento & Seleção por Competência & Hunting
                      </option>
                      <option value="Pesquisa de Clima & Fit Cultural">
                        02. Pesquisa de Clima Organizacional & Fit Cultural
                      </option>
                      <option value="Plano de Cargos, Carreiras e Salários (PCCS)">
                        03. Plano de Cargos, Carreiras e Salários (PCCS)
                      </option>
                      <option value="Treinamento & Desenvolvimento (T&D)">
                        04. Treinamento & Desenvolvimento / Academia de Líderes
                      </option>
                      <option value="Testes de Desempenho & Avaliação 360°">
                        05. Testes de Desempenho & Avaliação 360° / Nine Box
                      </option>
                      <option value="Diagnóstico Organizacional Geral">
                        06. Diagnóstico & Consultoria de Estruturação Geral
                      </option>
                    </select>
                  </div>

                  {/* Mensagem / Contexto */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">
                      Desafio Atual ou Detalhes da Solicitação
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Conte um pouco sobre as principais dores da sua empresa (ex: alto turnover, cargos desatualizados, contratações difíceis)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-[#D3AF37]/40 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#D3AF37] transition-colors resize-none"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#B89324] to-[#967414] hover:from-[#C5A028] hover:to-[#A88318] border border-[#D3AF37] shadow-lg shadow-[#D3AF37]/20 transition-all flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span className="text-white">Enviando dados...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-white" />
                          <span className="text-white font-bold">Solicitar Proposta Técnica</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto py-3.5 px-5 rounded-xl font-semibold text-xs sm:text-sm text-[#D3AF37] bg-[#D3AF37]/10 hover:bg-[#D3AF37]/20 border border-[#D3AF37] transition-all flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4 text-[#D3AF37]" />
                      <span>Conversar no WhatsApp</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center pt-2">
                    🔒 Seus dados estão 100% seguros sob sigilo profissional e conformidade LGPD.
                  </p>
                </form>
              ) : (
                /* Success Message */
                <div className="p-8 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#D3AF37]/20 border-2 border-[#D3AF37] flex items-center justify-center text-[#D3AF37] mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-extrabold text-white">
                    Solicitação Recebida com Sucesso!
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Obrigado pelo contato, <strong>{formData.name}</strong>! Um consultor sênior da Hunter Recursos Humanos Inteligentes entrará em contato com a <strong>{formData.companyName}</strong> para apresentar a proposta técnica.
                  </p>

                  <div className="p-4 rounded-xl bg-slate-950 border border-[#D3AF37] text-xs text-[#D3AF37]">
                    ⚡ <strong>Tempo estimado de retorno:</strong> Menos de 2 horas úteis.
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row justify-center gap-3">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="px-5 py-2.5 rounded-xl text-xs font-bold text-black bg-[#D3AF37] hover:bg-[#E2C45E] border border-[#D3AF37] transition-all flex items-center justify-center gap-1.5"
                    >
                      <MessageSquare className="w-4 h-4 text-black" />
                      <span>Agilizar no WhatsApp Agora</span>
                    </button>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 border border-[#D3AF37]/40 transition-all"
                    >
                      Enviar Nova Mensagem
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
