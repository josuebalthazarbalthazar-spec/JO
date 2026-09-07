import {
  Lead,
  Project,
  SimulatorPricingConfig,
  FAQItem,
  BlogPost,
  CourseEnrollment,
} from '../types';
import { DEFAULT_SIMULATOR_CONFIG } from '../data/simulatorConfig';

const LEADS_STORAGE_KEY = 'techlab_leads_crm';
const PROJECTS_STORAGE_KEY = 'techlab_projects';
const CONFIG_STORAGE_KEY = 'techlab_simulator_config';
const ENROLLMENTS_STORAGE_KEY = 'techlab_enrollments';

// ----------------------------------------------------------------------
// LEADS & QUOTES MANAGEMENT
// ----------------------------------------------------------------------

export function getStoredLeads(): Lead[] {
  try {
    const raw = localStorage.getItem(LEADS_STORAGE_KEY);
    if (!raw) {
      return [];
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading leads from storage:', err);
    return [];
  }
}

export function saveLead(leadData: Omit<Lead, 'id' | 'createdAt'>): Lead {
  const existing = getStoredLeads();
  const newLead: Lead = {
    ...leadData,
    id: `LEAD-${Date.now().toString(36).toUpperCase()}`,
    createdAt: new Date().toISOString(),
  };

  const updated = [newLead, ...existing];
  try {
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Error saving lead to storage:', err);
  }
  return newLead;
}

export function updateLeadStatus(id: string, newStatus: Lead['status'], notes?: string): Lead | null {
  const existing = getStoredLeads();
  const index = existing.findIndex((l) => l.id === id);
  if (index === -1) return null;

  existing[index].status = newStatus;
  if (notes !== undefined) {
    existing[index].internalNotes = notes;
  }

  try {
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(existing));
  } catch (err) {
    console.error('Error updating lead:', err);
  }
  return existing[index];
}

export function deleteLead(id: string): boolean {
  const existing = getStoredLeads();
  const filtered = existing.filter((l) => l.id !== id);
  try {
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(filtered));
    return true;
  } catch (err) {
    console.error('Error deleting lead:', err);
    return false;
  }
}

// ----------------------------------------------------------------------
// PROJECTS MANAGEMENT (Section 17 & 18)
// ----------------------------------------------------------------------

export function getStoredProjects(): Project[] {
  try {
    const raw = localStorage.getItem(PROJECTS_STORAGE_KEY);
    if (!raw) {
      // Return empty array initially, or demo project if explicitly needed
      return [];
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading projects:', err);
    return [];
  }
}

export function saveProject(project: Omit<Project, 'id'>): Project {
  const existing = getStoredProjects();
  const newProject: Project = {
    ...project,
    id: `PRJ-${Date.now().toString(36).toUpperCase()}`,
  };

  const updated = [newProject, ...existing];
  try {
    localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Error saving project:', err);
  }
  return newProject;
}

// ----------------------------------------------------------------------
// SIMULATOR CONFIG (Section 34 & 35)
// ----------------------------------------------------------------------

export function getSimulatorConfig(): SimulatorPricingConfig {
  try {
    const raw = localStorage.getItem(CONFIG_STORAGE_KEY);
    if (!raw) return DEFAULT_SIMULATOR_CONFIG;
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading config:', err);
    return DEFAULT_SIMULATOR_CONFIG;
  }
}

export function saveSimulatorConfig(newConfig: SimulatorPricingConfig): void {
  try {
    localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(newConfig));
  } catch (err) {
    console.error('Error saving config:', err);
  }
}

export function resetSimulatorConfig(): SimulatorPricingConfig {
  try {
    localStorage.removeItem(CONFIG_STORAGE_KEY);
  } catch (err) {
    console.error('Error resetting config:', err);
  }
  return DEFAULT_SIMULATOR_CONFIG;
}

// ----------------------------------------------------------------------
// ACADEMY ENROLLMENTS
// ----------------------------------------------------------------------

export function getStoredEnrollments(): CourseEnrollment[] {
  try {
    const raw = localStorage.getItem(ENROLLMENTS_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (err) {
    return [];
  }
}

export function saveEnrollment(data: Omit<CourseEnrollment, 'id' | 'createdAt'>): CourseEnrollment {
  const existing = getStoredEnrollments();
  const item: CourseEnrollment = {
    ...data,
    id: `ACAD-${Date.now().toString(36).toUpperCase()}`,
    createdAt: new Date().toISOString(),
  };
  try {
    localStorage.setItem(ENROLLMENTS_STORAGE_KEY, JSON.stringify([item, ...existing]));
  } catch (err) {
    console.error('Error saving enrollment:', err);
  }
  return item;
}
