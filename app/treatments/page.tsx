import { PlaceholderPanel } from "@/components/placeholder-panel";
import { RegistryLayout } from "@/components/registry-layout";

const sampleTreatments = [
  { id: "TX-101", patient: "HR-001", type: "PRP Injection", date: "Jun 10, 2026", status: "Completed" },
  { id: "TX-102", patient: "HR-014", type: "Microneedling", date: "Jun 11, 2026", status: "Completed" },
  { id: "TX-103", patient: "HR-029", type: "PRP Injection", date: "Jun 12, 2026", status: "Scheduled" },
  { id: "TX-104", patient: "HR-031", type: "Topical Protocol", date: "Jun 13, 2026", status: "In Progress" },
];

export default function TreatmentsPage() {
  return (
    <RegistryLayout
      title="Treatments"
      subtitle="Track treatment sessions across the registry"
      headerActions={
        <button
          type="button"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Log Treatment
        </button>
      }
    >
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-6 py-4">
          <h2 className="text-sm font-semibold text-slate-900">Treatment Sessions</h2>
          <p className="text-xs text-slate-500">156 total sessions — placeholder data</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50 text-xs font-medium uppercase tracking-wide text-slate-500">
                <th className="px-6 py-3">Session ID</th>
                <th className="px-6 py-3">Patient</th>
                <th className="px-6 py-3">Type</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sampleTreatments.map((treatment) => (
                <tr key={treatment.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">{treatment.id}</td>
                  <td className="px-6 py-4 text-slate-700">{treatment.patient}</td>
                  <td className="px-6 py-4 text-slate-700">{treatment.type}</td>
                  <td className="px-6 py-4 text-slate-500">{treatment.date}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">
                      {treatment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6">
        <PlaceholderPanel
          title="Database not connected"
          description="Treatment records are placeholder entries. Full session logging and outcome tracking will be available after database integration."
        />
      </div>
    </RegistryLayout>
  );
}
