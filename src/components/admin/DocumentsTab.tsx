import React, { useState } from 'react';
import { Card, Field, Select, TextInput, TextArea, Button } from './ui';
import { FileText, Download } from 'lucide-react';
import type { Bien } from './types';

const DOCUMENT_TYPES = [
  { value: 'offre_achat', label: 'Offre d\'achat' },
  { value: 'bon_visite', label: 'Bon de visite' },
  { value: 'contre_offre', label: 'Contre-offre' },
  { value: 'compromis', label: 'Compromis de vente' },
  { value: 'mandat', label: 'Mandat' },
  { value: 'estimation', label: 'Rapport d\'estimation' },
];

export default function DocumentsTab({ biens }: { biens: Bien[] }) {
  const [selectedBienRef, setSelectedBienRef] = useState('');
  const [docType, setDocType] = useState('offre_achat');
  const [acheteurNom, setAcheteurNom] = useState('');
  const [acheteurAdresse, setAcheteurAdresse] = useState('');
  const [offreMontant, setOffreMontant] = useState('');
  const [offreDelai, setOffreDelai] = useState('');
  const [conditions, setConditions] = useState('');

  const selectedBien = biens.find((b) => b.reference === selectedBienRef);

  function generateDocument() {
    if (!selectedBien) return;

    const typeLabel = DOCUMENT_TYPES.find((d) => d.value === docType)?.label || '';
    const today = new Date().toLocaleDateString('fr-FR');

    let content = '';

    if (docType === 'offre_achat') {
      content = `OFFRE D'ACHAT\n\n`;
      content += `Date : ${today}\n\n`;
      content += `Référence bien : ${selectedBien.reference}\n`;
      content += `Adresse : ${selectedBien.adresse || ''}, ${selectedBien.ville || ''}\n`;
      content += `Type : ${selectedBien.type_bien}\n`;
      content += `Surface : ${selectedBien.surface_habitable || '-'} m²\n\n`;
      content += `ACHETEUR\n`;
      content += `Nom : ${acheteurNom}\n`;
      content += `Adresse : ${acheteurAdresse}\n\n`;
      content += `MONTANT DE L'OFFRE\n`;
      content += `Prix proposé : ${Number(offreMontant).toLocaleString('fr-FR')} €\n`;
      content += `Délai de réponse souhaité : ${offreDelai || '48h'}\n\n`;
      content += `CONDITIONS SUSPENSIVES\n`;
      content += `${conditions || 'Aucune'}\n\n`;
      content += `---\nDocument généré par Agence Voglans`;
    } else if (docType === 'bon_visite') {
      content = `BON DE VISITE\n\n`;
      content += `Date : ${today}\n\n`;
      content += `Référence bien : ${selectedBien.reference}\n`;
      content += `Titre : ${selectedBien.titre}\n`;
      content += `Adresse : ${selectedBien.adresse || ''}, ${selectedBien.ville || ''}\n\n`;
      content += `VISITEUR\n`;
      content += `Nom : ${acheteurNom}\n`;
      content += `Téléphone : ${acheteurAdresse}\n\n`;
      content += `Je déclare avoir visité le bien désigné ci-dessus.\n`;
      content += `Je m'engage à passer par l'agence pour toute négociation ou offre.\n\n`;
      content += `Signature du visiteur : _______________\n\n`;
      content += `---\nDocument généré par Agence Voglans`;
    } else if (docType === 'contre_offre') {
      content = `CONTRE-OFFRE\n\n`;
      content += `Date : ${today}\n\n`;
      content += `Référence bien : ${selectedBien.reference}\n`;
      content += `Adresse : ${selectedBien.adresse || ''}, ${selectedBien.ville || ''}\n\n`;
      content += `CONTRE-OFFRE DU VENDEUR\n`;
      content += `Montant : ${Number(offreMontant).toLocaleString('fr-FR')} €\n`;
      content += `Délai de validité : ${offreDelai || '72h'}\n\n`;
      content += `CONDITIONS\n`;
      content += `${conditions || 'Aucune'}\n\n`;
      content += `---\nDocument généré par Agence Voglans`;
    } else {
      content = `${typeLabel.toUpperCase()}\n\n`;
      content += `Date : ${today}\n\n`;
      content += `Référence bien : ${selectedBien.reference}\n`;
      content += `Titre : ${selectedBien.titre}\n`;
      content += `Adresse : ${selectedBien.adresse || ''}, ${selectedBien.ville || ''}\n\n`;
      content += `---\nDocument généré par Agence Voglans`;
    }

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${docType}_${selectedBien.reference}_${today.replace(/\//g, '-')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">Génération de documents</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <div className="space-y-4">
            <Field label="Bien (par référence)">
              <Select
                value={selectedBienRef}
                onChange={setSelectedBienRef}
                options={[
                  { value: '', label: 'Sélectionner un bien' },
                  ...biens.map((b) => ({ value: b.reference, label: `${b.reference} — ${b.titre} (${b.ville || 'Ville inconnue'})` })),
                ]}
              />
            </Field>

            <Field label="Type de document">
              <Select
                value={docType}
                onChange={setDocType}
                options={DOCUMENT_TYPES}
              />
            </Field>

            {selectedBien && (
              <div className="rounded-lg bg-[#0C0C0C] border border-[#2A2A2A] p-4 space-y-1 text-sm">
                <p className="text-[#C9A84C] font-medium">{selectedBien.reference}</p>
                <p className="text-white">{selectedBien.titre}</p>
                <p className="text-gray-400">{selectedBien.adresse}, {selectedBien.ville}</p>
                <p className="text-gray-400">{selectedBien.type_bien} · {selectedBien.surface_habitable} m² · {selectedBien.prix?.toLocaleString('fr-FR')} €</p>
              </div>
            )}
          </div>
        </Card>

        <Card>
          <div className="space-y-4">
            <Field label={docType === 'bon_visite' ? 'Nom du visiteur' : "Nom de l'acheteur"}>
              <TextInput value={acheteurNom} onChange={(e) => setAcheteurNom(e.target.value)} />
            </Field>

            <Field label={docType === 'bon_visite' ? 'Téléphone' : "Adresse de l'acheteur"}>
              <TextInput value={acheteurAdresse} onChange={(e) => setAcheteurAdresse(e.target.value)} />
            </Field>

            {(docType === 'offre_achat' || docType === 'contre_offre') && (
              <>
                <Field label="Montant (€)">
                  <TextInput type="number" value={offreMontant} onChange={(e) => setOffreMontant(e.target.value)} />
                </Field>
                <Field label="Délai de validité">
                  <TextInput value={offreDelai} onChange={(e) => setOffreDelai(e.target.value)} placeholder="48h, 72h..." />
                </Field>
              </>
            )}

            <Field label="Conditions / Notes">
              <TextArea
                value={conditions}
                onChange={(e) => setConditions(e.target.value)}
                rows={3}
              />
            </Field>
          </div>
        </Card>
      </div>

      <div className="flex justify-end">
        <Button onClick={generateDocument} disabled={!selectedBienRef}>
          <Download size={16} className="mr-2" />
          Générer le document
        </Button>
      </div>
    </div>
  );
}
