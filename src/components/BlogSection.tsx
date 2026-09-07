import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, User, ArrowRight, Tag, X, Sparkles } from 'lucide-react';
import { BlogPost, BlogCategory } from '../types';

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'como-criar-website-profissional-angola',
    title: 'Quanto Custa e Como Criar um Website Profissional em Angola em 2026',
    category: 'Tecnologia',
    summary: 'Um guia prático sobre investimento, prazos, infraestrutura de alojamento e o que uma empresa precisa para ter uma presença digital de alta conversão.',
    author: 'Equipa de Engenharia Tech Lab',
    date: '28 de Fevereiro, 2026',
    readTime: '6 min de leitura',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    content: [
      'Ter um website em Angola deixou de ser um simples luxo institucional e passou a ser o motor primário de credibilidade e geração de clientes qualificados.',
      'Ao orçamentar um website, existem 4 fatores determinantes: a complexidade das funcionalidades (como formulários inteligentes, integração com WhatsApp e catálogos), o número de páginas, a necessidade de painel administrativo (CMS) e a velocidade nos servidores locais e globais.',
      'Na Tech Lab, desenvolvemos soluções concebidas especificamente para o contexto angolano: páginas ultraleves que carregam instantaneamente mesmo em redes móveis com largura de banda restrita e ligação direta aos canais onde os clientes realmente compram.',
    ],
  },
  {
    id: 'post-2',
    slug: 'vender-online-multicaixa-express-angola',
    title: 'Como Implementar E-commerce com Pagamentos em Kwanzas e WhatsApp',
    category: 'Empreendedorismo',
    summary: 'Descubra a melhor estratégia comercial para automatizar pedidos e diminuir o atrito na hora do pagamento com clientes locais.',
    author: 'Consultoria Digital Tech Lab',
    date: '20 de Fevereiro, 2026',
    readTime: '5 min de leitura',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?w=800&auto=format&fit=crop&q=80',
    content: [
      'O comportamento de compras online em Angola é fortemente guiado pela confiança e pela facilidade de comunicação direta.',
      'Combinar uma montra de produtos com catálogo visual limpo e checkout simplificado através de WhatsApp e referências bancárias aumenta as conversões em até 300% em comparação a lojas que obrigam o cliente a preencher formulários longos.',
      'Utilizar um simulador de projeto permite à sua empresa saber exatamente quais os módulos prioritários antes de iniciar o investimento.',
    ],
  },
  {
    id: 'post-3',
    slug: 'automacao-processos-redutos-custos-empresas',
    title: 'Automação de Processos: Como Pequenas Empresas Reduzem Custos com Software',
    category: 'Programação',
    summary: 'Sistemas sob medida eliminam o retrabalho em planilhas dispersas e organizam stock, emissão de faturas e controle financeiro.',
    author: 'Josué Balthazar',
    date: '14 de Fevereiro, 2026',
    readTime: '7 min de leitura',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    content: [
      'Empresas em crescimento frequentemente enfrentam a perda de dados quando dependem exclusivamente de cadernos físicos ou ficheiros Excel partilhados manualmente.',
      'A construção de um sistema web modular permite que cada departamento aceda apenas ao que precisa, com relatórios gerados automaticamente e notificações em tempo real.',
      'Na Tech Lab, desenvolvemos sistemas empresariais pensados para evoluir passo a passo, acompanhando a maturidade do negócio.',
    ],
  },
  {
    id: 'post-4',
    slug: 'marketing-digital-angola-captura-leads',
    title: 'Marketing Digital em Angola: O Papel de uma Landing Page de Alta Conversão',
    category: 'Marketing',
    summary: 'Por que direcionar anúncios de tráfego pago para o perfil do Instagram pode estar a desperdiçar o seu orçamento de publicidade.',
    author: 'Equipa de Marketing Tech Lab',
    date: '08 de Fevereiro, 2026',
    readTime: '4 min de leitura',
    imageUrl: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&auto=format&fit=crop&q=80',
    content: [
      'Quando investe em campanhas de tráfego nas redes sociais, cada clique deve conduzir o potencial comprador a uma proposta clara e sem distrações.',
      'Uma Landing Page rápida, com benefícios claros, prova social e um botão de ação com mensagem já configurada no WhatsApp, é a forma mais barata de gerar clientes qualificados.',
    ],
  },
  {
    id: 'post-5',
    slug: 'importacao-componentes-eletronica-desafios',
    title: 'Eletrónica Aplicada e Automação IoT para a Indústria Angolana',
    category: 'Eletrónica',
    summary: 'Diagnóstico de placas, manutenção preventiva e automação de equipamentos para prevenir paragens nas empresas.',
    author: 'Departamento de Hardware Tech Lab',
    date: '02 de Fevereiro, 2026',
    readTime: '5 min de leitura',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
    content: [
      'A substituição de circuitos e equipamentos eletrónicos industriais muitas vezes implica custos de importação proibitivos e prazos longos.',
      'A equipa de Eletrónica da Tech Lab atua no diagnóstico cirúrgico de placas, reparações especializadas e desenvolvimento de controladores de automação sob medida.',
    ],
  },
  {
    id: 'post-6',
    slug: 'como-importar-tecnologia-com-seguranca',
    title: 'Importação de Tecnologia e Equipamentos: Melhores Práticas e Logística',
    category: 'Importação',
    summary: 'Como planear o fornecimento de periféricos, componentes e hardware para projetos tecnológicos sem riscos operacionais.',
    author: 'Tech Lab Global',
    date: '25 de Janeiro, 2026',
    readTime: '5 min de leitura',
    imageUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&auto=format&fit=crop&q=80',
    content: [
      'A cadeia de suprimentos de tecnologia exige homologação de fornecedores confiáveis e especificação rigorosa de padrões técnicos de voltagem e durabilidade.',
      'Conhecer os parâmetros do seu projeto com antecedência através de uma simulação detalhada reduz os riscos de incompatibilidade e desperdício de recursos.',
    ],
  },
];

