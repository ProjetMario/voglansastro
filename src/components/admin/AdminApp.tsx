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
      <div className="min-h-screen bg-[#0C0C0C] flex items-center justify-center">
        <Loader2 className="animate-spin text-[#C9A84C]" size={32} />
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-[#0C0C0C] flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#C9A84C]/20 text-[#C9A84C] mb-3">
              <span className="text-xl font-bold">V</span>
            </div>
            <h1 className="text-2xl font-bold text-white">Agence Voglans</h1>
            <p className="text-gray-400 text-sm mt-1">Espace administration</p>
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
            {loginError && <p className="text-sm text-red-400">{loginError}</p>}
            <Button type="submit" className="w-full" disabled={loginLoading}>
              {loginLoading ? 'Connexion...' : 'Se connecter'}
            </Button>
          </form>
        </Card>
      </div>
    );
  }

  if (checkingRole) {
    return (
      <div className="min-h-screen bg-[#0C0C0C] flex items-center justify-center">
        <Loader2 className="animate-spin text-[#C9A84C]" size={32} />
      </div>
    );
  }

  if (!profile || profile.role !== 'admin') {
    return (
      <div className="min-h-screen bg-[#0C0C0C] flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <ShieldAlert className="mx-auto text-red-400 mb-3" size={48} />
          <h2 className="text-xl font-bold text-white mb-2">Accès refusé</h2>
          <p className="text-gray-400 mb-4">Votre compte n'a pas les permissions d'administrateur.</p>
          <Button onClick={handleLogout}>Déconnexion</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white">
      {/* Top bar */}
      <header className="border-b border-[#2A2A2A] bg-[#141414]">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#C9A84C]/20 text-[#C9A84C] flex items-center justify-center font-bold text-sm">
              V
            </div>
            <div>
              <h1 className="text-sm font-bold text-white">Agence Voglans</h1>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-400 hidden sm:inline">{profile.email}</span>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut size={16} className="mr-1" /> Déconnexion
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="lg:w-56 lg:min-h-[calc(100vh-57px)] border-b lg:border-b-0 lg:border-r border-[#2A2A2A] bg-[#141414]">
          <nav className="flex lg:flex-col overflow-x-auto lg:overflow-visible p-2 gap-1">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'bg-[#C9A84C]/10 text-[#C9A84C]'
                    : 'text-gray-400 hover:text-white hover:bg-[#1a1a1a]'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
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
