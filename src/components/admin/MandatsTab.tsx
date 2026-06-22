import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button, Card, Field, Modal, Select, TableBody, TableCell, TableHead, TableHeadCell, TableRow, TableShell, TextInput, TextArea, Badge } from './ui';
import { Plus, Pencil, Trash2, Search } from 'lucide-react';
import type { Mandat, MandatStatut } from './types';
import { MANDAT_STATUTS } from './types';

export default function MandatsTab() {
  const [mandats, setMandats] = useState<Mandat[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Mandat | null>(null);

  const [form, setForm] = useState<Partial<Mandat>>({
    reference: '',
    type_mandat: 'exclusif',
    statut: 'actif',
    date_signature: '',
    date_fin: '',
    duree_mois: 3,
    prix_net_vendeur: undefined,
    honoraires_pourcent: 5,
    adresse_bien: '',
    ville: '',
    type_bien: '',
    surface: undefined,
    nombre_pieces: undefined,
    vendeur_nom: '',
    vendeur_email: '',
    vendeur_telephone: '',
    notes: '',
  });

  React.useEffect(() => {
    loadMandats();
  }, []);

  async function loadMandats() {
    setLoading(true);
    const { data, error } = await supabase.from('mandats').select('*').order('created_at', { ascending: false });
    if (!error && data) setMandats(data as Mandat[]);
    setLoading(false);
  }

  function openCreate() {
    setEditing(null);
    setForm({
      reference: `M-${Date.now().toString(36).slice(-4).toUpperCase()}`,
      type_mandat: 'exclusif',
      statut: 'actif',
      date_signature: new Date().toISOString().slice(0, 10),
      date_fin: '',
      duree_mois: 3,
      prix_net_vendeur: undefined,
      honoraires_pourcent: 5,
      adresse_bien: '',
      ville: '',
      type_bien: '',
      surface: undefined,
      nombre_pieces: undefined,
      vendeur_nom: '',
      vendeur_email: '',
      vendeur_telephone: '',
      notes: '',
    });
    setModalOpen(true);
  }

  function openEdit(m: Mandat) {
    setEditing(m);
    setForm({ ...m });
    setModalOpen(true);
  }

  async function save() {
    if (!form.reference || !form.vendeur_nom) return;
    const payload = { ...form, updated_at: new Date().toISOString() };
    if (editing) {
      await supabase.from('mandats').update(payload).eq('id', editing.id);
    } else {
      await supabase.from('mandats').insert(payload);
    }
    setModalOpen(false);
    loadMandats();
  }

  async function remove(id: string) {
    if (!confirm('Supprimer ce mandat ?')) return;
    await supabase.from('mandats').delete().eq('id', id);
    loadMandats();
  }

  const filtered = mandats.filter(
    (m) =>
      m.reference.toLowerCase().includes(search.toLowerCase()) ||
      m.vendeur_nom?.toLowerCase().includes(search.toLowerCase()) ||
      m.ville?.toLowerCase().includes(search.toLowerCase()) ||
      m.adresse_bien?.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusColor = (s: MandatStatut) => MANDAT_STATUTS.find((x) => x.value === s)?.color || 'bg-gray-500/20 text-gray-400';
  const getStatusLabel = (s: MandatStatut) => MANDAT_STATUTS.find((x) => x.value === s)?.label || s;

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
        <h2 className="text-xl font-bold text-white">Mandats</h2>
        <Button onClick={openCreate}>
          <Plus size={16} className="mr-1" /> Nouveau mandat
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
        <TextInput
          placeholder="Rechercher par référence, vendeur, ville..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      {loading ? (
        <Card>Chargement...</Card>
      ) : (
        <TableShell>
          <TableHead>
            <TableHeadCell>Référence</TableHeadCell>
            <TableHeadCell>Vendeur</TableHeadCell>
            <TableHeadCell>Type</TableHeadCell>
            <TableHeadCell>Adresse</TableHeadCell>
            <TableHeadCell>Ville</TableHeadCell>
            <TableHeadCell>Prix net</TableHeadCell>
            <TableHeadCell>Statut</TableHeadCell>
            <TableHeadCell className="text-right">Actions</TableHeadCell>
          </TableHead>
          <TableBody>
            {filtered.map((m) => (
              <TableRow key={m.id} onClick={() => openEdit(m)}>
                <TableCell className="font-mono text-[#C9A84C]">{m.reference}</TableCell>
                <TableCell className="font-medium">{m.vendeur_nom || '-'}</TableCell>
                <TableCell>
                  <span className="text-gray-300">{m.type_mandat}</span>
                </TableCell>
                <TableCell>{m.adresse_bien || '-'}</TableCell>
                <TableCell>{m.ville || '-'}</TableCell>
                <TableCell>{m.prix_net_vendeur ? `${m.prix_net_vendeur.toLocaleString('fr-FR')} €` : '-'}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(m.statut)}>{getStatusLabel(m.statut)}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex gap-2 justify-end" onClick={(e) => e.stopPropagation()}>
                    <Button variant="ghost" size="sm" onClick={() => openEdit(m)}>
                      <Pencil size={14} />
                    </Button>
                    <Button variant="danger" size="sm" onClick={() => remove(m.id)}>
                      <Trash2 size={14} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {filtered.length === 0 && (
              <TableRow>
                <TableCell colSpan={8} className="text-center text-gray-500 py-8">
                  Aucun mandat trouvé
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </TableShell>
      )}

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? 'Modifier le mandat' : 'Nouveau mandat'} size="xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Référence *">
            <TextInput value={form.reference || ''} onChange={(e) => setForm({ ...form, reference: e.target.value })} />
          </Field>
          <Field label="Type de mandat">
            <Select
              value={form.type_mandat || 'exclusif'}
              onChange={(v) => setForm({ ...form, type_mandat: v as 'exclusif' | 'semi-exclusif' | 'simple' | 'recherche' })}
              options={[
                { value: 'exclusif', label: 'Exclusif' },
                { value: 'semi-exclusif', label: 'Semi-exclusif' },
                { value: 'simple', label: 'Simple' },
                { value: 'recherche', label: 'Recherche' },
              ]}
            />
          </Field>
          <Field label="Statut">
            <Select
              value={form.statut || 'actif'}
              onChange={(v) => setForm({ ...form, statut: v as MandatStatut })}
              options={MANDAT_STATUTS.map((s) => ({ value: s.value, label: s.label }))}
            />
          </Field>
          <Field label="Date de signature">
            <TextInput type="date" value={form.date_signature || ''} onChange={(e) => setForm({ ...form, date_signature: e.target.value })} />
          </Field>
          <Field label="Date de fin">
            <TextInput type="date" value={form.date_fin || ''} onChange={(e) => setForm({ ...form, date_fin: e.target.value })} />
          </Field>
          <Field label="Durée (mois)">
            <TextInput type="number" value={form.duree_mois || ''} onChange={(e) => setForm({ ...form, duree_mois: Number(e.target.value) || undefined })} />
          </Field>
          <Field label="Prix net vendeur (€)">
            <TextInput type="number" value={form.prix_net_vendeur || ''} onChange={(e) => setForm({ ...form, prix_net_vendeur: Number(e.target.value) || undefined })} />
          </Field>
          <Field label="Honoraires (%)">
            <TextInput type="number" value={form.honoraires_pourcent || ''} onChange={(e) => setForm({ ...form, honoraires_pourcent: Number(e.target.value) || undefined })} />
          </Field>
          <Field label="Nom vendeur *">
            <TextInput value={form.vendeur_nom || ''} onChange={(e) => setForm({ ...form, vendeur_nom: e.target.value })} />
          </Field>
          <Field label="Email vendeur">
            <TextInput type="email" value={form.vendeur_email || ''} onChange={(e) => setForm({ ...form, vendeur_email: e.target.value })} />
          </Field>
          <Field label="Téléphone vendeur">
            <TextInput value={form.vendeur_telephone || ''} onChange={(e) => setForm({ ...form, vendeur_telephone: e.target.value })} />
          </Field>
          <Field label="Adresse du bien">
            <TextInput value={form.adresse_bien || ''} onChange={(e) => setForm({ ...form, adresse_bien: e.target.value })} />
          </Field>
          <Field label="Ville">
            <TextInput value={form.ville || ''} onChange={(e) => setForm({ ...form, ville: e.target.value })} />
          </Field>
          <Field label="Type de bien">
            <TextInput value={form.type_bien || ''} onChange={(e) => setForm({ ...form, type_bien: e.target.value })} placeholder="Maison, Appartement..." />
          </Field>
          <Field label="Surface (m²)">
            <TextInput type="number" value={form.surface || ''} onChange={(e) => setForm({ ...form, surface: Number(e.target.value) || undefined })} />
          </Field>
          <Field label="Nombre de pièces">
            <TextInput type="number" value={form.nombre_pieces || ''} onChange={(e) => setForm({ ...form, nombre_pieces: Number(e.target.value) || undefined })} />
          </Field>
        </div>
        <div className="mt-4">
          <Field label="Notes">
            <TextArea rows={3} value={form.notes || ''} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
          </Field>
        </div>
        <div className="flex justify-end gap-2 mt-6">
          <Button variant="secondary" onClick={() => setModalOpen(false)}>Annuler</Button>
          <Button onClick={save}>{editing ? 'Enregistrer' : 'Créer'}</Button>
        </div>
      </Modal>
    </div>
  );
}
