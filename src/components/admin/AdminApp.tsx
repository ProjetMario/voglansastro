import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button, Card, Field, TextInput } from './ui';
import {
  LayoutDashboard,
  Calendar,
  FileText,
  MessageSquare,
  Home,
  Printer,
  Users,
  FolderOpen,
  LogOut,
  ShieldAlert,
  Loader2,
} from 'lucide-react';
import type { AdminTab, Profile, Visite, Mandat, Demande, Bien, Contact, Opportunite } from './types';
import DashboardTab from './DashboardTab';
import VisitesTab from './VisitesTab';
import MandatsTab from './MandatsTab';
import DemandesTab from './DemandesTab';
import BiensTab from './BiensTab';
import DocumentsTab from './DocumentsTab';
import ClientsTab from './ClientsTab';
import FichiersTab from './FichiersTab';

const TABS: { id: AdminTab; label: string; icon: React.ReactNode }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
  { id: 'visites', label: 'Visites', icon: <Calendar size={18} /> },
  { id: 'mandats', label: 'Mandats', icon: <FileText size={18} /> },
  { id: 'demandes', label: 'Demandes', icon: <MessageSquare size={18} /> },
  { id: 'biens', label: 'Biens', icon: <Home size={18} /> },
  { id: 'documents', label: 'Documents', icon: <Printer size={18} /> },
  { id: 'clients', label: 'Clients', icon: <Users size={18} /> },
  { id: 'fichiers', label: 'Fichiers', icon: <FolderOpen size={18} /> },
];

