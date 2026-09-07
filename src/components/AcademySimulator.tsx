import React, { useState, useMemo } from 'react';
import {
  GraduationCap,
  Code,
  Laptop,
  Cpu,
  Globe,
  TrendingUp,
  PackageCheck,
  CheckCircle,
  MessageSquare,
  Users,
  Clock,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/techLabData';
import { saveEnrollment } from '../services/storageService';

interface AcademySimulatorProps {
  onBackToHome?: () => void;
}

export const AcademySimulator: React.FC<AcademySimulatorProps> = ({ onBackToHome }) => {
  const courses = [
    {
      id: 'dev-web',
      name: 'Desenvolvimento Web Fullstack',
      icon: Globe,
      desc: 'HTML, CSS, JavaScript, React, Tailwind e construção de websites reais.',
      basePriceKz: 45000,
      durationWeeks: 8,
    },
    {
      id: 'programacao',
      name: 'Lógica & Programação Moderna',
      icon: Code,
      desc: 'Algoritmos, estruturas de dados, Python e resolução de problemas.',
      basePriceKz: 40000,
      durationWeeks: 6,
    },
    {
      id: 'informatica',
      name: 'Informática Profissional & Produtividade',
      icon: Laptop,
      desc: 'Windows, Office avançado, nuvem, segurança e produtividade para trabalho.',
      basePriceKz: 30000,
      durationWeeks: 4,
    },
    {
      id: 'eletronica',
      name: 'Eletrónica Prática & Circuitos',
      icon: Cpu,
      desc: 'Medição com multímetro, diagnóstico de placas, solda e componentes.',
      basePriceKz: 55000,
      durationWeeks: 8,
    },
    {
      id: 'importacao',
      name: 'Importação & Logística de Tecnologia',
      icon: PackageCheck,
      desc: 'Como comprar fornecedores globais, fretes, alfândega e precificação em Angola.',
      basePriceKz: 35000,
      durationWeeks: 4,
    },
    {
      id: 'marketing',
      name: 'Marketing Digital & Tráfego Pago',
      icon: TrendingUp,
      desc: 'Anúncios no Meta/Google, landing pages, funis de WhatsApp e conversão.',
      basePriceKz: 40000,
      durationWeeks: 5,
    },
  ];

  const [selectedCourseId, setSelectedCourseId] = useState<string>('dev-web');
  const [modality, setModality] = useState<'online' | 'presencial' | 'hibrido'>('presencial');
  const [level, setLevel] = useState<'iniciante' | 'intermedio' | 'avancado'>('iniciante');
  const [participants, setParticipants] = useState<number>(1);

  // Student registration info
  const [studentName, setStudentName] = useState<string>('');
  const [studentPhone, setStudentPhone] = useState<string>('');
  const [studentEmail, setStudentEmail] = useState<string>('');
  const [isEnrolled, setIsEnrolled] = useState<boolean>(false);
  const [enrolledRef, setEnrolledRef] = useState<string>('');

  const selectedCourse = useMemo(() => {
    return courses.find((c) => c.id === selectedCourseId) || courses[0];
  }, [selectedCourseId]);

  // Calculation logic (Section 22)
  const calculation = useMemo(() => {
    let price = selectedCourse.basePriceKz;

    // Modality multiplier
    if (modality === 'presencial') price *= 1.15;
    if (modality === 'hibrido') price *= 1.25;

    // Level multiplier
    if (level === 'intermedio') price *= 1.2;
    if (level === 'avancado') price *= 1.4;

    // Participants scaling (group discount)
    let total = price * participants;
    if (participants >= 3) {
      total *= 0.85; // 15% discount for 3+ people
    }

    const formatted = new Intl.NumberFormat('pt-AO').format(Math.round(total)) + ' Kz';
    const perPerson = new Intl.NumberFormat('pt-AO').format(Math.round(total / participants)) + ' Kz';

    return {
      totalKz: Math.round(total),
      formatted,
      perPerson,
      hasDiscount: participants >= 3,
    };
  }, [selectedCourse, modality, level, participants]);

  const handleEnroll = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !studentPhone.trim()) {
      alert('Por favor, preencha o seu nome e WhatsApp.');
      return;
    }

    const ref = saveEnrollment({
      courseName: selectedCourse.name,
      modality: modality === 'online' ? 'Online' : modality === 'presencial' ? 'Presencial' : 'Híbrido',
      level: level === 'iniciante' ? 'Iniciante' : level === 'intermedio' ? 'Intermédio' : 'Avançado',
      participants,
      totalPriceFormatted: calculation.formatted,
      studentName,
      studentPhone,
      studentEmail,
    });

    setEnrolledRef(ref.id);
    setIsEnrolled(true);
  };

  const getWhatsAppEnrollUrl = () => {
    const text = `Olá Tech Lab Academy! Gostaria de confirmar a minha inscrição:

*Curso:* ${selectedCourse.name}
*Modalidade:* ${modality.toUpperCase()}
*Nível:* ${level.toUpperCase()}
*Participantes:* ${participants}
*Investimento Estimado:* ${calculation.formatted}
*Nome:* ${studentName}
*Telefone:* ${studentPhone}
${studentEmail ? `*Email:* ${studentEmail}` : ''}`;

    return `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Tech Lab Academy • Formação Prática de Alto Nível</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Simulador de Cursos & Capacitação
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 mt-2">
          Escolha o curso, a modalidade e o nível para calcular o investimento e garantir a sua vaga com suporte direto.
        </p>
      </div>

      {!isEnrolled ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Course Configuration */}
          <div className="lg:col-span-8 bg-[#0B132B] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
            
            {/* 1. Escolha do Curso (Section 22) */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase text-sky-400 tracking-wider mb-3">
                1. Selecione o Curso Desejado
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {courses.map((course) => {
                  const Icon = course.icon;
                  const isSelected = selectedCourseId === course.id;
                  return (
                    <button
                      key={course.id}
                      type="button"
                      onClick={() => setSelectedCourseId(course.id)}
                      className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex items-start gap-3 ${
                        isSelected
                          ? 'bg-sky-950/40 border-sky-400 ring-1 ring-sky-400'
                          : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${isSelected ? 'bg-sky-500 text-slate-950' : 'bg-slate-800 text-sky-400'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs sm:text-sm font-bold text-white block">{course.name}</span>
                        <span className="text-[11px] text-slate-400 mt-1 line-clamp-2 block">{course.desc}</span>
                        <span className="text-[10px] font-mono text-sky-400 mt-2 block">Duração: ~{course.durationWeeks} semanas</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Modalidade (Online, Presencial, Híbrido) */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase text-sky-400 tracking-wider mb-3">
                2. Modalidade de Aprendizagem
              </label>
              <div className="grid grid-cols-3 gap-3 text-xs">
                {[
                  { id: 'presencial', label: 'Presencial', desc: 'Laboratório prático Tech Lab' },
                  { id: 'online', label: 'Online', desc: 'Aulas ao vivo + gravações' },
                  { id: 'hibrido', label: 'Híbrido', desc: 'Aulas remotas + práticas laboratoriais' },
                ].map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setModality(m.id as any)}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      modality === m.id
                        ? 'bg-sky-950/40 border-sky-400 text-white ring-1 ring-sky-400'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span className="font-bold block">{m.label}</span>
                    <span className="text-[10px] text-slate-400 mt-1 block">{m.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Nível (Iniciante, Intermédio, Avançado) */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase text-sky-400 tracking-wider mb-3">
                3. Nível de Conhecimento
              </label>
              <div className="grid grid-cols-3 gap-3 text-xs">
                {[
                  { id: 'iniciante', label: 'Iniciante', desc: 'Zero experiência prévia' },
                  { id: 'intermedio', label: 'Intermédio', desc: 'Já possui conceitos básicos' },
                  { id: 'avancado', label: 'Avançado', desc: 'Foco em arquitetura e projetos' },
                ].map((lvl) => (
                  <button
                    key={lvl.id}
                    type="button"
                    onClick={() => setLevel(lvl.id as any)}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      level === lvl.id
                        ? 'bg-sky-950/40 border-sky-400 text-white ring-1 ring-sky-400'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span className="font-bold block">{lvl.label}</span>
                    <span className="text-[10px] text-slate-400 mt-1 block">{lvl.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Número de Participantes */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-mono font-bold uppercase text-sky-400 tracking-wider">
                  4. Número de Participantes / Alunos
                </label>
                <span className="text-xs font-mono text-slate-300 font-bold">
                  {participants} {participants === 1 ? 'aluno' : 'alunos'}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min={1}
                  max={10}
                  value={participants}
                  onChange={(e) => setParticipants(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
                />
              </div>
              {participants >= 3 && (
                <p className="text-[11px] text-emerald-400 mt-1 font-mono">
                  ✓ Desconto corporativo de 15% aplicado para grupos!
                </p>
              )}
            </div>

            {/* Inscrição Form Inputs */}
            <form onSubmit={handleEnroll} className="pt-4 border-t border-slate-800 space-y-4">
              <span className="text-xs font-mono font-bold uppercase text-slate-300 block">
                Dados do Aluno / Responsável
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Nome completo *"
                  className="px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-sky-400"
                />
                <input
                  type="tel"
                  required
                  value={studentPhone}
                  onChange={(e) => setStudentPhone(e.target.value)}
                  placeholder="WhatsApp / Telefone *"
                  className="px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-sky-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-sky-600/25 transition-all"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Inscrever-me no Curso</span>
              </button>
            </form>

          </div>

          {/* RIGHT: Live Price Card */}
          <div className="lg:col-span-4 space-y-4 sticky top-24">
            <div className="bg-[#0A1329] border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4 text-xs">
              <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider block border-b border-slate-800 pb-3">
                Resumo da Formação
              </span>

              <div>
                <span className="text-[10px] text-slate-400 uppercase block">Curso</span>
                <span className="text-sm font-bold text-white block mt-0.5">{selectedCourse.name}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">Modalidade</span>
                  <span className="font-semibold text-slate-200 capitalize">{modality}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">Nível</span>
                  <span className="font-semibold text-slate-200 capitalize">{level}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-sky-950/40 border border-sky-500/30">
                <span className="text-[10px] font-mono text-sky-400 uppercase font-bold block">
                  Investimento Estimado:
                </span>
                <div className="text-2xl font-black text-white font-mono mt-1">
                  {calculation.formatted}
                </div>
                {participants > 1 && (
                  <span className="text-[10px] text-slate-400 block mt-1">
                    ({calculation.perPerson} por aluno)
                  </span>
                )}
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed">
                Inclui material de apoio, exercícios práticos e certificado emitido pela Tech Lab.
              </p>
            </div>
          </div>

        </div>
      ) : (
        /* Enrolled Confirmation Screen */
        <div className="max-w-xl mx-auto bg-[#0B132B] border-2 border-emerald-500/40 rounded-3xl p-8 sm:p-10 text-center shadow-2xl space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-400 mx-auto flex items-center justify-center">
            <CheckCircle className="w-8 h-8" />
          </div>

          <div>
            <span className="text-xs font-mono text-emerald-400 uppercase font-bold tracking-widest block mb-1">
              Ref: {enrolledRef}
            </span>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Inscrição Registada com Sucesso!
            </h2>
            <p className="text-xs text-slate-300 mt-1">
              Olá {studentName}, a sua vaga no curso de <strong>{selectedCourse.name}</strong> foi reservada.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-left text-xs text-slate-300 space-y-1">
            <div>Modalidade: <strong className="text-white capitalize">{modality}</strong></div>
            <div>Nível: <strong className="text-white capitalize">{level}</strong></div>
            <div>Participantes: <strong className="text-white">{participants}</strong></div>
            <div>Investimento: <strong className="text-sky-400">{calculation.formatted}</strong></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={getWhatsAppEnrollUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enviar Inscrição pelo WhatsApp</span>
            </a>

            <button
              onClick={() => setIsEnrolled(false)}
              className="py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-700 cursor-pointer"
            >
              Nova Inscrição
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
