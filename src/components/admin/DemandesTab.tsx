import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button, Card, Field, Modal, Select, TableBody, TableCell, TableHead, TableHeadCell, TableRow, TableShell, TextInput, TextArea, Badge } from './ui';
import { Pencil, Search } from 'lucide-react';
import type { Demande, DemandeStatut } from './types';
import { DEMANDE_STATUTS, DEMANDE_TYPES } from './types';

export default function DemandesTab() {
  const [demandes, setDemandes] = useState<Demande[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Demande | null>(null);

  const [form, setForm] = useState<Partial<Demande>>({
    nom: '',
    email: '',
    telephone: '',
    type_demande: 'achat',
    statut: 'nouvelle',
    ville_souhaitee: '',
    budget_min: undefined,
    budget_max: undefined,
    surface_min: undefined,
    surface_max: undefined,
    nombre_pieces: '',
    type_bien: '',
    urgence: 'moyenne',
    commentaire: '',
  });

  React.useEffect(() => {
    loadDemandes();
  }, []);

  async function loadDemandes() {
    setLoading(true);
    const { data, error } = await supabase.from('demandes').select('*').order('created_at', { ascending: false });
    if (!error && data) setDemandes(data as Demande[]);
    setLoading(false);
  }

  function openEdit(d: Demande) {
    setEditing(d);
    setForm({ ...d });
    setModalOpen(true);
  }

  async function save() {
    if (!form.nom) return;
    const payload = { ...form, updated_at: new Date().toISOString() };
    if (editing) {
      await supabase.from('demandes').update(payload).eq('id', editing.id);
    }
    setModalOpen(false);
    loadDemandes();
  }

  const filtered = demandes.filter(
    (d) =>
      (d.nom && d.nom.toLowerCase().includes(search.toLowerCase())) ||
      (d.type_demande && d.type_demande.toLowerCase().includes(search.toLowerCase())) ||
      (d.ville_souhaitee && d.ville_souhaitee.toLowerCase().includes(search.toLowerCase()))
  );

  const getStatusColor = (s: DemandeStatut) => DEMANDE_STATUTS.find((x) => x.value === s)?.color || 'bg-gray-500/20 text-[#a9b8aa]';
  const getStatusLabel = (s: DemandeStatut) => DEMANDE_STATUTS.find((x) => x.value === s)?.label || s;

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
        <h2 className="text-xl font-bold text-[#f2f1e4]">Demandes</h2>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6f8174]" size={16} />
        <TextInput
          placeholder="Rechercher par nom, type ou ville..."
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
            <TableHeadCell>Type</TableHeadCell>
            <TableHeadCell>Ville</TableHeadCell>
            <TableHeadCell>Budget</TableHeadCell>
            <TableHeadCell>Surface</TableHeadCell>
            <TableHeadCell>Statut</TableHeadCell>
            <TableHeadCell className="text-right">Actions</TableHeadCell>
          </TableHead>
          <TableBody>
            {filtered.map((d) => (
              <TableRow key={d.id} onClick={() => openEdit(d)}>
                <TableCell>
                  <div className="text-[#f2f1e4] text-xs">{new Date(d.created_at).toLocaleDateString('fr-FR')}</div>
                </TableCell>
                <TableCell className="font-medium">{d.nom}</TableCell>
                <TableCell>{d.type_demande}</TableCell>
                <TableCell>{d.ville_souhaitee || '-'}</TableCell>
                <TableCell>
                  {d.budget_min || d.budget_max
                    ? `${(d.budget_min || 0).toLocaleString('fr-FR')} - ${(d.budget_max || 0).toLocaleString('fr-FR')} €`
                    : '-'}
                </TableCell>
                <TableCell>
                  {d.surface_min || d.surface_max ? `${d.surface_min || 0} - ${d.surface_max || 0} m²` : '-'}
                </TableCell>
                <TableCell>
                  <Badge className={getStatusColor(d.statut)}>{getStatusLabel(d.statut)}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex gap-2 justify-end" onClick={(e) => e.stopPropagation()}>
                    <Button variant="ghost" size="sm" onClick={() => openEdit(d)}>
                      <Pencil size={14} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {filtered.length === 0 && (
              <TableRow>
                <TableCell colSpan={8} className="text-center text-[#6f8174] py-8">
                  Aucune demande trouvée
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </TableShell>
      )}

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Modifier la demande" size="lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Nom">
            <TextInput value={form.nom || ''} onChange={(e) => setForm({ ...form, nom: e.target.value })} />
          </Field>
          <Field label="Email">
            <TextInput type="email" value={form.email || ''} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </Field>
          <Field label="Téléphone">
            <TextInput value={form.telephone || ''} onChange={(e) => setForm({ ...form, telephone: e.target.value })} />
          </Field>
          <Field label="Type de demande">
            <Select
              value={form.type_demande || 'achat'}
              onChange={(v) => setForm({ ...form, type_demande: v as Demande['type_demande'] })}
              options={DEMANDE_TYPES.map((t) => ({ value: t.value, label: t.label }))}
            />
          </Field>
          <Field label="Statut">
            <Select
              value={form.statut || 'nouvelle'}
              onChange={(v) => setForm({ ...form, statut: v as DemandeStatut })}
              options={DEMANDE_STATUTS.map((s) => ({ value: s.value, label: s.label }))}
            />
          </Field>
          <Field label="Ville souhaitée">
            <TextInput value={form.ville_souhaitee || ''} onChange={(e) => setForm({ ...form, ville_souhaitee: e.target.value })} />
          </Field>
          <Field label="Budget min (€)">
            <TextInput type="number" value={form.budget_min || ''} onChange={(e) => setForm({ ...form, budget_min: Number(e.target.value) || undefined })} />
          </Field>
          <Field label="Budget max (€)">
            <TextInput type="number" value={form.budget_max || ''} onChange={(e) => setForm({ ...form, budget_max: Number(e.target.value) || undefined })} />
          </Field>
          <Field label="Surface min (m²)">
            <TextInput type="number" value={form.surface_min || ''} onChange={(e) => setForm({ ...form, surface_min: Number(e.target.value) || undefined })} />
          </Field>
          <Field label="Surface max (m²)">
            <TextInput type="number" value={form.surface_max || ''} onChange={(e) => setForm({ ...form, surface_max: Number(e.target.value) || undefined })} />
          </Field>
          <Field label="Nombre de pièces">
            <TextInput value={form.nombre_pieces || ''} onChange={(e) => setForm({ ...form, nombre_pieces: e.target.value })} />
          </Field>
          <Field label="Type de bien">
            <TextInput value={form.type_bien || ''} onChange={(e) => setForm({ ...form, type_bien: e.target.value })} />
          </Field>
          <Field label="Urgence">
            <Select
              value={form.urgence || 'moyenne'}
              onChange={(v) => setForm({ ...form, urgence: v as 'faible' | 'moyenne' | 'forte' | 'critique' })}
              options={[
                { value: 'faible', label: 'Faible' },
                { value: 'moyenne', label: 'Moyenne' },
                { value: 'forte', label: 'Forte' },
                { value: 'critique', label: 'Critique' },
              ]}
            />
          </Field>
        </div>
        <div className="mt-4">
          <Field label="Commentaire">
            <TextArea rows={3} value={form.commentaire || ''} onChange={(e) => setForm({ ...form, commentaire: e.target.value })} />
          </Field>
        </div>
        <div className="flex justify-end gap-2 mt-6">
          <Button variant="secondary" onClick={() => setModalOpen(false)}>Annuler</Button>
          <Button onClick={save}>Enregistrer</Button>
        </div>
      </Modal>
    </div>
  );
}
