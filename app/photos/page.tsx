import { PlaceholderPanel } from "@/components/placeholder-panel";
import { RegistryLayout } from "@/components/registry-layout";

const photoSets = [
  { patient: "HR-001", type: "Baseline", count: 4, date: "Jan 12, 2026" },
  { patient: "HR-014", type: "3-Month Follow-up", count: 4, date: "May 3, 2026" },
  { patient: "HR-029", type: "6-Month Follow-up", count: 4, date: "Jun 1, 2026" },
  { patient: "HR-031", type: "Baseline", count: 4, date: "Apr 2, 2026" },
];

export default function PhotosPage() {
  return (
    <RegistryLayout
      title="Photos"
      subtitle="Clinical photography and progress documentation"
      headerActions={
        <button
          type="button"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Upload Photos
        </button>
      }
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {photoSets.map((set) => (
          <div
            key={`${set.patient}-${set.type}`}
            className="rounded-xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="flex aspect-[4/3] items-center justify-center rounded-t-xl bg-slate-100">
              <svg className="h-10 w-10 text-slate-300" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </div>
            <div className="p-4">
              <p className="text-sm font-medium text-slate-900">{set.patient}</p>
              <p className="text-xs text-slate-500">{set.type}</p>
              <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
                <span>{set.count} images</span>
                <span>{set.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <PlaceholderPanel
          title="Photo storage not connected"
          description="Image thumbnails and upload functionality will be enabled once cloud storage and the database are integrated."
        />
      </div>
    </RegistryLayout>
  );
}
