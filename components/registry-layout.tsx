import type { ReactNode } from "react";
import { Sidebar } from "./sidebar";

type RegistryLayoutProps = {
  title: string;
  subtitle?: string;
  headerActions?: ReactNode;
  children: ReactNode;
};

export function RegistryLayout({
  title,
  subtitle,
  headerActions,
  children,
}: RegistryLayoutProps) {
  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      <Sidebar />

      <div className="flex flex-1 flex-col pl-64">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-8">
          <div>
            <h1 className="text-lg font-semibold text-slate-900">{title}</h1>
            {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
          </div>
          {headerActions && (
            <div className="flex items-center gap-3">{headerActions}</div>
          )}
        </header>

        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
