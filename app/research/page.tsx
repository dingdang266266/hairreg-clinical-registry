import { PlaceholderPanel } from "@/components/placeholder-panel";
import { RegistryLayout } from "@/components/registry-layout";

const researchItems = [
  { title: "Efficacy Analysis Q2 2026", status: "In Review", lead: "Dr. Rivera" },
  { title: "Adverse Event Summary", status: "Draft", lead: "Dr. Chen" },
  { title: "Follow-up Compliance Report", status: "Published", lead: "Dr. Rivera" },
];

export default function ResearchPage() {
  return (
    <RegistryLayout
      title="Research"
      subtitle="Registry analytics and publication outputs"
      headerActions={
        <button
          type="button"
          className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
        >
          New Report
        </button>
      }
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Active Studies</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">2</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Reports Generated</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">8</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Publications</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">1</p>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-6 py-4">
          <h2 className="text-sm font-semibold text-slate-900">Research Outputs</h2>
        </div>
        <ul className="divide-y divide-slate-100">
          {researchItems.map((item) => (
            <li key={item.title} className="flex items-center justify-between px-6 py-4">
              <div>
                <p className="text-sm font-medium text-slate-900">{item.title}</p>
                <p className="text-xs text-slate-500">Lead: {item.lead}</p>
              </div>
              <span className="inline-flex rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                {item.status}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <PlaceholderPanel
          title="Analytics pipeline pending"
          description="Research dashboards and exportable datasets will be generated from registry data once the database is connected."
        />
      </div>
    </RegistryLayout>
  );
}
