import React from 'react';
import { Card, StatCard } from './ui';
import { Calendar, FileText, Users, Home, TrendingUp, DollarSign, Briefcase, MessageSquare } from 'lucide-react';
import type { Visite, Mandat, Demande, Bien, Contact, Opportunite } from './types';

export default function DashboardTab({
  visites,
  mandats,
  demandes,
  biens,
  contacts,
  opportunites,
}: {
  visites: Visite[];
  mandats: Mandat[];
  demandes: Demande[];
  biens: Bien[];
  contacts: Contact[];
  opportunites: Opportunite[];
}) {
  const visitesPlanifiees = visites.filter((v) => v.statut === 'planifiée' || v.statut === 'confirmée').length;
  const visitesEffectuees = visites.filter((v) => v.statut === 'effectuée').length;
  const mandatsActifs = mandats.filter((m) => m.statut === 'actif').length;
  const mandatsCompromis = mandats.filter((m) => m.statut === 'compromis').length;
  const mandatsVendus = mandats.filter((m) => m.statut === 'vendu').length;
  const demandesNouvelles = demandes.filter((d) => d.statut === 'nouvelle').length;
  const biensDispo = biens.filter((b) => b.statut === 'disponible' || b.statut === 'nouveau').length;
  const biensSousOffre = biens.filter((b) => b.statut === 'sous_offre').length;
  const contactsProspects = contacts.filter((c) => c.statut === 'prospect').length;
  const pipelineGagne = opportunites.filter((o) => o.statut === 'gagne').length;
  const pipelineEnCours = opportunites.filter((o) => o.statut !== 'gagne' && o.statut !== 'perdu').length;

  const caPotentiel = mandatsActifs * 15000;
  const caRealise = mandatsVendus * 15000;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-[#f2f1e4]">Tableau de bord</h2>
        <p className="text-sm text-[#a9b8aa] mt-1">Vue d'ensemble de l'activité de l'agence</p>
      </div>

      {/* KPIs principaux */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Visites planifiées" value={visitesPlanifiees} icon={<Calendar size={24} />} />
        <StatCard label="Mandats actifs" value={mandatsActifs} icon={<FileText size={24} />} trend="ce mois" trendUp />
        <StatCard label="Demandes nouvelles" value={demandesNouvelles} icon={<MessageSquare size={24} />} />
        <StatCard label="Biens disponibles" value={biensDispo} icon={<Home size={24} />} />
      </div>

      {/* Deuxième ligne */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Contacts prospects" value={contactsProspects} icon={<Users size={24} />} />
        <StatCard label="Opportunités en cours" value={pipelineEnCours} icon={<Briefcase size={24} />} />
        <StatCard label="CA potentiel (€)" value={caPotentiel.toLocaleString('fr-FR')} icon={<TrendingUp size={24} />} />
        <StatCard label="CA réalisé (€)" value={caRealise.toLocaleString('fr-FR')} icon={<DollarSign size={24} />} trend="ce mois" trendUp />
      </div>

      {/* Récapitulatifs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-semibold text-[#f2f1e4] mb-4">Visites</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-[#a9b8aa]">Planifiées / Confirmées</span>
              <span className="text-[#f2f1e4] font-medium">{visitesPlanifiees}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#a9b8aa]">Effectuées</span>
              <span className="text-[#f2f1e4] font-medium">{visitesEffectuees}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#a9b8aa]">Total visites</span>
              <span className="text-[#f2f1e4] font-medium">{visites.length}</span>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-[#f2f1e4] mb-4">Mandats</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-[#a9b8aa]">Actifs</span>
              <span className="text-emerald-400 font-medium">{mandatsActifs}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#a9b8aa]">Compromis</span>
              <span className="text-purple-400 font-medium">{mandatsCompromis}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#a9b8aa]">Vendus</span>
              <span className="text-[#2BCA8F] font-medium">{mandatsVendus}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#a9b8aa]">Total mandats</span>
              <span className="text-[#f2f1e4] font-medium">{mandats.length}</span>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-[#f2f1e4] mb-4">Pipeline</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-[#a9b8aa]">En cours</span>
              <span className="text-[#f2f1e4] font-medium">{pipelineEnCours}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#a9b8aa]">Gagnées</span>
              <span className="text-[#2BCA8F] font-medium">{pipelineGagne}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#a9b8aa]">Total opportunités</span>
              <span className="text-[#f2f1e4] font-medium">{opportunites.length}</span>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-[#f2f1e4] mb-4">Biens</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-[#a9b8aa]">Disponibles / Nouveaux</span>
              <span className="text-emerald-400 font-medium">{biensDispo}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#a9b8aa]">Sous offre</span>
              <span className="text-orange-400 font-medium">{biensSousOffre}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#a9b8aa]">Total biens</span>
              <span className="text-[#f2f1e4] font-medium">{biens.length}</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
