import { SimulatorPricingConfig, ServiceConfigItem, SimulatorCalculationResult } from '../types';

export const DEFAULT_SIMULATOR_CONFIG: SimulatorPricingConfig = {
  complexityMultipliers: {
    basico: 1.0,
    intermediario: 1.45,
    avancado: 2.1,
    empresarial: 3.2,
  },
  urgencyMultipliers: {
    semUrgencia: 1.0,
    prazoNormal: 1.0,
    prioridade: 1.18,
    urgente: 1.35,
  },
  services: [
    {
      id: 'website',
      code: 'WEBSITE',
      label: 'WEBSITE',
      shortDesc: 'Site institucional ou profissional.',
      iconName: 'Globe',
      basePriceMin: 100000,
      basePriceMax: 180000,
      baseDeliveryWeeksMin: 1,
      baseDeliveryWeeksMax: 2,
      scaleQuestion: 'Qual é o número aproximado de páginas?',
      scaleOptions: [
        { id: '5-paginas', label: 'Até 5 páginas', multiplier: 1.0 },
        { id: '6-10-paginas', label: '6–10 páginas', multiplier: 1.35 },
        { id: '11-20-paginas', label: '11–20 páginas', multiplier: 1.75 },
        { id: 'mais-20-paginas', label: 'Mais de 20 páginas', multiplier: 2.4 },
      ],
      features: [
        { id: 'home', name: 'Página inicial', baseCost: 0, isPopular: true },
        { id: 'about', name: 'Sobre nós', baseCost: 0, isPopular: true },
        { id: 'services', name: 'Serviços', baseCost: 0, isPopular: true },
        { id: 'contacts', name: 'Contactos', baseCost: 0, isPopular: true },
        { id: 'whatsapp', name: 'Integração WhatsApp', baseCost: 15000, isPopular: true },
        { id: 'contact-form', name: 'Formulário de contacto', baseCost: 15000, isPopular: true },
        { id: 'seo', name: 'SEO (Otimização Google)', baseCost: 35000, isPopular: true },
        { id: 'gallery', name: 'Galeria de fotos/projetos', baseCost: 20000 },
        { id: 'blog', name: 'Blog de notícias', baseCost: 45000 },
        { id: 'client-area', name: 'Área de clientes', baseCost: 75000 },
        { id: 'multilingual', name: 'Multilingue (PT / EN)', baseCost: 50000 },
        { id: 'cms', name: 'CMS (Gestão autónoma de conteúdos)', baseCost: 60000 },
        { id: 'analytics', name: 'Analytics & Métricas de tráfego', baseCost: 25000 },
      ],
    },
    {
      id: 'landing-page',
      code: 'LANDING_PAGE',
      label: 'LANDING PAGE',
      shortDesc: 'Página para campanhas e geração de leads.',
      iconName: 'Layout',
      basePriceMin: 80000,
      basePriceMax: 140000,
      baseDeliveryWeeksMin: 1,
      baseDeliveryWeeksMax: 1.5,
      scaleQuestion: 'Qual é a estrutura pretendida da Landing Page?',
      scaleOptions: [
        { id: 'lp-essencial', label: 'Página única essencial (1–4 secções)', multiplier: 1.0 },
        { id: 'lp-completa', label: 'Página de alta conversão (5–8 secções)', multiplier: 1.3 },
        { id: 'lp-avancada', label: 'Página longa com vídeos & depoimentos (9+ secções)', multiplier: 1.6 },
        { id: 'lp-multiplas', label: 'Campanha com 2 ou mais variantes (A/B Test)', multiplier: 2.1 },
      ],
      features: [
        { id: 'lp-headline', name: 'Copywriting focado em conversão', baseCost: 25000, isPopular: true },
        { id: 'lp-whatsapp', name: 'Botão WhatsApp Flutuante com mensagem pré-definida', baseCost: 15000, isPopular: true },
        { id: 'lp-form', name: 'Formulário de captura de leads integrado', baseCost: 20000, isPopular: true },
        { id: 'lp-pixel', name: 'Pixel Meta & Google Analytics', baseCost: 25000 },
        { id: 'lp-faq', name: 'Secção de Dúvidas Frequentes (FAQ)', baseCost: 15000 },
        { id: 'lp-timer', name: 'Contador regressivo para campanhas promocionais', baseCost: 15000 },
        { id: 'lp-crm', name: 'Encaminhamento automático de leads para Email/Planilha', baseCost: 35000 },
      ],
    },
    {
      id: 'ecommerce',
      code: 'ECOMMERCE',
      label: 'E-COMMERCE',
      shortDesc: 'Loja online para vender produtos.',
      iconName: 'ShoppingCart',
      basePriceMin: 220000,
      basePriceMax: 350000,
      baseDeliveryWeeksMin: 2.5,
      baseDeliveryWeeksMax: 4.5,
      scaleQuestion: 'Qual é a dimensão do catálogo de produtos?',
      scaleOptions: [
        { id: 'ate-50', label: 'Até 50 produtos', multiplier: 1.0 },
        { id: '51-200', label: '51–200 produtos', multiplier: 1.35 },
        { id: '201-500', label: '201–500 produtos', multiplier: 1.75 },
        { id: 'mais-500', label: 'Mais de 500 produtos', multiplier: 2.3 },
      ],
      features: [
        { id: 'catalog', name: 'Catálogo de produtos', baseCost: 0, isPopular: true },
        { id: 'cart', name: 'Carrinho de compras', baseCost: 0, isPopular: true },
        { id: 'checkout', name: 'Checkout simplificado', baseCost: 0, isPopular: true },
        { id: 'product-mgmt', name: 'Gestão de produtos e categorias', baseCost: 25000, isPopular: true },
        { id: 'client-mgmt', name: 'Gestão de clientes', baseCost: 30000 },
        { id: 'order-mgmt', name: 'Gestão de pedidos e status', baseCost: 35000, isPopular: true },
        { id: 'coupons', name: 'Cupões de desconto e promoções', baseCost: 25000 },
        { id: 'online-payments', name: 'Pagamentos online (Multicaixa Express / Referências)', baseCost: 55000, isPopular: true },
        { id: 'whatsapp-orders', name: 'Finalização de pedidos via WhatsApp', baseCost: 20000, isPopular: true },
        { id: 'notifications', name: 'Notificações automáticas por email/SMS', baseCost: 35000 },
        { id: 'admin-dashboard', name: 'Dashboard administrativo de vendas', baseCost: 50000, isPopular: true },
        { id: 'sales-reports', name: 'Relatórios financeiros e estatísticas', baseCost: 45000 },
        { id: 'shipping-carriers', name: 'Integração com cálculo de entregas / transportadoras', baseCost: 40000 },
      ],
    },
    {
      id: 'sistema-web',
      code: 'SISTEMA_WEB',
      label: 'SISTEMA WEB',
      shortDesc: 'Sistema personalizado para gestão do negócio.',
      iconName: 'Server',
      basePriceMin: 350000,
      basePriceMax: 600000,
      baseDeliveryWeeksMin: 4,
      baseDeliveryWeeksMax: 8,
      scaleQuestion: 'Quantos módulos de negócio o sistema terá aproximadamente?',
      scaleOptions: [
        { id: 'ate-5-modulos', label: 'Até 5 módulos (Ex.: Clientes, Vendas, Stock)', multiplier: 1.0 },
        { id: '6-10-modulos', label: '6–10 módulos', multiplier: 1.45 },
        { id: '11-20-modulos', label: '11–20 módulos', multiplier: 1.95 },
        { id: 'mais-20-modulos', label: 'Mais de 20 módulos empresariais', multiplier: 2.7 },
      ],
      features: [
        { id: 'login-auth', name: 'Login & Autenticação segura', baseCost: 0, isPopular: true },
        { id: 'user-profiles', name: 'Perfis de utilizador e permissões hierárquicas', baseCost: 40000, isPopular: true },
        { id: 'dashboard', name: 'Dashboard com métricas em tempo real', baseCost: 50000, isPopular: true },
        { id: 'client-crm', name: 'Gestão de clientes & históricos', baseCost: 45000, isPopular: true },
        { id: 'product-stock', name: 'Gestão de produtos / stock / inventário', baseCost: 50000 },
        { id: 'system-reports', name: 'Relatórios operacionais', baseCost: 40000 },
        { id: 'notifications-sys', name: 'Notificações e alertas de tarefas', baseCost: 30000 },
        { id: 'export-pdf', name: 'Exportação de relatórios e faturas em PDF', baseCost: 35000, isPopular: true },
        { id: 'export-excel', name: 'Exportação de dados para Excel/CSV', baseCost: 30000 },
        { id: 'api-rest', name: 'API RESTful para conexões externas', baseCost: 65000 },
        { id: 'integrations', name: 'Integrações com softwares legados ou ERPs', baseCost: 75000 },
        { id: 'admin-panel', name: 'Painel de Administração geral e logs', baseCost: 45000 },
      ],
    },
    {
      id: 'aplicacao',
      code: 'APLICACAO',
      label: 'APLICAÇÃO',
      shortDesc: 'Aplicação web ou mobile interativa.',
      iconName: 'Smartphone',
      basePriceMin: 400000,
      basePriceMax: 700000,
      baseDeliveryWeeksMin: 5,
      baseDeliveryWeeksMax: 10,
      scaleQuestion: 'Quantas telas/fluxos principais a aplicação terá?',
      scaleOptions: [
        { id: '5-10-telas', label: '5–10 telas', multiplier: 1.0 },
        { id: '11-20-telas', label: '11–20 telas', multiplier: 1.45 },
        { id: '21-40-telas', label: '21–40 telas', multiplier: 2.0 },
        { id: 'mais-40-telas', label: 'Mais de 40 telas', multiplier: 2.8 },
      ],
      features: [
        { id: 'app-auth', name: 'Autenticação (Email, Telefone ou Social)', baseCost: 0, isPopular: true },
        { id: 'app-profile', name: 'Perfil de utilizador configurável', baseCost: 35000, isPopular: true },
        { id: 'app-notifications', name: 'Notificações in-app', baseCost: 30000 },
        { id: 'app-geo', name: 'Geolocalização e mapas em tempo real', baseCost: 65000 },
        { id: 'app-payments', name: 'Pagamentos na aplicação', baseCost: 60000, isPopular: true },
        { id: 'app-chat', name: 'Chat e mensagens diretas entre utilizadores', baseCost: 70000 },
        { id: 'app-upload', name: 'Upload de imagens e documentos com compressão', baseCost: 35000 },
        { id: 'app-dashboard', name: 'Dashboard de utilizador e histórico', baseCost: 45000 },
        { id: 'app-admin', name: 'Painel web de administração geral', baseCost: 60000, isPopular: true },
        { id: 'app-push', name: 'Push notifications no telemóvel', baseCost: 50000, isPopular: true },
      ],
    },
    {
      id: 'software',
      code: 'SOFTWARE_PERSONALIZADO',
      label: 'SOFTWARE PERSONALIZADO',
      shortDesc: 'Software sob medida para necessidades específicas.',
      iconName: 'Cpu',
      basePriceMin: 500000,
      basePriceMax: 900000,
      baseDeliveryWeeksMin: 6,
      baseDeliveryWeeksMax: 12,
      scaleQuestion: 'Qual é a abrangência prevista para o software?',
      scaleOptions: [
        { id: 'soft-departamento', label: 'Uso departamental / setor específico', multiplier: 1.0 },
        { id: 'soft-empresa', label: 'Toda a empresa (multi-departamento)', multiplier: 1.5 },
        { id: 'soft-multiunidade', label: 'Múltiplas filiais ou unidades', multiplier: 2.1 },
        { id: 'soft-ecossistema', label: 'Ecossistema completo com apps e integrações', multiplier: 3.0 },
      ],
      features: [
        { id: 'soft-arquitetura', name: 'Arquitetura modular escalável', baseCost: 60000, isPopular: true },
        { id: 'soft-offline', name: 'Suporte a funcionamento offline com sincronização', baseCost: 80000 },
        { id: 'soft-backup', name: 'Backup automático em nuvem e redundância', baseCost: 50000, isPopular: true },
        { id: 'soft-security', name: 'Criptografia e conformidade de proteção de dados', baseCost: 70000, isPopular: true },
        { id: 'soft-auditoria', name: 'Trilha de auditoria e logs de operação', baseCost: 45000 },
        { id: 'soft-hardware', name: 'Comunicação com dispositivos e periféricos locais', baseCost: 75000 },
      ],
    },
    {
      id: 'branding',
      code: 'BRANDING',
      label: 'DESIGN / BRANDING',
      shortDesc: 'Identidade visual e materiais gráficos de alto impacto.',
      iconName: 'Palette',
      basePriceMin: 70000,
      basePriceMax: 150000,
      baseDeliveryWeeksMin: 1,
      baseDeliveryWeeksMax: 2.5,
      scaleQuestion: 'Qual é o escopo de materiais necessários?',
      scaleOptions: [
        { id: 'brand-essencial', label: 'Identidade Essencial (Logo + Cores + Tipografia)', multiplier: 1.0 },
        { id: 'brand-completo', label: 'Identidade Comercial (Logo + Papelaria + Redes)', multiplier: 1.4 },
        { id: 'brand-empresarial', label: 'Rebranding Corporativo Completo', multiplier: 1.9 },
        { id: 'brand-360', label: 'Branding 360º com manual de normas completo', multiplier: 2.5 },
      ],
      features: [
        { id: 'brand-logo', name: 'Logotipo (Versões principal, secundária e ícone)', baseCost: 45000, isPopular: true },
        { id: 'brand-manual', name: 'Manual de identidade visual e regras de uso', baseCost: 40000, isPopular: true },
        { id: 'brand-cartao', name: 'Cartão de visita digital e imprimível', baseCost: 15000 },
        { id: 'brand-flyer', name: 'Flyer promocional ou cartaz institucional', baseCost: 20000 },
        { id: 'brand-social', name: 'Social media kit (Templates para Instagram/Facebook)', baseCost: 35000, isPopular: true },
        { id: 'brand-pitch', name: 'Apresentação empresarial (Pitch deck em PDF)', baseCost: 40000 },
        { id: 'brand-uiux', name: 'Design UI/UX de interfaces e prototipagem', baseCost: 65000 },
        { id: 'brand-webdesign', name: 'Design de website em Figma/alta fidelidade', baseCost: 55000 },
      ],
    },
    {
      id: 'automacao',
      code: 'AUTOMACAO',
      label: 'AUTOMAÇÃO',
      shortDesc: 'Automação de processos empresariais e fluxos de trabalho.',
      iconName: 'Zap',
      basePriceMin: 120000,
      basePriceMax: 260000,
      baseDeliveryWeeksMin: 1.5,
      baseDeliveryWeeksMax: 3.5,
      scaleQuestion: 'Quantos processos ou fluxos pretende automatizar?',
      scaleOptions: [
        { id: 'auto-1-2', label: '1 a 2 processos essenciais', multiplier: 1.0 },
        { id: 'auto-3-5', label: '3 a 5 processos integrados', multiplier: 1.4 },
        { id: 'auto-6-10', label: '6 a 10 processos complexos', multiplier: 1.85 },
        { id: 'auto-empresa', label: 'Pipeline contínuo de automação', multiplier: 2.5 },
      ],
      features: [
        { id: 'auto-whatsapp', name: 'Robô de atendimento inteligente no WhatsApp', baseCost: 50000, isPopular: true },
        { id: 'auto-crm', name: 'Sincronização de leads em CRM e planilhas', baseCost: 35000, isPopular: true },
        { id: 'auto-email', name: 'Automação de emails e lembretes de cobrança', baseCost: 30000 },
        { id: 'auto-docs', name: 'Geração automática de propostas e contratos', baseCost: 45000 },
        { id: 'auto-alerts', name: 'Alertas de stock e relatórios diários para a gerência', baseCost: 35000 },
      ],
    },
    {
      id: 'electronics',
      code: 'ELECTRONICS',
      label: 'ELECTRONICS',
      shortDesc: 'Projeto, diagnóstico ou solução eletrónica aplicada.',
      iconName: 'Radio',
      basePriceMin: 50000,
      basePriceMax: 150000,
      baseDeliveryWeeksMin: 1,
      baseDeliveryWeeksMax: 3,
      requiresTechnicalInspection: true,
      scaleQuestion: 'Qual é a quantidade de equipamentos ou dimensão da instalação?',
      scaleOptions: [
        { id: 'elec-1', label: '1 equipamento / protótipo único', multiplier: 1.0 },
        { id: 'elec-2-5', label: '2 a 5 equipamentos / módulos', multiplier: 1.35 },
        { id: 'elec-6-15', label: '6 a 15 equipamentos / lote pequeno', multiplier: 1.8 },
        { id: 'elec-lote', label: 'Lote industrial / instalação predial completa', multiplier: 2.6 },
      ],
      features: [
        { id: 'elec-diag', name: 'Diagnóstico técnico especializado', baseCost: 20000, isPopular: true },
        { id: 'elec-reparacao', name: 'Reparação de placas e circuitos eletrónicos', baseCost: 35000, isPopular: true },
        { id: 'elec-automacao-iot', name: 'Automação residencial / comercial (IoT)', baseCost: 65000 },
        { id: 'elec-projeto', name: 'Projeto eletrónico do zero (Esquema + PCB)', baseCost: 80000 },
        { id: 'elec-instalacao', name: 'Instalação e calibração no local', baseCost: 40000 },
        { id: 'elec-manutencao', name: 'Manutenção preventiva periódica', baseCost: 30000 },
        { id: 'elec-consultoria', name: 'Consultoria de eficiência energética e fontes', baseCost: 45000 },
      ],
    },
    {
      id: 'academy',
      code: 'ACADEMY',
      label: 'TECH LAB ACADEMY',
      shortDesc: 'Formação prática e capacitação tecnológica para indivíduos e empresas.',
      iconName: 'GraduationCap',
      basePriceMin: 35000,
      basePriceMax: 90000,
      baseDeliveryWeeksMin: 2,
      baseDeliveryWeeksMax: 6,
      scaleQuestion: 'Quantos participantes farão parte da formação?',
      scaleOptions: [
        { id: 'acad-individual', label: '1 participante (Individual)', multiplier: 1.0 },
        { id: 'acad-grupo-pequeno', label: '2 a 4 participantes (Grupo reduzido)', multiplier: 1.7 },
        { id: 'acad-turma', label: '5 a 10 participantes (Turma comercial)', multiplier: 2.6 },
        { id: 'acad-corporativo', label: 'Mais de 10 participantes (In-company)', multiplier: 3.5 },
      ],
      features: [
        { id: 'course-web', name: 'Curso: Criação de Websites e Presença Digital', baseCost: 35000, isPopular: true },
        { id: 'course-prog', name: 'Curso: Fundamentos de Programação e Lógica', baseCost: 40000 },
        { id: 'course-mkt', name: 'Curso: Marketing Digital & Tráfego para Negócios', baseCost: 35000, isPopular: true },
        { id: 'course-elec', name: 'Curso: Eletrónica Prática e Automação Básica', baseCost: 45000 },
        { id: 'course-gestao', name: 'Workshop: Digitalização de Negócios e Vendas', baseCost: 30000 },
        { id: 'course-cert', name: 'Certificado de Conclusão Oficial Tech Lab', baseCost: 0, isPopular: true },
        { id: 'course-material', name: 'Material didático digital e projetos práticos', baseCost: 0, isPopular: true },
      ],
    },
    {
      id: 'outro',
      code: 'OUTRO',
      label: 'OUTRO / PROJETO PERSONALIZADO',
      shortDesc: 'Solução sob medida que combina múltiplos serviços ou requisitos únicos.',
      iconName: 'Sparkles',
      basePriceMin: 150000,
      basePriceMax: 300000,
      baseDeliveryWeeksMin: 2,
      baseDeliveryWeeksMax: 5,
      scaleQuestion: 'Qual é o nível de abrangência do projeto?',
      scaleOptions: [
        { id: 'outro-piloto', label: 'Protótipo / Prova de conceito inicial', multiplier: 1.0 },
        { id: 'outro-fase1', label: 'Fase 1 com funcionalidades operacionais', multiplier: 1.4 },
        { id: 'outro-completo', label: 'Implementação completa', multiplier: 2.0 },
        { id: 'outro-corporativo', label: 'Solução estratégica multi-plataforma', multiplier: 2.8 },
      ],
      features: [
        { id: 'outro-consultoria', name: 'Consultoria técnica preliminar', baseCost: 30000, isPopular: true },
        { id: 'outro-especificacao', name: 'Levantamento de requisitos e especificação funcional', baseCost: 35000, isPopular: true },
        { id: 'outro-desenvolvimento', name: 'Desenvolvimento ágil com entregas parciais', baseCost: 60000, isPopular: true },
        { id: 'outro-suporte', name: 'Garantia e acompanhamento pós-entrega de 30 dias', baseCost: 25000, isPopular: true },
      ],
    },
  ],
};

