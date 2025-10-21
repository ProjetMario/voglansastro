import { useState } from 'react';

interface EstimationFormProps {
  cityName: string;
}

export default function EstimationForm({ cityName }: EstimationFormProps) {
  const [formData, setFormData] = useState({
    address: '',
    type: '',
    surface: '',
    pieces: '',
    etat: '',
    atouts: '',
    nom: '',
    email: '',
    telephone: '',
    rgpd: false,
    honeypot: '' // Anti-spam
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [startTime] = useState(Date.now());
  const [result, setResult] = useState({ hubspot: null });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Anti-spam: vérifier le honeypot et le délai minimum
    if (formData.honeypot || Date.now() - startTime < 3000) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simuler l'envoi (à remplacer par votre API)
      // await new Promise(resolve => setTimeout(resolve, 1500));
      
      // En production, envoyer à votre backend
      const response = await fetch('/api/estimation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, city: cityName })
      });
      
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Erreur lors de l\'envoi');
      }

      setSubmitStatus('success');
      setResult({ hubspot: result.hubspot });
      
      // Reset form après succès
      setTimeout(() => {
        setFormData({
          address: '',
          type: '',
          surface: '',
          pieces: '',
          etat: '',
          atouts: '',
          nom: '',
          email: '',
          telephone: '',
          rgpd: false,
          honeypot: ''
        });
        setSubmitStatus('idle');
      }, 5000);
      
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <section id="formulaire" className="py-16 bg-gradient-to-br from-primary/5 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">
              Demandez votre estimation gratuite à {cityName}
            </h2>
            <p className="text-xl text-muted">
              Remplissez ce formulaire, nous vous recontactons sous 48h
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
            {/* Honeypot anti-spam (caché) */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              style={{ position: 'absolute', left: '-9999px' }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            {/* Adresse du bien */}
            <div>
              <label htmlFor="address" className="block text-sm font-semibold text-foreground mb-2">
                Adresse du bien <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                placeholder={`Ex: 12 rue de la République, ${cityName}`}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>

            {/* Type de bien */}
            <div>
              <label htmlFor="type" className="block text-sm font-semibold text-foreground mb-2">
                Type de bien <span className="text-red-500">*</span>
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              >
                <option value="">Sélectionnez...</option>
                <option value="appartement">Appartement</option>
                <option value="maison">Maison</option>
                <option value="terrain">Terrain</option>
                <option value="immeuble">Immeuble</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            {/* Surface et Pièces */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="surface" className="block text-sm font-semibold text-foreground mb-2">
                  Surface (m²) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="surface"
                  name="surface"
                  value={formData.surface}
                  onChange={handleChange}
                  required
                  min="1"
                  placeholder="Ex: 85"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="pieces" className="block text-sm font-semibold text-foreground mb-2">
                  Nombre de pièces <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="pieces"
                  name="pieces"
                  value={formData.pieces}
                  onChange={handleChange}
                  required
                  min="1"
                  placeholder="Ex: 4"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* État */}
            <div>
              <label htmlFor="etat" className="block text-sm font-semibold text-foreground mb-2">
                État général <span className="text-red-500">*</span>
              </label>
              <select
                id="etat"
                name="etat"
                value={formData.etat}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              >
                <option value="">Sélectionnez...</option>
                <option value="neuf">Neuf / Récent</option>
                <option value="bon">Bon état</option>
                <option value="moyen">État moyen</option>
                <option value="travaux">À rénover</option>
              </select>
            </div>

            {/* Atouts */}
            <div>
              <label htmlFor="atouts" className="block text-sm font-semibold text-foreground mb-2">
                Atouts particuliers (optionnel)
              </label>
              <textarea
                id="atouts"
                name="atouts"
                value={formData.atouts}
                onChange={handleChange}
                rows={3}
                placeholder="Ex: Vue dégagée, jardin, parking, cave..."
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
              />
            </div>

            {/* Coordonnées */}
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Vos coordonnées</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="nom" className="block text-sm font-semibold text-foreground mb-2">
                    Nom complet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    placeholder="Ex: Jean Dupont"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="votre@email.fr"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="telephone" className="block text-sm font-semibold text-foreground mb-2">
                      Téléphone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      required
                      placeholder="06 12 34 56 78"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* RGPD */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="rgpd"
                name="rgpd"
                checked={formData.rgpd}
                onChange={handleChange}
                required
                className="mt-1 w-5 h-5 text-primary border-border rounded focus:ring-2 focus:ring-primary"
              />
              <label htmlFor="rgpd" className="text-sm text-muted">
                J'accepte que mes données soient utilisées pour me recontacter concernant ma demande d'estimation. 
                Conformément au RGPD, vous pouvez exercer vos droits via notre{' '}
                <a href="/politique-de-confidentialite" className="text-primary hover:underline">
                  politique de confidentialité
                </a>.
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting || !formData.rgpd}
              className="w-full btn-primary px-8 py-4 rounded-full text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Envoi en cours...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Envoyer ma demande
                </>
              )}
            </button>

            {/* Messages de statut */}
            {submitStatus === 'success' && (
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 flex items-start gap-3" role="alert">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-green-900">Demande envoyée avec succès !</p>
                  <p className="text-sm text-green-700">
                    Nous vous recontactons sous 48h pour planifier la visite d'estimation.
                    {result?.hubspot === 'success' && (
                      <span className="block mt-1 font-medium">
                        ✓ Vos informations ont été transmises à notre système de gestion client.
                      </span>
                    )}
                  </p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 flex items-start gap-3" role="alert">
                <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-red-900">Une erreur est survenue</p>
                  <p className="text-sm text-red-700">Veuillez réessayer ou nous contacter directement au 07 57 83 02 62.</p>
                </div>
              </div>
            )}
          </form>

          {/* Contact alternatif */}
          <div className="mt-8 text-center">
            <p className="text-muted mb-4">Vous préférez échanger directement ?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0757830262" 
                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Appelez-nous : 07 57 83 02 62
              </a>
              <span className="text-muted hidden sm:inline">•</span>
              <span className="text-muted">Du lundi au samedi, 9h-19h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