export default function AdminApp() {
  const [session, setSession] = useState<any>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [checkingRole, setCheckingRole] = useState(false);
  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  const [data, setData] = useState<{
    visites: Visite[];
    mandats: Mandat[];
    demandes: Demande[];
    biens: Bien[];
    contacts: Contact[];
    opportunites: Opportunite[];
  }>({
    visites: [], mandats: [], demandes: [], biens: [], contacts: [], opportunites: [],
  });

  // Check session on mount
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoadingAuth(false);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  // Load profile when session changes
  useEffect(() => {
    if (session?.user?.id) {
      loadProfile(session.user.id);
    } else {
      setProfile(null);
    }
  }, [session]);

  // Load data for dashboard
  useEffect(() => {
    if (profile?.role === 'admin') {
      loadAllData();
    }
  }, [profile]);

  async function loadProfile(userId: string) {
    setCheckingRole(true);
    const { data, error } = await supabase.from('profiles').select('*').eq('id', userId).single();
    if (!error && data) {
      setProfile(data as Profile);
    }
    setCheckingRole(false);
  }

  async function loadAllData() {
    const [v, m, d, b, c, o] = await Promise.all([
      supabase.from('visites').select('*').order('created_at', { ascending: false }).limit(100),
      supabase.from('mandats').select('*').order('created_at', { ascending: false }).limit(100),
      supabase.from('demandes').select('*').order('created_at', { ascending: false }).limit(100),
      supabase.from('biens').select('*').order('created_at', { ascending: false }).limit(100),
      supabase.from('contacts').select('*').order('created_at', { ascending: false }).limit(100),
      supabase.from('opportunites').select('*').order('created_at', { ascending: false }).limit(100),
    ]);
    setData({
      visites: v.data as Visite[] || [],
      mandats: m.data as Mandat[] || [],
      demandes: d.data as Demande[] || [],
      biens: b.data as Bien[] || [],
      contacts: c.data as Contact[] || [],
      opportunites: o.data as Opportunite[] || [],
    });
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginError('');
    setLoginLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email: loginEmail, password: loginPassword });
    if (error) setLoginError(error.message);
    setLoginLoading(false);
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    setActiveTab('dashboard');
  }

  if (loadingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#14241b]">
        <Loader2 className="animate-spin text-[#2BCA8F]" size={32} />
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-[#14241b] relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#2BCA8F]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#2BCA8F]/5 blur-3xl" />
        <div className="adm-fade-up w-full max-w-md">
          <Card className="backdrop-blur-sm">
            <div className="text-center mb-7">
              <div className="mx-auto mb-5 inline-flex items-center justify-center rounded-2xl overflow-hidden ring-1 ring-[#f2f1e4]/15 shadow-lg">
                <img src="/images/logo-agence-voglans.png" alt="L'Agence de Voglans" className="h-24 w-24 object-cover" />
              </div>
              <h1 className="admin-serif text-2xl font-bold text-[#f2f1e4]">
                Agence <span className="text-[#2BCA8F]">Voglans</span>
              </h1>
              <p className="text-sm text-[#a9b8aa] mt-1">Espace administration</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <Field label="Email">
                <TextInput
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="admin@agencevoglans.fr"
                  required
                />
              </Field>
              <Field label="Mot de passe">
                <TextInput
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </Field>
              {loginError && (
                <p className="rounded-lg bg-red-500/10 border border-red-500/20 px-3 py-2 text-sm text-red-300">
                  {loginError}
                </p>
              )}
              <Button type="submit" size="lg" className="w-full" disabled={loginLoading}>
                {loginLoading ? 'Connexion...' : 'Se connecter'}
              </Button>
            </form>
          </Card>
          <p className="text-center text-xs text-[#6f8174] mt-5">L'immobilier local, 100% digital</p>
        </div>
      </div>
    );
  }

  if (checkingRole) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#14241b]">
        <Loader2 className="animate-spin text-[#2BCA8F]" size={32} />
      </div>
    );
  }

  if (!profile || profile.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-[#14241b]">
        <Card className="w-full max-w-md text-center adm-fade-up">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/15">
            <ShieldAlert className="text-red-300" size={28} />
          </div>
          <h2 className="admin-serif text-xl font-bold text-[#f2f1e4] mb-2">Accès refusé</h2>
          <p className="text-[#a9b8aa] mb-5">Votre compte n'a pas les permissions d'administrateur.</p>
          <Button onClick={handleLogout}>Déconnexion</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#14241b] text-[#f2f1e4]">
      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-[#f2f1e4]/10 bg-[#1f3528]/95 backdrop-blur">
        <div className="flex items-center justify-between px-4 lg:px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl overflow-hidden ring-1 ring-[#f2f1e4]/15">
              <img src="/images/logo-agence-voglans.png" alt="Agence Voglans" className="h-full w-full object-cover" />
            </div>
            <div>
              <h1 className="admin-serif text-base font-bold leading-tight">
                Agence <span className="text-[#2BCA8F]">Voglans</span>
              </h1>
              <p className="text-[11px] uppercase tracking-wider text-[#a9b8aa]">Administration</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-[#a9b8aa] hidden sm:inline">{profile.email}</span>
            <Button variant="secondary" size="sm" onClick={handleLogout}>
              <LogOut size={15} /> Déconnexion
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="lg:w-60 lg:min-h-[calc(100vh-65px)] border-b lg:border-b-0 lg:border-r border-[#f2f1e4]/10 bg-[#1f3528]">
          <nav className="flex lg:flex-col overflow-x-auto lg:overflow-visible p-3 gap-1">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#2BCA8F]/15 text-[#2BCA8F]'
                    : 'text-[#a9b8aa] hover:text-[#f2f1e4] hover:bg-[#f2f1e4]/6'
                }`}
              >
                {activeTab === tab.id && (
                  <span className="absolute left-0 top-1/2 hidden h-5 w-1 -translate-y-1/2 rounded-r-full bg-[#2BCA8F] lg:block" />
                )}
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 p-4 lg:p-8 overflow-auto adm-fade-up" key={activeTab}>
          {activeTab === 'dashboard' && (
            <DashboardTab
              visites={data.visites}
              mandats={data.mandats}
              demandes={data.demandes}
              biens={data.biens}
              contacts={data.contacts}
              opportunites={data.opportunites}
            />
          )}
          {activeTab === 'visites' && <VisitesTab />}
          {activeTab === 'mandats' && <MandatsTab />}
          {activeTab === 'demandes' && <DemandesTab />}
          {activeTab === 'biens' && <BiensTab />}
          {activeTab === 'documents' && <DocumentsTab biens={data.biens} />}
          {activeTab === 'clients' && <ClientsTab />}
          {activeTab === 'fichiers' && <FichiersTab mandats={data.mandats} />}
        </main>
      </div>
    </div>
  );
}