// ==========================================
// CALCULATION ENGINE (Section 8 & 34)
// ==========================================

export function calculateSimulatorEstimate(params: {
  serviceId: string;
  complexity: 'basico' | 'intermediario' | 'avancado' | 'empresarial';
  selectedFeatureIds: string[];
  scaleId: string;
  urgency: 'sem-urgencia' | 'normal' | 'prioridade' | 'urgente';
  clientName: string;
  companyName?: string;
  clientEmail: string;
  clientPhone: string;
  projectDescription: string;
  config?: SimulatorPricingConfig;
}): SimulatorCalculationResult {
  const cfg = params.config || DEFAULT_SIMULATOR_CONFIG;
  const service = cfg.services.find((s) => s.id === params.serviceId) || cfg.services[0];

  // 1. Base prices
  let baseMin = service.basePriceMin;
  let baseMax = service.basePriceMax;
  let deliveryMin = service.baseDeliveryWeeksMin;
  let deliveryMax = service.baseDeliveryWeeksMax;

  // 2. Features sum
  let featuresExtraCost = 0;
  const selectedFeatureNames: string[] = [];

  service.features.forEach((feat) => {
    if (params.selectedFeatureIds.includes(feat.id)) {
      featuresExtraCost += feat.baseCost;
      selectedFeatureNames.push(feat.name);
    }
  });

  // 3. Complexity multiplier
  const compKeyMap: Record<string, keyof typeof cfg.complexityMultipliers> = {
    basico: 'basico',
    intermediario: 'intermediario',
    avancado: 'avancado',
    empresarial: 'empresarial',
  };
  const compMult = cfg.complexityMultipliers[compKeyMap[params.complexity]] || 1.0;

  // Complexity also affects delivery time
  const compDeliveryMultMap = {
    basico: 1.0,
    intermediario: 1.25,
    avancado: 1.6,
    empresarial: 2.2,
  };
  const compDeliveryMult = compDeliveryMultMap[params.complexity] || 1.0;

  // 4. Scale multiplier
  const scaleOpt = service.scaleOptions.find((sc) => sc.id === params.scaleId) || service.scaleOptions[0];
  const scaleMult = scaleOpt.multiplier;

  // 5. Urgency multiplier
  const urgKeyMap: Record<string, keyof typeof cfg.urgencyMultipliers> = {
    'sem-urgencia': 'semUrgencia',
    normal: 'prazoNormal',
    prioridade: 'prioridade',
    urgente: 'urgente',
  };
  const urgMult = cfg.urgencyMultipliers[urgKeyMap[params.urgency]] || 1.0;

  // Urgency reduces delivery duration
  const urgDeliveryMultMap = {
    'sem-urgencia': 1.1,
    normal: 1.0,
    prioridade: 0.8,
    urgente: 0.6,
  };
  const urgDeliveryMult = urgDeliveryMultMap[params.urgency] || 1.0;

  // 6. Calculate total numeric interval
  const calculatedMin = Math.round(((baseMin + featuresExtraCost) * compMult * scaleMult * urgMult) / 5000) * 5000;
  const calculatedMax = Math.round(((baseMax + featuresExtraCost * 1.25) * compMult * scaleMult * urgMult) / 5000) * 5000;

  // 7. Calculate weeks
  let finalDeliveryWeeksMin = Math.max(1, Math.round(deliveryMin * compDeliveryMult * urgDeliveryMult * 10) / 10);
  let finalDeliveryWeeksMax = Math.max(finalDeliveryWeeksMin + 0.5, Math.round(deliveryMax * compDeliveryMult * urgDeliveryMult * 10) / 10);

  // Formatting strings
  const formattedRange = `${new Intl.NumberFormat('pt-AO').format(calculatedMin)} Kz – ${new Intl.NumberFormat('pt-AO').format(calculatedMax)} Kz`;
  
  let formattedDelivery = `${Math.round(finalDeliveryWeeksMin)}–${Math.round(finalDeliveryWeeksMax)} semanas`;
  if (finalDeliveryWeeksMax <= 1.5) {
    formattedDelivery = '5–10 dias úteis';
  }

  const complexityLabels: Record<string, string> = {
    basico: 'Básico',
    intermediario: 'Intermediário',
    avancado: 'Avançado',
    empresarial: 'Empresarial',
  };

  const urgencyLabels: Record<string, string> = {
    'sem-urgencia': 'Sem urgência',
    normal: 'Prazo normal',
    prioridade: 'Prioridade (+18%)',
    urgente: 'Urgente (+35%)',
  };

  return {
    serviceId: service.id,
    serviceLabel: service.label,
    complexity: params.complexity,
    complexityLabel: complexityLabels[params.complexity] || 'Intermediário',
    selectedFeatures: selectedFeatureNames,
    scaleId: scaleOpt.id,
    scaleLabel: scaleOpt.label,
    urgency: params.urgency,
    urgencyLabel: urgencyLabels[params.urgency] || 'Prazo normal',
    minPriceKz: calculatedMin,
    maxPriceKz: calculatedMax,
    formattedRange,
    deliveryWeeksMin: finalDeliveryWeeksMin,
    deliveryWeeksMax: finalDeliveryWeeksMax,
    formattedDelivery,
    requiresTechnicalInspection: Boolean(service.requiresTechnicalInspection),
    clientName: params.clientName,
    companyName: params.companyName,
    clientEmail: params.clientEmail,
    clientPhone: params.clientPhone,
    projectDescription: params.projectDescription,
  };
}
