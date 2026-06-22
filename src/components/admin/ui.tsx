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
  const base = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/40';
  const variants = {
    primary: 'bg-[#C9A84C] text-[#0C0C0C] hover:bg-[#b8983f] disabled:opacity-50',
    secondary: 'bg-[#141414] text-white border border-[#2A2A2A] hover:bg-[#1a1a1a] disabled:opacity-50',
    ghost: 'text-[#C9A84C] hover:bg-[#C9A84C]/10 disabled:opacity-50',
    danger: 'bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 disabled:opacity-50',
  };
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
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
    <div className={cn('rounded-xl border border-[#2A2A2A] bg-[#141414] p-6', className)}>
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
    <Card className="flex items-start justify-between">
      <div>
        <p className="text-sm text-gray-400 mb-1">{label}</p>
        <p className="text-2xl font-bold text-white">{value}</p>
        {trend && (
          <p className={cn('text-xs mt-1', trendUp ? 'text-emerald-400' : 'text-red-400')}>
            {trendUp ? '↑' : '↓'} {trend}
          </p>
        )}
      </div>
      {icon && <div className="text-[#C9A84C] opacity-80">{icon}</div>}
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
      <label className="block text-sm font-medium text-gray-300">{label}</label>
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
        'w-full rounded-lg bg-[#0C0C0C] border border-[#2A2A2A] px-3 py-2 text-sm text-white placeholder-gray-500',
        'focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]/20',
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
        'w-full rounded-lg bg-[#0C0C0C] border border-[#2A2A2A] px-3 py-2 text-sm text-white placeholder-gray-500',
        'focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]/20',
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
        'w-full rounded-lg bg-[#0C0C0C] border border-[#2A2A2A] px-3 py-2 text-sm text-white',
        'focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]/20',
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
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className={cn('relative w-full rounded-xl border border-[#2A2A2A] bg-[#141414] shadow-2xl', sizes[size])}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2A2A2A]">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors text-2xl leading-none">
            ×
          </button>
        </div>
        <div className="px-6 py-5 max-h-[70vh] overflow-y-auto">{children}</div>
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
    <div className={cn('overflow-x-auto rounded-lg border border-[#2A2A2A]', className)}>
      <table className="w-full text-sm text-left">{children}</table>
    </div>
  );
}

export function TableHead({ children }: { children: React.ReactNode }) {
  return (
    <thead className="bg-[#0C0C0C] text-gray-400 uppercase text-xs">
      <tr>{children}</tr>
    </thead>
  );
}

export function TableHeadCell({ children, className }: { children: React.ReactNode; className?: string }) {
  return <th className={cn('px-4 py-3 font-medium', className)}>{children}</th>;
}

export function TableBody({ children }: { children: React.ReactNode }) {
  return <tbody className="divide-y divide-[#2A2A2A]">{children}</tbody>;
}

export function TableRow({ children, onClick, className }: { children: React.ReactNode; onClick?: () => void; className?: string }) {
  return (
    <tr
      onClick={onClick}
      className={cn(
        'bg-[#141414] hover:bg-[#1a1a1a] transition-colors',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {children}
    </tr>
  );
}

export function TableCell({ children, className, colSpan, rowSpan }: { children: React.ReactNode; className?: string; colSpan?: number; rowSpan?: number }) {
  return <td colSpan={colSpan} rowSpan={rowSpan} className={cn('px-4 py-3 text-white', className)}>{children}</td>;
}
