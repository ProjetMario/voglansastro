import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button, Card, Field, Modal, Select, TableBody, TableCell, TableHead, TableHeadCell, TableRow, TableShell, TextInput, TextArea, Badge } from './ui';
import { Plus, Pencil, Trash2, Search } from 'lucide-react';
import type { Bien, BienStatut } from './types';
import { BIEN_STATUTS } from './types';

export default function BiensTab() {
  const [biens, setBiens] = useState<Bien[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Bien | null>(null);

  const [form, setForm] = useState<Partial<Bien>>({
    reference: '',
    titre: '',
    description: '',
    type_bien: 'Maison',
    statut: 'disponible',
    adresse: '',
    ville: '',
    code_postal: '',
    surface_habitable: undefined,
    surface_terrain: undefined,
    nombre_pieces: undefined,
    nombre_chambres: undefined,
    etage: undefined,
    prix: undefined,
    honoraires_pourcent: 5,
    net_vendeur: undefined,
    dpe: '',
    ges: '',
    annee_construction: undefined,
    notes_agent: '',
  });

  React.useEffect(() => {
    loadBiens();
  }, []);

  async function loadBiens() {
    setLoading(true);
    const { data, error } = await supabase.from('biens').select('*').order('created_at', { ascending: false });
    if (!error && data) setBiens(data as Bien[]);
    setLoading(false);
  }

  function openCreate() {
    setEditing(null);
    setForm({
      reference: `B-${Date.now().toString(36).slice(-4).toUpperCase()}`,
      titre: '',
      description: '',
      type_bien: 'Maison',
      statut: 'disponible',
      adresse: '',
      ville: '',
      code_postal: '',
      surface_habitable: undefined,
      surface_terrain: undefined,
      nombre_pieces: undefined,
      nombre_chambres: undefined,
      etage: undefined,
      prix: undefined,
      honoraires_pourcent: 5,
      net_vendeur: undefined,
      dpe: '',
      ges: '',
      annee_construction: undefined,
      notes_agent: '',
    });
    setModalOpen(true);
  }

  function openEdit(b: Bien) {
    setEditing(b);
    setForm({ ...b });
    setModalOpen(true);
  }

  async function save() {
    if (!form.reference || !form.titre) return;
    const payload = { ...form, updated_at: new Date().toISOString() };
    if (editing) {
      await supabase.from('biens').update(payload).eq('id', editing.id);
    } else {
      await supabase.from('biens').insert(payload);
    }
    setModalOpen(false);
    loadBiens();
  }

  async function remove(id: string) {
    if (!confirm('Supprimer ce bien ?')) return;
    await supabase.from('biens').delete().eq('id', id);
    loadBiens();
  }

  const filtered = biens.filter(
    (b) =>
      (b.reference && b.reference.toLowerCase().includes(search.toLowerCase())) ||
      (b.titre && b.titre.toLowerCase().includes(search.toLowerCase())) ||
      (b.ville && b.ville.toLowerCase().includes(search.toLowerCase())) ||
      (b.adresse && b.adresse.toLowerCase().includes(search.toLowerCase()))
  );

  const getStatusColor = (s: BienStatut) => BIEN_STATUTS.find((x) => x.value === s)?.color || 'bg-gray-500/20 text-[#a9b8aa]';
  const getStatusLabel = (s: BienStatut) => BIEN_STATUTS.find((x) => x.value === s)?.label || s;

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
        <h2 className="text-xl font-bold text-[#f2f1e4]">Biens</h2>
        <Button onClick={openCreate}>
          <Plus size={16} className="mr-1" /> Nouveau bien
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6f8174]" size={16} />
        <TextInput
          placeholder="Rechercher par référence, titre, ville..."
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
            <TableHeadCell>Titre</TableHeadCell>
            <TableHeadCell>Type</TableHeadCell>
            <TableHeadCell>Ville</TableHeadCell>
            <TableHeadCell>Surface</TableHeadCell>
            <TableHeadCell>Prix</TableHeadCell>
            <TableHeadCell>Statut</TableHeadCell>
            <TableHeadCell className="text-right">Actions</TableHeadCell>
          </TableHead>
          <TableBody>
            {filtered.map((b) => (
              <TableRow key={b.id} onClick={() => openEdit(b)}>
                <TableCell className="font-mono text-[#2BCA8F]">{b.reference}</TableCell>
                <TableCell className="font-medium max-w-[200px] truncate">{b.titre}</TableCell>
                <TableCell>{b.type_bien}</TableCell>
                <TableCell>{b.ville || '-'}</TableCell>
                <TableCell>{b.surface_habitable ? `${b.surface_habitable} m²` : '-'}</TableCell>
                <TableCell>{b.prix ? `${b.prix.toLocaleString('fr-FR')} €` : '-'}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(b.statut)}>{getStatusLabel(b.statut)}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex gap-2 justify-end" onClick={(e) => e.stopPropagation()}>
                    <Button variant="ghost" size="sm" onClick={() => openEdit(b)}>
                      <Pencil size={14} />
                    </Button>
                    <Button variant="danger" size="sm" onClick={() => remove(b.id)}>
                      <Trash2 size={14} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {filtered.length === 0 && (
              <TableRow>
                <TableCell colSpan={8} className="text-center text-[#6f8174] py-8">
                  Aucun bien trouvé
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </TableShell>
      )}

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? 'Modifier le bien' : 'Nouveau bien'} size="xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Référence *">
            <TextInput value={form.reference || ''} onChange={(e) => setForm({ ...form, reference: e.target.value })} />
          </Field>
          <Field label="Titre *">
            <TextInput value={form.titre || ''} onChange={(e) => setForm({ ...form, titre: e.target.value })} />
          </Field>
          <Field label="Type de bien">
            <Select
              value={form.type_bien || 'Maison'}
              onChange={(v) => setForm({ ...form, type_bien: v })}
              options={[
                { value: 'Maison', label: 'Maison' },
                { value: 'Appartement', label: 'Appartement' },
                { value: 'Terrain', label: 'Terrain' },
                { value: 'Immeuble', label: 'Immeuble' },
                { value: 'Local commercial', label: 'Local commercial' },
                { value: 'Fonds de commerce', label: 'Fonds de commerce' },
                { value: 'Garage', label: 'Garage' },
                { value: 'Autre', label: 'Autre' },
              ]}
            />
          </Field>
          <Field label="Statut">
            <Select
              value={form.statut || 'disponible'}
              onChange={(v) => setForm({ ...form, statut: v as BienStatut })}
              options={BIEN_STATUTS.map((s) => ({ value: s.value, label: s.label }))}
            />
          </Field>
          <Field label="Adresse">
            <TextInput value={form.adresse || ''} onChange={(e) => setForm({ ...form, adresse: e.target.value })} />
          </Field>
          <Field label="Ville">
            <TextInput value={form.ville || ''} onChange={(e) => setForm({ ...form, ville: e.target.value })} />
          </Field>
          <Field label="Code postal">
            <TextInput value={form.code_postal || ''} onChange={(e) => setForm({ ...form, code_postal: e.target.value })} />
          </Field>
          <Field label="Surface habitable (m²)">
            <TextInput type="number" value={form.surface_habitable || ''} onChange={(e) => setForm({ ...form, surface_habitable: Number(e.target.value) || undefined })} />
          </Field>
          <Field label="Surface terrain (m²)">
            <TextInput type="number" value={form.surface_terrain || ''} onChange={(e) => setForm({ ...form, surface_terrain: Number(e.target.value) || undefined })} />
          </Field>
          <Field label="Nombre de pièces">
            <TextInput type="number" value={form.nombre_pieces || ''} onChange={(e) => setForm({ ...form, nombre_pieces: Number(e.target.value) || undefined })} />
          </Field>
          <Field label="Nombre de chambres">
            <TextInput type="number" value={form.nombre_chambres || ''} onChange={(e) => setForm({ ...form, nombre_chambres: Number(e.target.value) || undefined })} />
          </Field>
          <Field label="Étage">
            <TextInput type="number" value={form.etage || ''} onChange={(e) => setForm({ ...form, etage: Number(e.target.value) || undefined })} />
          </Field>
          <Field label="Prix (€)">
            <TextInput type="number" value={form.prix || ''} onChange={(e) => setForm({ ...form, prix: Number(e.target.value) || undefined })} />
          </Field>
          <Field label="Honoraires (%)">
            <TextInput type="number" value={form.honoraires_pourcent || ''} onChange={(e) => setForm({ ...form, honoraires_pourcent: Number(e.target.value) || undefined })} />
          </Field>
          <Field label="Net vendeur (€)">
            <TextInput type="number" value={form.net_vendeur || ''} onChange={(e) => setForm({ ...form, net_vendeur: Number(e.target.value) || undefined })} />
          </Field>
          <Field label="DPE">
            <Select
              value={form.dpe || ''}
              onChange={(v) => setForm({ ...form, dpe: v })}
              options={[
                { value: '', label: '-' },
                { value: 'A', label: 'A' },
                { value: 'B', label: 'B' },
                { value: 'C', label: 'C' },
                { value: 'D', label: 'D' },
                { value: 'E', label: 'E' },
                { value: 'F', label: 'F' },
                { value: 'G', label: 'G' },
              ]}
            />
          </Field>
          <Field label="GES">
            <Select
              value={form.ges || ''}
              onChange={(v) => setForm({ ...form, ges: v })}
              options={[
                { value: '', label: '-' },
                { value: 'A', label: 'A' },
                { value: 'B', label: 'B' },
                { value: 'C', label: 'C' },
                { value: 'D', label: 'D' },
                { value: 'E', label: 'E' },
                { value: 'F', label: 'F' },
                { value: 'G', label: 'G' },
              ]}
            />
          </Field>
          <Field label="Année de construction">
            <TextInput type="number" value={form.annee_construction || ''} onChange={(e) => setForm({ ...form, annee_construction: Number(e.target.value) || undefined })} />
          </Field>
        </div>
        <div className="mt-4">
          <Field label="Description">
            <TextArea rows={3} value={form.description || ''} onChange={(e) => setForm({ ...form, description: e.target.value })} />
          </Field>
        </div>
        <div className="mt-4">
          <Field label="Notes agent">
            <TextArea rows={2} value={form.notes_agent || ''} onChange={(e) => setForm({ ...form, notes_agent: e.target.value })} />
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
