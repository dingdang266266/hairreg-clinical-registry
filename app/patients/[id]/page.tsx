import Link from "next/link";
import { PlaceholderPanel } from "@/components/placeholder-panel";
import { RegistryLayout } from "@/components/registry-layout";

type PatientDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function PatientDetailPage({ params }: PatientDetailPageProps) {
  const { id } = await params;

  return (
    <RegistryLayout
      title={`Patient ${id}`}
      subtitle="Individual patient record"
      headerActions={
        <Link
          href="/patients"
          className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
        >
          Back to Patients
        </Link>
      }
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-slate-900">Demographics</h2>
            <dl className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-slate-500">Patient ID</dt>
                <dd className="mt-1 font-medium text-slate-900">{id}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Status</dt>
                <dd className="mt-1 font-medium text-slate-900">Active</dd>
              </div>
              <div>
                <dt className="text-slate-500">Enrollment Date</dt>
                <dd className="mt-1 font-medium text-slate-900">Jan 12, 2026</dd>
              </div>
              <div>
                <dt className="text-slate-500">Principal Investigator</dt>
                <dd className="mt-1 font-medium text-slate-900">Dr. Rivera</dd>
              </div>
            </dl>
          </div>

          <PlaceholderPanel
            title="Treatment history"
            description="Treatment sessions, follow-up visits, and outcome data for this patient will appear here once the database is connected."
          />
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-slate-900">Quick Stats</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex justify-between">
                <span className="text-slate-500">Treatments</span>
                <span className="font-medium text-slate-900">5</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-500">Photos</span>
                <span className="font-medium text-slate-900">12</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-500">Follow-ups</span>
                <span className="font-medium text-slate-900">3 / 4</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-500">Adverse Events</span>
                <span className="font-medium text-slate-900">0</span>
              </li>
            </ul>
          </div>

          <PlaceholderPanel
            title="Clinical notes"
            description="Physician notes and observation logs will be stored here."
          />
        </div>
      </div>
    </RegistryLayout>
  );
}
