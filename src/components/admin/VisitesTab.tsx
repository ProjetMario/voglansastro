import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button, Card, Field, Modal, Select, TableBody, TableCell, TableHead, TableHeadCell, TableRow, TableShell, TextInput, TextArea, Badge } from './ui';
import { Plus, Pencil, Trash2, Search } from 'lucide-react';
import type { Visite, VisiteStatut } from './types';
import { VISITE_STATUTS } from './types';

export default function VisitesTab() {
  const [visites, setVisites] = useState<Visite[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Visite | null>(null);

  const [form, setForm] = useState<Partial<Visite>>({
    statut: 'planifiée',
    date_visite: '',
    heure_visite: '',
    nom: '',
    email: '',
    telephone: '',
    adresse_bien: '',
    ville: '',
    type_bien: '',
    surface: undefined,
    prix: undefined,
    notes: '',
  });

  React.useEffect(() => {
    loadVisites();
  }, []);

  async function loadVisites() {
    setLoading(true);
    const { data, error } = await supabase.from('visites').select('*').order('date_visite', { ascending: false });
    if (!error && data) setVisites(data as Visite[]);
    setLoading(false);
  }

  function openCreate() {
    setEditing(null);
    setForm({
      statut: 'planifiée',
      date_visite: new Date().toISOString().slice(0, 10),
      heure_visite: '14:00',
      nom: '',
      email: '',
      telephone: '',
      adresse_bien: '',
      ville: '',
      type_bien: '',
      surface: undefined,
      prix: undefined,
      notes: '',
    });
    setModalOpen(true);
  }

  function openEdit(v: Visite) {
    setEditing(v);
    setForm({ ...v });
    setModalOpen(true);
  }

  async function save() {
    if (!form.nom || !form.date_visite) return;
    const payload = { ...form, updated_at: new Date().toISOString() };
    if (editing) {
      await supabase.from('visites').update(payload).eq('id', editing.id);
    } else {
      await supabase.from('visites').insert(payload);
    }
    setModalOpen(false);
    loadVisites();
  }

  async function remove(id: string) {
    if (!confirm('Supprimer cette visite ?')) return;
    await supabase.from('visites').delete().eq('id', id);
    loadVisites();
  }

  const filtered = visites.filter(
    (v) =>
      v.nom.toLowerCase().includes(search.toLowerCase()) ||
      (v.ville && v.ville.toLowerCase().includes(search.toLowerCase())) ||
      (v.adresse_bien && v.adresse_bien.toLowerCase().includes(search.toLowerCase()))
  );

  const getStatusColor = (s: VisiteStatut) => VISITE_STATUTS.find((x) => x.value === s)?.color || 'bg-gray-500/20 text-gray-400';
  const getStatusLabel = (s: VisiteStatut) => VISITE_STATUTS.find((x) => x.value === s)?.label || s;

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
        <h2 className="text-xl font-bold text-white">Visites</h2>
        <Button onClick={openCreate}>
          <Plus size={16} className="mr-1" /> Nouvelle visite
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
        <TextInput
          placeholder="Rechercher par nom, ville ou adresse..."
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
            <TableHeadCell>Date</TableHeadCell>
            <TableHeadCell>Nom</TableHeadCell>
            <TableHeadCell>Téléphone</TableHeadCell>
            <TableHeadCell>Adresse</TableHeadCell>
            <TableHeadCell>Ville</TableHeadCell>
            <TableHeadCell>Statut</TableHeadCell>
            <TableHeadCell className="text-right">Actions</TableHeadCell>
          </TableHead>
          <TableBody>
            {filtered.map((v) => (
              <TableRow key={v.id} onClick={() => openEdit(v)}>
                <TableCell>
                  <div className="text-white">{v.date_visite}</div>
                  {v.heure_visite && <div className="text-gray-500 text-xs">{v.heure_visite}</div>}
                </TableCell>
                <TableCell className="font-medium">{v.nom}</TableCell>
                <TableCell>{v.telephone || '-'}</TableCell>
                <TableCell>{v.adresse_bien || '-'}</TableCell>
                <TableCell>{v.ville || '-'}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(v.statut)}>{getStatusLabel(v.statut)}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex gap-2 justify-end" onClick={(e) => e.stopPropagation()}>
                    <Button variant="ghost" size="sm" onClick={() => openEdit(v)}>
                      <Pencil size={14} />
                    </Button>
                    <Button variant="danger" size="sm" onClick={() => remove(v.id)}>
                      <Trash2 size={14} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {filtered.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} className="text-center text-gray-500 py-8">
                  Aucune visite trouvée
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </TableShell>
      )}

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? 'Modifier la visite' : 'Nouvelle visite'} size="lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Date">
            <TextInput type="date" value={form.date_visite || ''} onChange={(e) => setForm({ ...form, date_visite: e.target.value })} />
          </Field>
          <Field label="Heure">
            <TextInput type="time" value={form.heure_visite || ''} onChange={(e) => setForm({ ...form, heure_visite: e.target.value })} />
          </Field>
          <Field label="Nom *">
            <TextInput value={form.nom || ''} onChange={(e) => setForm({ ...form, nom: e.target.value })} placeholder="Nom du contact" />
          </Field>
          <Field label="Email">
            <TextInput type="email" value={form.email || ''} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </Field>
          <Field label="Téléphone">
            <TextInput value={form.telephone || ''} onChange={(e) => setForm({ ...form, telephone: e.target.value })} />
          </Field>
          <Field label="Statut">
            <Select
              value={form.statut || 'planifiée'}
              onChange={(v) => setForm({ ...form, statut: v as VisiteStatut })}
              options={VISITE_STATUTS.map((s) => ({ value: s.value, label: s.label }))}
            />
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
          <Field label="Prix (€)">
            <TextInput type="number" value={form.prix || ''} onChange={(e) => setForm({ ...form, prix: Number(e.target.value) || undefined })} />
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
