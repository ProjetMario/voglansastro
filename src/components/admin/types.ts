export interface Visite {
  id: string;
  created_at: string;
  updated_at?: string;
  date_visite: string;
  heure_visite?: string;
  nom: string;
  email?: string;
  telephone?: string;
  adresse_bien?: string;
  ville?: string;
  type_bien?: string;
  surface?: number;
  prix?: number;
  statut: VisiteStatut;
  agence?: string;
  notes?: string;
  agent_id?: string;
  bien_id?: string;
  mandat_id?: string;
  source?: string;
  // Champs hérités du système 2 Savoie
  property_ref?: string;
  property_label?: string;
  visiteur_nom?: string;
  visiteur_email?: string;
  visiteur_telephone?: string;
  agent?: string;
  niveau_interet?: string;
  feedback?: string;
  suite_a_donner?: string;
}

export type VisiteStatut =
  | 'planifiée'
  | 'confirmée'
  | 'effectuée'
  | 'annulée'
  | 'reportée'
  | 'no-show';

export const VISITE_STATUTS: { value: VisiteStatut; label: string; color: string }[] = [
  { value: 'planifiée', label: 'Planifiée', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
  { value: 'confirmée', label: 'Confirmée', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
  { value: 'effectuée', label: 'Effectuée', color: 'bg-green-500/20 text-green-500 border-green-500/30' },
  { value: 'annulée', label: 'Annulée', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
  { value: 'reportée', label: 'Reportée', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
  { value: 'no-show', label: 'No-show', color: 'bg-gray-500/20 text-gray-400 border-gray-500/30' },
];

export interface Mandat {
  id: string;
  created_at: string;
  updated_at?: string;
  /** @deprecated Utiliser numero (structure 2 Savoie) */
  reference?: string;
  numero?: string;
  type_mandat?: 'exclusif' | 'semi-exclusif' | 'simple' | 'recherche';
  /** @deprecated Utiliser type (structure 2 Savoie) */
  type?: string;
  statut: MandatStatut;
  date_signature?: string;
  date_fin?: string;
  date_echeance?: string;
  duree_mois?: number;
  prix_net_vendeur?: number;
  prix?: number;
  honoraires_pourcent?: number;
  honoraires_montant?: number;
  honoraires?: number;
  prix_total?: number;
  bien_id?: string;
  property_ref?: string;
  vendeur_id?: string;
  vendeur_nom?: string;
  mandant?: string;
  vendeur_email?: string;
  vendeur_telephone?: string;
  adresse_bien?: string;
  property_adresse?: string;
  ville?: string;
  type_bien?: string;
  surface?: number;
  nombre_pieces?: number;
  description?: string;
  agent_id?: string;
  agence?: string;
  notes?: string;
  documents?: string[];
}

export type MandatStatut =
  | 'actif'
  | 'en_signature'
  | 'a_renouveler'
  | 'expire'
  | 'resilie'
  | 'vendu'
  | 'compromis';

export const MANDAT_STATUTS: { value: MandatStatut; label: string; color: string }[] = [
  { value: 'actif', label: 'Actif', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
  { value: 'en_signature', label: 'En signature', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
  { value: 'a_renouveler', label: 'À renouveler', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
  { value: 'expire', label: 'Expiré', color: 'bg-gray-500/20 text-gray-400 border-gray-500/30' },
  { value: 'resilie', label: 'Résilié', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
  { value: 'vendu', label: 'Vendu', color: 'bg-green-500/20 text-green-500 border-green-500/30' },
  { value: 'compromis', label: 'Compromis', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
];

export interface Demande {
  id: string;
  created_at: string;
  updated_at?: string;
  nom: string;
  email?: string;
  telephone?: string;
  type_demande?: DemandeType;
  /** @deprecated Utiliser type (structure 2 Savoie) */
  type?: string;
  statut: DemandeStatut;
  ville_souhaitee?: string;
  message?: string;
  page_source?: string;
  budget_min?: number;
  budget_max?: number;
  surface_min?: number;
  surface_max?: number;
  nombre_pieces?: string;
  type_bien?: string;
  urgence?: 'faible' | 'moyenne' | 'forte' | 'critique';
  commentaire?: string;
  agent_id?: string;
  source?: string;
  agence?: string;
}

export type DemandeType =
  | 'achat'
  | 'vente'
  | 'estimation'
  | 'location'
  | 'investissement'
  | 'recherche'
  | 'renseignement'
  | 'autre';

export type DemandeStatut =
  | 'nouvelle'
  | 'en_traitement'
  | 'qualifiee'
  | 'rendez_vous_pris'
  | 'mandat_signe'
  | 'offre_en_cours'
  | 'compromis'
  | 'acte_signe'
  | 'perdue'
  | 'archivee';

export const DEMANDE_TYPES: { value: DemandeType; label: string }[] = [
  { value: 'achat', label: 'Achat' },
  { value: 'vente', label: 'Vente' },
  { value: 'estimation', label: 'Estimation' },
  { value: 'location', label: 'Location' },
  { value: 'investissement', label: 'Investissement' },
  { value: 'recherche', label: 'Recherche' },
  { value: 'renseignement', label: 'Renseignement' },
  { value: 'autre', label: 'Autre' },
];

export const DEMANDE_STATUTS: { value: DemandeStatut; label: string; color: string }[] = [
  { value: 'nouvelle', label: 'Nouvelle', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
  { value: 'en_traitement', label: 'En traitement', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
  { value: 'qualifiee', label: 'Qualifiée', color: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30' },
  { value: 'rendez_vous_pris', label: 'RDV pris', color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' },
  { value: 'mandat_signe', label: 'Mandat signé', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
  { value: 'offre_en_cours', label: 'Offre en cours', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
  { value: 'compromis', label: 'Compromis', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
  { value: 'acte_signe', label: 'Acte signé', color: 'bg-green-500/20 text-green-500 border-green-500/30' },
  { value: 'perdue', label: 'Perdue', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
  { value: 'archivee', label: 'Archivée', color: 'bg-gray-500/20 text-gray-400 border-gray-500/30' },
];

export interface Bien {
  id: string;
  created_at: string;
  updated_at?: string;
  reference: string;
  titre: string;
  description?: string;
  type_bien: string;
  statut: BienStatut;
  adresse?: string;
  ville?: string;
  code_postal?: string;
  surface_habitable?: number;
  surface_terrain?: number;
  nombre_pieces?: number;
  nombre_chambres?: number;
  etage?: number;
  nombre_etages?: number;
  ascenseur?: boolean;
  balcon?: boolean;
  terrasse?: boolean;
  jardin?: boolean;
  garage?: boolean;
  parking?: boolean;
  cave?: boolean;
  prix?: number;
  prix_m2?: number;
  charges_annuelles?: number;
  taxe_fonciere?: number;
  dpe?: string;
  ges?: string;
  annee_construction?: number;
  exposition?: string;
  vue?: string;
  etat_general?: string;
  mandat_id?: string;
  photos?: string[];
  video?: string;
  virtual_tour?: string;
  honoraires_agence?: number;
  honoraires_pourcent?: number;
  net_vendeur?: number;
  agent_id?: string;
  notes_agent?: string;
  date_disponibilite?: string;
  date_mise_en_ligne?: string;
}

export type BienStatut =
  | 'disponible'
  | 'sous_offre'
  | 'compromis'
  | 'vendu'
  | 'suspendu'
  | 'retire'
  | 'nouveau';

export const BIEN_STATUTS: { value: BienStatut; label: string; color: string }[] = [
  { value: 'disponible', label: 'Disponible', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
  { value: 'sous_offre', label: 'Sous offre', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
  { value: 'compromis', label: 'Compromis', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
  { value: 'vendu', label: 'Vendu', color: 'bg-green-500/20 text-green-500 border-green-500/30' },
  { value: 'suspendu', label: 'Suspendu', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
  { value: 'retire', label: 'Retiré', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
  { value: 'nouveau', label: 'Nouveau', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
];

export interface Contact {
  id: string;
  created_at: string;
  updated_at?: string;
  nom: string;
  prenom?: string;
  email?: string;
  telephone?: string;
  telephone_2?: string;
  adresse?: string;
  ville?: string;
  code_postal?: string;
  type_contact: 'acheteur' | 'vendeur' | 'locataire' | 'proprietaire' | 'investisseur' | 'notaire' | 'partenaire' | 'autre';
  statut: 'actif' | 'inactif' | 'prospect' | 'client' | 'archive';
  source?: string;
  notes?: string;
  date_naissance?: string;
  profession?: string;
  revenus?: number;
  apport?: number;
  besoin_financement?: boolean;
  preteur?: string;
  montant_pret?: number;
  budget_max?: number;
  ville_recherchee?: string;
  type_bien_recherche?: string;
  surface_min?: number;
  nombre_pieces_min?: number;
  urgence?: 'faible' | 'moyenne' | 'forte';
  derniere_prise_contact?: string;
  prochaine_action?: string;
  agent_id?: string;
}

export interface Opportunite {
  id: string;
  created_at: string;
  updated_at?: string;
  contact_id?: string;
  contact_nom?: string;
  type_opportunite: 'achat' | 'vente' | 'location' | 'investissement' | 'estimation' | 'autre';
  statut: PipelineStatut;
  titre?: string;
  description?: string;
  valeur_estimee?: number;
  commission_estimee?: number;
  date_cloture_attendue?: string;
  date_gagnee?: string;
  date_perdue?: string;
  raison_perte?: string;
  mandat_id?: string;
  bien_id?: string;
  agent_id?: string;
  source?: string;
  notes?: string;
}

export type PipelineStatut =
  | 'prospect'
  | 'contact'
  | 'qualification'
  | 'visite'
  | 'offre'
  | 'negociation'
  | 'compromis'
  | 'acte'
  | 'gagne'
  | 'perdu';

export const PIPELINE_STATUTS: { value: PipelineStatut; label: string; color: string }[] = [
  { value: 'prospect', label: 'Prospect', color: 'bg-gray-500/20 text-gray-400 border-gray-500/30' },
  { value: 'contact', label: 'Contact', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
  { value: 'qualification', label: 'Qualification', color: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30' },
  { value: 'visite', label: 'Visite', color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' },
  { value: 'offre', label: 'Offre', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
  { value: 'negociation', label: 'Négociation', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
  { value: 'compromis', label: 'Compromis', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
  { value: 'acte', label: 'Acte', color: 'bg-pink-500/20 text-pink-400 border-pink-500/30' },
  { value: 'gagne', label: 'Gagné', color: 'bg-green-500/20 text-green-500 border-green-500/30' },
  { value: 'perdu', label: 'Perdu', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
];

export type AdminTab =
  | 'dashboard'
  | 'visites'
  | 'mandats'
  | 'demandes'
  | 'biens'
  | 'documents'
  | 'clients'
  | 'fichiers';

export interface Profile {
  id: string;
  email: string;
  nom?: string;
  prenom?: string;
  telephone?: string;
  role: 'admin' | 'agent' | 'collaborateur';
  avatar_url?: string;
  created_at: string;
}