interface BlogSectionProps {
  onSelectServiceToSimulate?: (serviceId: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectServiceToSimulate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const categories: string[] = [
    'Todos',
    'Tecnologia',
    'Empreendedorismo',
    'Programação',
    'Marketing',
    'Importação',
    'Eletrónica',
  ];

  const filteredPosts =
    selectedCategory === 'Todos'
      ? BLOG_POSTS_DATA
      : BLOG_POSTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Tech Lab Insights • Artigos & Engenharia</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Blog & Conhecimento Tecnológico
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 mt-2">
          Estratégias, tutoriais de engenharia e insights práticos para impulsionar negócios através da tecnologia em Angola.
        </p>
      </div>

      {/* Category Filter Pills (Section 26) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 max-w-4xl mx-auto justify-start sm:justify-center text-xs font-semibold">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
              selectedCategory === cat
                ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            onClick={() => setActivePost(post)}
            className="bg-[#0B132B] border border-slate-800 hover:border-sky-500/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer flex flex-col justify-between group"
          >
            <div>
              {post.imageUrl && (
                <div className="h-44 w-full overflow-hidden relative">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-sm text-sky-400 font-mono text-[10px] font-bold uppercase border border-slate-700">
                    {post.category}
                  </span>
                </div>
              )}

              <div className="p-5 space-y-3">
                <div className="flex items-center gap-3 text-[11px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                  {post.summary}
                </p>
              </div>
            </div>

            <div className="px-5 pb-5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-sky-400 group-hover:text-sky-300">
              <span>Ler artigo completo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Reading Article Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-[#0B132B] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 bg-slate-900/90 border-b border-slate-800 shrink-0">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
                {activePost.category} • {activePost.readTime}
              </span>
              <button
                onClick={() => setActivePost(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Scrollable */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-slate-200">
              <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                {activePost.title}
              </h2>

              <div className="flex items-center gap-3 text-xs text-slate-400 pb-4 border-b border-slate-800">
                <span>Por <strong className="text-slate-300">{activePost.author}</strong></span>
                <span>•</span>
                <span>{activePost.date}</span>
              </div>

              {activePost.imageUrl && (
                <img
                  src={activePost.imageUrl}
                  alt={activePost.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-56 object-cover rounded-xl border border-slate-800"
                />
              )}

              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                {activePost.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Call to action inside blog */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-sky-950/60 to-slate-900 border border-sky-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                <div>
                  <h4 className="text-sm font-bold text-white">Pretende iniciar este projeto na sua empresa?</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Utilize o simulador Tech Lab para calcular a estimativa inicial em 2 minutos.</p>
                </div>
                {onSelectServiceToSimulate && (
                  <button
                    onClick={() => {
                      setActivePost(null);
                      onSelectServiceToSimulate('website');
                    }}
                    className="px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shrink-0 cursor-pointer"
                  >
                    Simular Projeto Agora →
                  </button>
                )}
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};
