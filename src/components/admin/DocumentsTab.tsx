import React, { useState } from 'react';
import { Card, Field, Select, TextInput, TextArea, Button } from './ui';
import { Printer } from 'lucide-react';
import type { Bien } from './types';

const DOCUMENT_TYPES = [
  { value: 'offre_achat', label: 'Offre d\'achat' },
  { value: 'bon_visite', label: 'Bon de visite' },
  { value: 'contre_offre', label: 'Contre-offre' },
  { value: 'compromis', label: 'Compromis de vente' },
  { value: 'mandat', label: 'Mandat' },
  { value: 'estimation', label: 'Rapport d\'estimation' },
];

const AGENCE = {
  nom: "L'Agence de Voglans",
  adresse: '93 Chemin de la Combe, 73420 Voglans',
  tel: '+33 7 57 83 02 62',
  email: 'contact@agencevoglans.fr',
  site: 'agencevoglans.fr',
  slogan: "L'immobilier local, 100% digital",
};

export default function DocumentsTab({ biens }: { biens: Bien[] }) {
  const [selectedBienRef, setSelectedBienRef] = useState('');
  const [docType, setDocType] = useState('offre_achat');
  const [acheteurNom, setAcheteurNom] = useState('');
  const [acheteurAdresse, setAcheteurAdresse] = useState('');
  const [offreMontant, setOffreMontant] = useState('');
  const [offreDelai, setOffreDelai] = useState('');
  const [conditions, setConditions] = useState('');

  const selectedBien = biens.find((b) => b.reference === selectedBienRef);

  function row(label: string, value: string) {
    return `<tr><td class="k">${label}</td><td class="v">${value || '—'}</td></tr>`;
  }

  function section(title: string, inner: string) {
    return `<div class="section"><h2>${title}</h2>${inner}</div>`;
  }

  function buildBody(): string {
    if (!selectedBien) return '';
    const b = selectedBien;
    const adresseBien = `${b.adresse || ''}${b.ville ? ', ' + b.ville : ''}`;
    const montant = offreMontant ? `${Number(offreMontant).toLocaleString('fr-FR')} €` : '—';

    const bienBloc = section('Désignation du bien', `<table class="kv">
      ${row('Référence', b.reference)}
      ${row('Désignation', b.titre)}
      ${row('Adresse', adresseBien)}
      ${row('Type', b.type_bien)}
      ${row('Surface habitable', b.surface_habitable ? b.surface_habitable + ' m²' : '—')}
      ${row('Prix affiché', b.prix ? b.prix.toLocaleString('fr-FR') + ' €' : '—')}
    </table>`);

    if (docType === 'offre_achat') {
      return bienBloc
        + section('Acquéreur', `<table class="kv">${row('Nom', acheteurNom)}${row('Adresse', acheteurAdresse)}</table>`)
        + section("Conditions de l'offre", `<table class="kv">${row('Prix proposé', montant)}${row('Délai de réponse', offreDelai || '48 heures')}</table>`)
        + section('Conditions suspensives', `<p>${(conditions || 'Aucune condition particulière.').replace(/\n/g, '<br>')}</p>`)
        + `<p class="legal">La présente offre d'achat est valable pour le délai indiqué ci-dessus. Elle ne constitue pas un engagement définitif et reste soumise à l'accord du vendeur ainsi qu'à la signature d'un avant-contrat.</p>`
        + signatures(['Le candidat acquéreur', "Pour l'agence"]);
    }
    if (docType === 'bon_visite') {
      return bienBloc
        + section('Visiteur', `<table class="kv">${row('Nom', acheteurNom)}${row('Téléphone', acheteurAdresse)}</table>`)
        + `<p class="legal">Je soussigné(e) reconnais avoir visité ce jour le bien désigné ci-dessus, présenté en exclusivité par ${AGENCE.nom}. Je m'engage à traiter exclusivement par l'intermédiaire de l'agence pour toute négociation, offre ou acquisition relative à ce bien.</p>`
        + signatures(['Le visiteur', "Pour l'agence"]);
    }
    if (docType === 'contre_offre') {
      return bienBloc
        + section('Contre-offre du vendeur', `<table class="kv">${row('Montant', montant)}${row('Délai de validité', offreDelai || '72 heures')}</table>`)
        + section('Conditions', `<p>${(conditions || 'Aucune condition particulière.').replace(/\n/g, '<br>')}</p>`)
        + signatures(['Le vendeur', "Pour l'agence"]);
    }
    return bienBloc
      + (conditions ? section('Détails', `<p>${conditions.replace(/\n/g, '<br>')}</p>`) : '')
      + signatures(['Le client', "Pour l'agence"]);
  }

  function signatures(labels: string[]): string {
    return `<div class="signatures">${labels
      .map((l) => `<div class="sig"><span class="sig-label">${l}</span><div class="sig-box"></div></div>`)
      .join('')}</div>`;
  }

  function generateDocument() {
    if (!selectedBien) return;
    const typeLabel = DOCUMENT_TYPES.find((d) => d.value === docType)?.label || 'Document';
    const today = new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' });
    const logoUrl = `${window.location.origin}/images/logo-agence-voglans.png`;

    const html = `<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8">
<title>${typeLabel} — ${selectedBien.reference}</title>
<style>
  @page { size: A4; margin: 18mm 16mm; }
  * { box-sizing: border-box; }
  body { font-family: 'Playfair Display', Georgia, serif; color: #1d2b22; margin: 0; }
  .wrap { max-width: 720px; margin: 0 auto; }
  header { display: flex; align-items: center; gap: 18px; border-bottom: 3px solid #2d4a3a; padding-bottom: 18px; }
  header img { width: 78px; height: 78px; border-radius: 12px; object-fit: cover; }
  .agency h1 { font-size: 22px; margin: 0; color: #2d4a3a; letter-spacing: .5px; }
  .agency p { margin: 2px 0 0; font-size: 11px; color: #5a6b5f; font-family: 'Inter', sans-serif; }
  .doc-title { text-align: center; margin: 30px 0 8px; }
  .doc-title h2 { font-size: 26px; letter-spacing: 1px; text-transform: uppercase; color: #2d4a3a; margin: 0; }
  .doc-title .date { font-family: 'Inter', sans-serif; font-size: 12px; color: #5a6b5f; margin-top: 4px; }
  .ref-badge { display: inline-block; margin-top: 8px; font-family: 'Inter', sans-serif; font-size: 11px; background: #eaf3ee; color: #2d4a3a; padding: 4px 12px; border-radius: 999px; letter-spacing: .5px; }
  .section { margin-top: 22px; }
  .section h2 { font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #2d4a3a; border-bottom: 1px solid #d8e2db; padding-bottom: 6px; margin: 0 0 10px; font-family: 'Inter', sans-serif; }
  table.kv { width: 100%; border-collapse: collapse; font-family: 'Inter', sans-serif; font-size: 13px; }
  table.kv td { padding: 6px 0; vertical-align: top; }
  table.kv td.k { color: #5a6b5f; width: 200px; }
  table.kv td.v { color: #1d2b22; font-weight: 600; }
  .section p { font-family: 'Inter', sans-serif; font-size: 13px; line-height: 1.6; color: #2a3a30; margin: 0; }
  .legal { font-family: 'Inter', sans-serif; font-size: 11px; color: #5a6b5f; line-height: 1.6; margin-top: 22px; font-style: italic; }
  .signatures { display: flex; gap: 40px; margin-top: 48px; }
  .sig { flex: 1; }
  .sig-label { font-family: 'Inter', sans-serif; font-size: 12px; color: #5a6b5f; }
  .sig-box { height: 80px; border: 1px solid #c7d3ca; border-radius: 8px; margin-top: 8px; }
  footer { margin-top: 40px; border-top: 1px solid #d8e2db; padding-top: 12px; text-align: center; font-family: 'Inter', sans-serif; font-size: 10.5px; color: #5a6b5f; }
  footer strong { color: #2d4a3a; }
  @media print { .noprint { display: none !important; } }
  .noprint { text-align: center; margin: 24px 0; }
  .noprint button { font-family: 'Inter', sans-serif; background: #2d4a3a; color: #fff; border: 0; padding: 10px 22px; border-radius: 8px; font-size: 14px; cursor: pointer; }
</style></head><body>
<div class="wrap">
  <header>
    <img src="${logoUrl}" alt="${AGENCE.nom}" />
    <div class="agency">
      <h1>${AGENCE.nom}</h1>
      <p>${AGENCE.adresse}</p>
      <p>${AGENCE.tel} · ${AGENCE.email} · ${AGENCE.site}</p>
    </div>
  </header>
  <div class="doc-title">
    <h2>${typeLabel}</h2>
    <div class="date">Établi le ${today}</div>
    <div class="ref-badge">Réf. ${selectedBien.reference}</div>
  </div>
  ${buildBody()}
  <footer>
    <strong>${AGENCE.nom}</strong> — ${AGENCE.slogan}<br>
    ${AGENCE.adresse} · ${AGENCE.tel} · ${AGENCE.site}
  </footer>
  <div class="noprint"><button onclick="window.print()">Imprimer / Enregistrer en PDF</button></div>
</div>
<script>window.onload = function(){ setTimeout(function(){ window.print(); }, 400); };<\/script>
</body></html>`;

    const win = window.open('', '_blank');
    if (!win) {
      alert('Veuillez autoriser les fenêtres pop-up pour générer le document.');
      return;
    }
    win.document.open();
    win.document.write(html);
    win.document.close();
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-[#f2f1e4]">Génération de documents</h2>

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
              <div className="rounded-lg bg-[#14241b] border border-[#f2f1e4]/10 p-4 space-y-1 text-sm">
                <p className="text-[#2BCA8F] font-medium">{selectedBien.reference}</p>
                <p className="text-[#f2f1e4]">{selectedBien.titre}</p>
                <p className="text-[#a9b8aa]">{selectedBien.adresse}, {selectedBien.ville}</p>
                <p className="text-[#a9b8aa]">{selectedBien.type_bien} · {selectedBien.surface_habitable} m² · {selectedBien.prix?.toLocaleString('fr-FR')} €</p>
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
          <Printer size={16} />
          Générer le document (PDF)
        </Button>
      </div>
    </div>
  );
}
