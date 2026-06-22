import React from 'react';
import { cn } from '@/lib/utils';

// ─── Button ─────────────────────────────────────────────
export function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className,
  type = 'button',
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}) {
  const base = 'inline-flex items-center justify-center gap-1.5 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2BCA8F]/40 active:scale-[0.98]';
  const variants = {
    primary: 'bg-[#2BCA8F] text-[#0c1c14] hover:bg-[#34d99b] shadow-lg shadow-[#2BCA8F]/20 disabled:opacity-50',
    secondary: 'bg-[#f2f1e4]/5 text-[#f2f1e4] border border-[#f2f1e4]/15 hover:bg-[#f2f1e4]/10 disabled:opacity-50',
    ghost: 'text-[#a9b8aa] hover:text-[#f2f1e4] hover:bg-[#f2f1e4]/8 disabled:opacity-50',
    danger: 'bg-red-500/15 text-red-300 border border-red-500/25 hover:bg-red-500/25 disabled:opacity-50',
  };
  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
    </button>
  );
}

// ─── Card ───────────────────────────────────────────────
export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('rounded-2xl border border-[#f2f1e4]/10 bg-[#1f3528] p-6 shadow-xl shadow-black/20', className)}>
      {children}
    </div>
  );
}

// ─── StatCard ───────────────────────────────────────────
export function StatCard({
  label,
  value,
  icon,
  trend,
  trendUp,
}: {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: string;
  trendUp?: boolean;
}) {
  return (
    <Card className="flex items-start justify-between hover:border-[#2BCA8F]/30 transition-colors">
      <div>
        <p className="text-xs uppercase tracking-wide text-[#a9b8aa] mb-2">{label}</p>
        <p className="admin-serif text-3xl font-bold text-[#f2f1e4]">{value}</p>
        {trend && (
          <p className={cn('text-xs mt-1.5', trendUp ? 'text-[#2BCA8F]' : 'text-red-400')}>
            {trendUp ? '↑' : '↓'} {trend}
          </p>
        )}
      </div>
      {icon && (
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2BCA8F]/15 text-[#2BCA8F]">
          {icon}
        </div>
      )}
    </Card>
  );
}

// ─── Badge ──────────────────────────────────────────────
export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn('inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border', className)}>
      {children}
    </span>
  );
}

// ─── Field ──────────────────────────────────────────────
export function Field({ label, children, error, className }: { label: string; children: React.ReactNode; error?: string; className?: string }) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <label className="block text-sm font-medium text-[#cdd6cc]">{label}</label>
      {children}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}

// ─── TextInput ──────────────────────────────────────────
export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        'w-full rounded-xl bg-[#14241b] border border-[#f2f1e4]/12 px-3.5 py-2.5 text-sm text-[#f2f1e4] placeholder-[#6f8174]',
        'focus:outline-none focus:border-[#2BCA8F] focus:ring-2 focus:ring-[#2BCA8F]/20 transition-colors',
        'disabled:opacity-50',
        props.className
      )}
    />
  );
}

// ─── TextArea ───────────────────────────────────────────
export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(
        'w-full rounded-xl bg-[#14241b] border border-[#f2f1e4]/12 px-3.5 py-2.5 text-sm text-[#f2f1e4] placeholder-[#6f8174]',
        'focus:outline-none focus:border-[#2BCA8F] focus:ring-2 focus:ring-[#2BCA8F]/20 transition-colors',
        'disabled:opacity-50 resize-y',
        props.className
      )}
    />
  );
}

// ─── Select ─────────────────────────────────────────────
export function Select({
  value,
  onChange,
  options,
  placeholder,
  className,
  ariaLabel,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <select
      aria-label={ariaLabel || placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={cn(
        'w-full rounded-xl bg-[#14241b] border border-[#f2f1e4]/12 px-3.5 py-2.5 text-sm text-[#f2f1e4]',
        'focus:outline-none focus:border-[#2BCA8F] focus:ring-2 focus:ring-[#2BCA8F]/20 transition-colors',
        'disabled:opacity-50',
        className
      )}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

// ─── Modal ──────────────────────────────────────────────
export function Modal({
  open,
  onClose,
  title,
  children,
  size = 'md',
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}) {
  if (!open) return null;
  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className={cn('adm-scale-in relative w-full rounded-2xl border border-[#f2f1e4]/12 bg-[#1f3528] shadow-2xl', sizes[size])}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#f2f1e4]/10">
          <h3 className="admin-serif text-xl font-semibold text-[#f2f1e4]">{title}</h3>
          <button onClick={onClose} aria-label="Fermer" className="flex h-8 w-8 items-center justify-center rounded-lg text-[#a9b8aa] hover:text-[#f2f1e4] hover:bg-[#f2f1e4]/8 transition-colors text-2xl leading-none">
            ×
          </button>
        </div>
        <div className="px-6 py-5 max-h-[72vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}

// ─── TableShell ─────────────────────────────────────────
export function TableShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('overflow-x-auto rounded-2xl border border-[#f2f1e4]/10 bg-[#1f3528] shadow-xl shadow-black/20', className)}>
      <table className="w-full text-sm text-left">{children}</table>
    </div>
  );
}

export function TableHead({ children }: { children: React.ReactNode }) {
  return (
    <thead className="bg-[#14241b]/60 text-[#a9b8aa] uppercase text-[11px] tracking-wider">
      <tr>{children}</tr>
    </thead>
  );
}

export function TableHeadCell({ children, className }: { children: React.ReactNode; className?: string }) {
  return <th className={cn('px-4 py-3.5 font-semibold', className)}>{children}</th>;
}

export function TableBody({ children }: { children: React.ReactNode }) {
  return <tbody className="divide-y divide-[#f2f1e4]/8">{children}</tbody>;
}

export function TableRow({ children, onClick, className }: { children: React.ReactNode; onClick?: () => void; className?: string }) {
  return (
    <tr
      onClick={onClick}
      className={cn(
        'hover:bg-[#f2f1e4]/5 transition-colors',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {children}
    </tr>
  );
}

export function TableCell({ children, className, colSpan, rowSpan }: { children: React.ReactNode; className?: string; colSpan?: number; rowSpan?: number }) {
  return <td colSpan={colSpan} rowSpan={rowSpan} className={cn('px-4 py-3.5 text-[#e3e7e0]', className)}>{children}</td>;
}
