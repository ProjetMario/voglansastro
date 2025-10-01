import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatSurface(surface: number): string {
  return `${surface} m²`;
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function formatDateShort(date: Date): string {
  return new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function truncate(text: string, length: number = 150): string {
  if (text.length <= length) return text;
  return text.substring(0, length).trim() + '...';
}

export function getEnergyColor(energy: string): string {
  const colors = {
    A: 'bg-green-500',
    B: 'bg-green-400',
    C: 'bg-yellow-400',
    D: 'bg-yellow-500',
    E: 'bg-orange-400',
    F: 'bg-orange-500',
    G: 'bg-red-500',
  };
  return colors[energy as keyof typeof colors] || 'bg-gray-400';
}

export function getBadgeVariant(badge: string): string {
  const variants = {
    nouveau: 'badge-success',
    exclusivite: 'badge-primary',
    vendu: 'badge-secondary',
    'sous-offre': 'badge-warning',
  };
  return variants[badge as keyof typeof variants] || 'badge-secondary';
}

export function getBadgeLabel(badge: string): string {
  const labels = {
    nouveau: 'Nouveau',
    exclusivite: 'Exclusivité',
    vendu: 'Vendu',
    'sous-offre': 'Sous offre',
  };
  return labels[badge as keyof typeof labels] || badge;
}

// Configuration du site
export const siteConfig = {
  name: "L'Agence de Voglans",
  description: "Agence immobilière 100% locale & Humaine en Savoie",
  url: "https://agencevoglans.fr",
  contact: {
    phone: "07 57 83 02 62",
    email: "contact@agencevoglans.fr",
    address: "93 chemin de la combe, 73420 Voglans",
    hours: "Lun-Ven 9h-18h",
  },
  social: {
    facebook: "https://facebook.com/agencevoglans",
    instagram: "https://instagram.com/agencevoglans",
    linkedin: "https://linkedin.com/company/agence-voglans",
  },
};
