import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button, Card, Field, Select, TableBody, TableCell, TableHead, TableHeadCell, TableRow, TableShell } from './ui';
import { Upload, Download, Trash2, File } from 'lucide-react';
import type { Mandat } from './types';

export default function FichiersTab({ mandats }: { mandats: Mandat[] }) {
  const [selectedMandatId, setSelectedMandatId] = useState('');
  const [files, setFiles] = useState<{ name: string; path: string; created_at: string; size?: number }[]>([]);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);

  const selectedMandat = mandats.find((m) => m.id === selectedMandatId);

  React.useEffect(() => {
    if (selectedMandatId) loadFiles();
    else setFiles([]);
  }, [selectedMandatId]);

  async function loadFiles() {
    if (!selectedMandatId) return;
    setLoading(true);
    const prefix = `mandats/${selectedMandatId}/`;
    const { data, error } = await supabase.storage.from('documents').list(prefix.replace(/\/$/, ''));
    if (!error && data) {
      setFiles(
        data.map((f) => ({
          name: f.name,
          path: `${prefix}${f.name}`,
          created_at: f.created_at || new Date().toISOString(),
          size: f.metadata?.size,
        }))
      );
    }
    setLoading(false);
  }

  async function uploadFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file || !selectedMandatId) return;
    setUploading(true);
    const path = `mandats/${selectedMandatId}/${file.name}`;
    await supabase.storage.from('documents').upload(path, file, { upsert: true });
    setUploading(false);
    e.target.value = '';
    loadFiles();
  }

  async function downloadFile(path: string, name: string) {
    const { data, error } = await supabase.storage.from('documents').createSignedUrl(path, 60);
    if (!error && data?.signedUrl) {
      const a = document.createElement('a');
      a.href = data.signedUrl;
      a.download = name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }

  async function removeFile(path: string) {
    if (!confirm('Supprimer ce fichier ?')) return;
    await supabase.storage.from('documents').remove([path]);
    loadFiles();
  }

  function formatSize(bytes?: number) {
    if (!bytes) return '-';
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-[#f2f1e4]">Documents par mandat</h2>

      <Card>
        <Field label="Sélectionner un mandat">
          <Select
            value={selectedMandatId}
            onChange={setSelectedMandatId}
            options={[
              { value: '', label: 'Choisir un mandat' },
              ...mandats.map((m) => ({ value: m.id, label: `${m.reference} — ${m.vendeur_nom || 'Vendeur inconnu'} (${m.ville || 'Ville inconnue'})` })),
            ]}
          />
        </Field>

        {selectedMandat && (
          <div className="mt-4 rounded-lg bg-[#14241b] border border-[#f2f1e4]/10 p-4 space-y-1 text-sm">
            <p className="text-[#2BCA8F] font-medium">{selectedMandat.reference}</p>
            <p className="text-[#f2f1e4]">{selectedMandat.vendeur_nom}</p>
            <p className="text-[#a9b8aa]">{selectedMandat.adresse_bien}, {selectedMandat.ville}</p>
          </div>
        )}
      </Card>

      {selectedMandatId && (
        <>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-[#f2f1e4]">Fichiers</h3>
            <div className="relative">
              <input
                type="file"
                id="file-upload"
                onChange={uploadFile}
                className="absolute inset-0 opacity-0 cursor-pointer"
                disabled={uploading}
              />
              <label htmlFor="file-upload">
                <Button disabled={uploading}>
                  <Upload size={16} className="mr-2" />
                  {uploading ? 'Envoi...' : 'Ajouter un fichier'}
                </Button>
              </label>
            </div>
          </div>

          {loading ? (
            <Card>Chargement...</Card>
          ) : (
            <TableShell>
              <TableHead>
                <TableHeadCell>Nom</TableHeadCell>
                <TableHeadCell>Taille</TableHeadCell>
                <TableHeadCell>Ajouté le</TableHeadCell>
                <TableHeadCell className="text-right">Actions</TableHeadCell>
              </TableHead>
              <TableBody>
                {files.map((f) => (
                  <TableRow key={f.path}>
                    <TableCell className="flex items-center gap-2">
                      <File size={16} className="text-[#2BCA8F]" />
                      <span className="font-medium">{f.name}</span>
                    </TableCell>
                    <TableCell>{formatSize(f.size)}</TableCell>
                    <TableCell>{new Date(f.created_at).toLocaleDateString('fr-FR')}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex gap-2 justify-end">
                        <Button variant="ghost" size="sm" onClick={() => downloadFile(f.path, f.name)}>
                          <Download size={14} />
                        </Button>
                        <Button variant="danger" size="sm" onClick={() => removeFile(f.path)}>
                          <Trash2 size={14} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {files.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center text-[#6f8174] py-8">
                      Aucun fichier pour ce mandat
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </TableShell>
          )}
        </>
      )}
    </div>
  );
}
