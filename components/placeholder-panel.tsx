type PlaceholderPanelProps = {
  title: string;
  description: string;
};

export function PlaceholderPanel({ title, description }: PlaceholderPanelProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mx-auto max-w-lg text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
          <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75a3.375 3.375 0 0 0-3.375 3.375v1.5c0 .621.504 1.125 1.125 1.125H9.75v1.875a3.375 3.375 0 0 0 3.375 3.375h1.5a3.375 3.375 0 0 0 3.375-3.375V15a1.125 1.125 0 0 1 1.125-1.125h1.5a3.375 3.375 0 0 0 3.375-3.375Z" />
          </svg>
        </div>
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        <p className="mt-2 text-sm text-slate-500">{description}</p>
      </div>
    </div>
  );
}
