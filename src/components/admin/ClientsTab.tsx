import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button, Card, Field, Modal, Select, TableBody, TableCell, TableHead, TableHeadCell, TableRow, TableShell, TextInput, TextArea, Badge } from './ui';
import { Plus, Pencil, Trash2, Search, UserPlus } from 'lucide-react';
import type { Contact, Opportunite, PipelineStatut } from './types';
import { PIPELINE_STATUTS } from './types';

export default function ClientsTab() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [opportunites, setOpportunites] = useState<Opportunite[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [activeSubTab, setActiveSubTab] = useState<'contacts' | 'opportunites' | 'pipeline'>('contacts');

  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [oppModalOpen, setOppModalOpen] = useState(false);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const [editingOpp, setEditingOpp] = useState<Opportunite | null>(null);

  const [contactForm, setContactForm] = useState<Partial<Contact>>({
    nom: '', prenom: '', email: '', telephone: '', type_contact: 'acheteur', statut: 'prospect', notes: '',
  });

  const [oppForm, setOppForm] = useState<Partial<Opportunite>>({
    type_opportunite: 'achat', statut: 'prospect', titre: '', description: '', valeur_estimee: undefined, notes: '',
  });

  React.useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    setLoading(true);
    const [contactsRes, oppsRes] = await Promise.all([
      supabase.from('contacts').select('*').order('created_at', { ascending: false }),
      supabase.from('opportunites').select('*').order('created_at', { ascending: false }),
    ]);
    if (!contactsRes.error && contactsRes.data) setContacts(contactsRes.data as Contact[]);
    if (!oppsRes.error && oppsRes.data) setOpportunites(oppsRes.data as Opportunite[]);
    setLoading(false);
  }

  function openCreateContact() {
    setEditingContact(null);
    setContactForm({ nom: '', prenom: '', email: '', telephone: '', type_contact: 'acheteur', statut: 'prospect', notes: '' });
    setContactModalOpen(true);
  }

  function openEditContact(c: Contact) {
    setEditingContact(c);
    setContactForm({ ...c });
    setContactModalOpen(true);
  }

  async function saveContact() {
    if (!contactForm.nom) return;
    const payload = { ...contactForm, updated_at: new Date().toISOString() };
    if (editingContact) {
      await supabase.from('contacts').update(payload).eq('id', editingContact.id);
    } else {
      await supabase.from('contacts').insert(payload);
    }
    setContactModalOpen(false);
    loadData();
  }

  async function removeContact(id: string) {
    if (!confirm('Supprimer ce contact ?')) return;
    await supabase.from('contacts').delete().eq('id', id);
    loadData();
  }

  function openCreateOpp() {
    setEditingOpp(null);
    setOppForm({ type_opportunite: 'achat', statut: 'prospect', titre: '', description: '', valeur_estimee: undefined, notes: '' });
    setOppModalOpen(true);
  }

  function openEditOpp(o: Opportunite) {
    setEditingOpp(o);
    setOppForm({ ...o });
    setOppModalOpen(true);
  }

  async function saveOpp() {
    if (!oppForm.titre) return;
    const payload = { ...oppForm, updated_at: new Date().toISOString() };
    if (editingOpp) {
      await supabase.from('opportunites').update(payload).eq('id', editingOpp.id);
    } else {
      await supabase.from('opportunites').insert(payload);
    }
    setOppModalOpen(false);
    loadData();
  }

  async function removeOpp(id: string) {
    if (!confirm('Supprimer cette opportunité ?')) return;
    await supabase.from('opportunites').delete().eq('id', id);
    loadData();
  }

  const filteredContacts = contacts.filter(
    (c) =>
      (c.nom && c.nom.toLowerCase().includes(search.toLowerCase())) ||
      (c.email && c.email.toLowerCase().includes(search.toLowerCase())) ||
      (c.ville && c.ville.toLowerCase().includes(search.toLowerCase()))
  );

  const filteredOpps = opportunites.filter(
    (o) =>
      (o.titre && o.titre.toLowerCase().includes(search.toLowerCase())) ||
      (o.contact_nom && o.contact_nom.toLowerCase().includes(search.toLowerCase())) ||
      (o.type_opportunite && o.type_opportunite.toLowerCase().includes(search.toLowerCase()))
  );

  const getStatusColor = (s: PipelineStatut) => PIPELINE_STATUTS.find((x) => x.value === s)?.color || 'bg-gray-500/20 text-[#a9b8aa]';
  const getStatusLabel = (s: PipelineStatut) => PIPELINE_STATUTS.find((x) => x.value === s)?.label || s;

  const getAgenceBadge = (source?: string | null) => {
    const is2Savoie = source && source.toLowerCase().includes('2 savoie');
    return is2Savoie
      ? { label: '2 Savoie', className: 'bg-amber-500/15 text-amber-400 border border-amber-500/20' }
      : { label: 'Voglans', className: 'bg-[#2BCA8F]/15 text-[#2BCA8F] border border-[#2BCA8F]/20' };
  };

  const pipelineCounts = PIPELINE_STATUTS.map((s) => ({
    ...s,
    count: opportunites.filter((o) => o.statut === s.value).length,
  }));

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
        <h2 className="text-xl font-bold text-[#f2f1e4]">CRM — Clients & Opportunités</h2>
        <div className="flex gap-2">
          {activeSubTab === 'contacts' && (
            <Button onClick={openCreateContact}>
              <UserPlus size={16} className="mr-1" /> Contact
            </Button>
          )}
          {activeSubTab === 'opportunites' && (
            <Button onClick={openCreateOpp}>
              <Plus size={16} className="mr-1" /> Opportunité
            </Button>
          )}
        </div>
      </div>

      <div className="flex gap-2 border-b border-[#f2f1e4]/10 pb-1">
        {(['contacts', 'opportunites', 'pipeline'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setActiveSubTab(t)}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
              activeSubTab === t
                ? 'text-[#2BCA8F] border-b-2 border-[#2BCA8F]'
                : 'text-[#a9b8aa] hover:text-[#f2f1e4]'
            }`}
          >
            {t === 'contacts' ? 'Contacts' : t === 'opportunites' ? 'Opportunités' : 'Pipeline'}
          </button>
        ))}
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6f8174]" size={16} />
        <TextInput
          placeholder="Rechercher..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      {loading ? (
        <Card>Chargement...</Card>
      ) : activeSubTab === 'contacts' ? (
        <TableShell>
          <TableHead>
            <TableHeadCell>Nom</TableHeadCell>
            <TableHeadCell>Type</TableHeadCell>
            <TableHeadCell>Email</TableHeadCell>
            <TableHeadCell>Téléphone</TableHeadCell>
            <TableHeadCell>Ville</TableHeadCell>
            <TableHeadCell>Statut</TableHeadCell>
            <TableHeadCell>Agence</TableHeadCell>
            <TableHeadCell className="text-right">Actions</TableHeadCell>
          </TableHead>
          <TableBody>
            {filteredContacts.map((c) => (
              <TableRow key={c.id} onClick={() => openEditContact(c)}>
                <TableCell className="font-medium">{c.prenom ? `${c.prenom} ${c.nom}` : c.nom}</TableCell>
                <TableCell>{c.type_contact}</TableCell>
                <TableCell>{c.email || '-'}</TableCell>
                <TableCell>{c.telephone || '-'}</TableCell>
                <TableCell>{c.ville || '-'}</TableCell>
                <TableCell>
                  <Badge className={
                    c.statut === 'client' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' :
                    c.statut === 'prospect' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                    'bg-gray-500/20 text-[#a9b8aa] border-gray-500/30'
                  }>{c.statut}</Badge>
                </TableCell>
                <TableCell>
                  {(() => {
                    const a = getAgenceBadge(c.source);
                    return <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${a.className}`}>{a.label}</span>;
                  })()}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex gap-2 justify-end" onClick={(e) => e.stopPropagation()}>
                    <Button variant="ghost" size="sm" onClick={() => openEditContact(c)}><Pencil size={14} /></Button>
                    <Button variant="danger" size="sm" onClick={() => removeContact(c.id)}><Trash2 size={14} /></Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {filteredContacts.length === 0 && (
              <TableRow><TableCell colSpan={8} className="text-center text-[#6f8174] py-8">Aucun contact trouvé</TableCell></TableRow>
            )}
          </TableBody>
        </TableShell>
      ) : activeSubTab === 'opportunites' ? (
        <TableShell>
          <TableHead>
            <TableHeadCell>Titre</TableHeadCell>
            <TableHeadCell>Type</TableHeadCell>
            <TableHeadCell>Contact</TableHeadCell>
            <TableHeadCell>Valeur estimée</TableHeadCell>
            <TableHeadCell>Statut</TableHeadCell>
            <TableHeadCell>Agence</TableHeadCell>
            <TableHeadCell className="text-right">Actions</TableHeadCell>
          </TableHead>
          <TableBody>
            {filteredOpps.map((o) => (
              <TableRow key={o.id} onClick={() => openEditOpp(o)}>
                <TableCell className="font-medium">{o.titre || '-'}</TableCell>
                <TableCell>{o.type_opportunite}</TableCell>
                <TableCell>{o.contact_nom || '-'}</TableCell>
                <TableCell>{o.valeur_estimee ? `${o.valeur_estimee.toLocaleString('fr-FR')} €` : '-'}</TableCell>
                <TableCell><Badge className={getStatusColor(o.statut)}>{getStatusLabel(o.statut)}</Badge></TableCell>
                <TableCell>
                  {(() => {
                    const a = getAgenceBadge(o.source);
                    return <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${a.className}`}>{a.label}</span>;
                  })()}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex gap-2 justify-end" onClick={(e) => e.stopPropagation()}>
                    <Button variant="ghost" size="sm" onClick={() => openEditOpp(o)}><Pencil size={14} /></Button>
                    <Button variant="danger" size="sm" onClick={() => removeOpp(o.id)}><Trash2 size={14} /></Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {filteredOpps.length === 0 && (
              <TableRow><TableCell colSpan={7} className="text-center text-[#6f8174] py-8">Aucune opportunité trouvée</TableCell></TableRow>
            )}
          </TableBody>
        </TableShell>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {pipelineCounts.map((s) => (
            <Card key={s.value} className="text-center">
              <p className="text-[#a9b8aa] text-xs mb-1">{s.label}</p>
              <p className="text-2xl font-bold text-[#f2f1e4]">{s.count}</p>
              <div className={`mt-2 h-1 rounded-full ${s.color.split(' ')[0].replace('/20', '')} w-full`} />
            </Card>
          ))}
        </div>
      )}

      {/* Contact Modal */}
      <Modal open={contactModalOpen} onClose={() => setContactModalOpen(false)} title={editingContact ? 'Modifier le contact' : 'Nouveau contact'} size="lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Nom *"><TextInput value={contactForm.nom || ''} onChange={(e) => setContactForm({ ...contactForm, nom: e.target.value })} /></Field>
          <Field label="Prénom"><TextInput value={contactForm.prenom || ''} onChange={(e) => setContactForm({ ...contactForm, prenom: e.target.value })} /></Field>
          <Field label="Email"><TextInput type="email" value={contactForm.email || ''} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} /></Field>
          <Field label="Téléphone"><TextInput value={contactForm.telephone || ''} onChange={(e) => setContactForm({ ...contactForm, telephone: e.target.value })} /></Field>
          <Field label="Type">
            <Select value={contactForm.type_contact || 'acheteur'} onChange={(v) => setContactForm({ ...contactForm, type_contact: v as Contact['type_contact'] })} options={[
              { value: 'acheteur', label: 'Acheteur' }, { value: 'vendeur', label: 'Vendeur' }, { value: 'locataire', label: 'Locataire' },
              { value: 'proprietaire', label: 'Propriétaire' }, { value: 'investisseur', label: 'Investisseur' }, { value: 'notaire', label: 'Notaire' },
              { value: 'partenaire', label: 'Partenaire' }, { value: 'autre', label: 'Autre' },
            ]} />
          </Field>
          <Field label="Statut">
            <Select value={contactForm.statut || 'prospect'} onChange={(v) => setContactForm({ ...contactForm, statut: v as Contact['statut'] })} options={[
              { value: 'actif', label: 'Actif' }, { value: 'inactif', label: 'Inactif' }, { value: 'prospect', label: 'Prospect' },
              { value: 'client', label: 'Client' }, { value: 'archive', label: 'Archive' },
            ]} />
          </Field>
          <Field label="Ville"><TextInput value={contactForm.ville || ''} onChange={(e) => setContactForm({ ...contactForm, ville: e.target.value })} /></Field>
          <Field label="Budget max (€)"><TextInput type="number" value={contactForm.budget_max || ''} onChange={(e) => setContactForm({ ...contactForm, budget_max: Number(e.target.value) || undefined })} /></Field>
        </div>
        <div className="mt-4"><Field label="Notes"><TextArea rows={3} value={contactForm.notes || ''} onChange={(e) => setContactForm({ ...contactForm, notes: e.target.value })} /></Field></div>
        <div className="flex justify-end gap-2 mt-6">
          <Button variant="secondary" onClick={() => setContactModalOpen(false)}>Annuler</Button>
          <Button onClick={saveContact}>{editingContact ? 'Enregistrer' : 'Créer'}</Button>
        </div>
      </Modal>

      {/* Opportunite Modal */}
      <Modal open={oppModalOpen} onClose={() => setOppModalOpen(false)} title={editingOpp ? "Modifier l'opportunité" : 'Nouvelle opportunité'} size="lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Titre *"><TextInput value={oppForm.titre || ''} onChange={(e) => setOppForm({ ...oppForm, titre: e.target.value })} /></Field>
          <Field label="Type">
            <Select value={oppForm.type_opportunite || 'achat'} onChange={(v) => setOppForm({ ...oppForm, type_opportunite: v as Opportunite['type_opportunite'] })} options={[
              { value: 'achat', label: 'Achat' }, { value: 'vente', label: 'Vente' }, { value: 'location', label: 'Location' },
              { value: 'investissement', label: 'Investissement' }, { value: 'estimation', label: 'Estimation' }, { value: 'autre', label: 'Autre' },
            ]} />
          </Field>
          <Field label="Statut">
            <Select value={oppForm.statut || 'prospect'} onChange={(v) => setOppForm({ ...oppForm, statut: v as PipelineStatut })} options={PIPELINE_STATUTS.map((s) => ({ value: s.value, label: s.label }))} />
          </Field>
          <Field label="Valeur estimée (€)"><TextInput type="number" value={oppForm.valeur_estimee || ''} onChange={(e) => setOppForm({ ...oppForm, valeur_estimee: Number(e.target.value) || undefined })} /></Field>
          <Field label="Contact associé"><TextInput value={oppForm.contact_nom || ''} onChange={(e) => setOppForm({ ...oppForm, contact_nom: e.target.value })} /></Field>
          <Field label="Date de clôture attendue"><TextInput type="date" value={oppForm.date_cloture_attendue || ''} onChange={(e) => setOppForm({ ...oppForm, date_cloture_attendue: e.target.value })} /></Field>
        </div>
        <div className="mt-4"><Field label="Description"><TextArea rows={3} value={oppForm.description || ''} onChange={(e) => setOppForm({ ...oppForm, description: e.target.value })} /></Field></div>
        <div className="mt-4"><Field label="Notes"><TextArea rows={2} value={oppForm.notes || ''} onChange={(e) => setOppForm({ ...oppForm, notes: e.target.value })} /></Field></div>
        <div className="flex justify-end gap-2 mt-6">
          <Button variant="secondary" onClick={() => setOppModalOpen(false)}>Annuler</Button>
          <Button onClick={saveOpp}>{editingOpp ? 'Enregistrer' : 'Créer'}</Button>
        </div>
      </Modal>
    </div>
  );
}
