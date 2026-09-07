export type NavSection =
  | 'inicio'
  | 'servicos'
  | 'simulador'
  | 'orcamento'
  | 'websites'
  | 'saas'
  | 'care'
  | 'portfolio'
  | 'processo'
  | 'sobre'
  | 'calculadora'
  | 'blog'
  | 'faq'
  | 'contactos'
  | 'admin'
  | 'cliente';

export type CurrentRoute =
  | '/'
  | '/simulador'
  | '/orcamento'
  | '/servicos'
  | '/admin'
  | '/cliente'
  | '/blog';

// ==========================================
// 1. DATABASE & CRM MODELS (Section 29)
// ==========================================

export type LeadStatus =
  | 'Novo'
  | 'Contactado'
  | 'Orçamento enviado'
  | 'Negociação'
  | 'Aprovado'
  | 'Recusado'
  | 'Concluído';

export interface Lead {
  id: string;
  clientName: string;
  companyName?: string;
  email: string;
  phone: string;
  service: string;
  projectType: string;
  complexity: string;
  scale?: string;
  urgency?: string;
  selectedFeatures: string[];
  estimatedMin: number;
  estimatedMax: number;
  estimatedRangeFormatted: string;
  estimatedDelivery: string;
  projectDescription: string;
  status: LeadStatus;
  createdAt: string;
  source: 'simulador' | 'orcamento' | 'contacto';
  internalNotes?: string;
}

export type ProjectStatus =
  | 'Briefing'
  | 'Planejamento'
  | 'Design'
  | 'Desenvolvimento'
  | 'Testes'
  | 'Entrega'
  | 'Concluído';

export interface ProjectTicket {
  id: string;
  subject: string;
  status: 'Aberto' | 'Em Análise' | 'Resolvido';
  date: string;
  messagesCount: number;
}

export interface ProjectDocument {
  id: string;
  title: string;
  type: 'PDF' | 'DOC' | 'LINK';
  date: string;
  size?: string;
  url?: string;
}

export interface Project {
  id: string;
  code: string; // Ex: TL-PRJ-2026-01
  title: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  service: string;
  description: string;
  value: string;
  valueNumeric?: number;
  deliveryDate: string;
  status: ProjectStatus;
  progressPercentage: number;
  startDate: string;
  documents: ProjectDocument[];
  tickets: ProjectTicket[];
}

export interface ServiceFeatureItem {
  id: string;
  name: string;
  description?: string;
  category?: string;
  baseCost: number;
  isPopular?: boolean;
}

export interface ServiceConfigItem {
  id: string;
  code: string;
  label: string;
  shortDesc: string;
  iconName: string;
  basePriceMin: number;
  basePriceMax: number;
  baseDeliveryWeeksMin: number;
  baseDeliveryWeeksMax: number;
  features: ServiceFeatureItem[];
  scaleQuestion: string;
  scaleOptions: {
    id: string;
    label: string;
    multiplier: number;
  }[];
  requiresTechnicalInspection?: boolean;
}

export interface SimulatorPricingConfig {
  services: ServiceConfigItem[];
  complexityMultipliers: {
    basico: number;
    intermediario: number;
    avancado: number;
    empresarial: number;
  };
  urgencyMultipliers: {
    semUrgencia: number;
    prazoNormal: number;
    prioridade: number;
    urgente: number;
  };
}

// ==========================================
// 2. ACADEMY & COURSES
// ==========================================

export interface AcademyCourse {
  id: string;
  title: string;
  category: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  durationWeeks: number;
  hoursPerWeek: number;
  basePricePerStudent: number;
  description: string;
  modalities: ('Online' | 'Presencial' | 'Híbrido')[];
}

export interface CourseEnrollment {
  id: string;
  studentName: string;
  studentEmail?: string;
  studentPhone: string;
  courseId?: string;
  courseTitle?: string;
  courseName?: string;
  level?: string;
  participants?: number;
  participantsCount?: number;
  totalEstimated?: number;
  totalPriceFormatted?: string;
  modality: 'Online' | 'Presencial' | 'Híbrido';
  status?: 'Pendente' | 'Confirmada' | 'Concluída';
  createdAt: string;
}

// ==========================================
// 3. BLOG & CONTENT (Section 26)
// ==========================================

export type BlogCategory =
  | 'Tecnologia'
  | 'Empreendedorismo'
  | 'Programação'
  | 'Marketing'
  | 'Importação'
  | 'Eletrónica';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: BlogCategory;
  summary: string;
  author: string;
  date: string;
  readTime: string;
  content: string[];
  imageUrl?: string;
}

// ==========================================
// 4. FAQ & INSTITUTIONAL (Section 27)
// ==========================================

export interface FAQItem {
  id?: string;
  question: string;
  answer: string;
  category: 'Geral' | 'Preços e Prazos' | 'Serviços' | 'Tecnologia';
}

export interface WebsitePackage {
  id: 'starter' | 'business' | 'professional' | 'premium';
  name: string;
  price: string;
  priceNumeric: number;
  badge?: string;
  isPopular?: boolean;
  tagline: string;
  description: string;
  pages: string;
  deliveryTime: string;
  maintenancePrice: string;
  maintenanceNumeric: number;
  targetAudience: string;
  features: string[];
  additionalHighlights: string[];
}

export interface CarePlan {
  id: 'essential' | 'business-care' | 'professional-care';
  name: string;
  price: string;
  priceNumeric: number;
  isRecommended?: boolean;
  description: string;
  features: string[];
  idealFor: string;
}

export interface BusinessPillar {
  id: 'digital-services' | 'saas' | 'electronics' | 'tech-repair';
  title: string;
  shortDescription: string;
  fullDescription: string;
  status: 'active' | 'in-development' | 'future';
  statusLabel: string;
  items: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  tag?: string;
  description: string;
  businessGoal: string;
  highlights: string[];
  metricsPreview: string;
  targetSector: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface ProjectBriefingData {
  projectType: string;
  needsEcommerce: boolean;
  needsAdminPanel: boolean;
  needsOnlinePayments: boolean;
  needsWhatsAppAutomation: boolean;
  needsUserAuth: boolean;
  budgetRange: string;
  clientName?: string;
  clientWhatsApp?: string;
}

export interface ContactFormData {
  fullName: string;
  companyName: string;
  whatsapp: string;
  email: string;
  projectType: string;
  approximateBudget: string;
  projectDescription: string;
}

// ==========================================
// 5. SIMULATOR RESULT MODEL
// ==========================================

export interface SimulatorCalculationResult {
  serviceId: string;
  serviceLabel: string;
  complexity: 'basico' | 'intermediario' | 'avancado' | 'empresarial';
  complexityLabel: string;
  selectedFeatures: string[];
  scaleId: string;
  scaleLabel: string;
  urgency: 'sem-urgencia' | 'normal' | 'prioridade' | 'urgente';
  urgencyLabel: string;
  minPriceKz: number;
  maxPriceKz: number;
  formattedRange: string;
  deliveryWeeksMin: number;
  deliveryWeeksMax: number;
  formattedDelivery: string;
  requiresTechnicalInspection: boolean;
  clientName: string;
  companyName?: string;
  clientEmail: string;
  clientPhone: string;
  projectDescription: string;
}
