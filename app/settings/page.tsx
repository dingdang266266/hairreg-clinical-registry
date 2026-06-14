import { PlaceholderPanel } from "@/components/placeholder-panel";
import { RegistryLayout } from "@/components/registry-layout";

export default function SettingsPage() {
  return (
    <RegistryLayout
      title="Settings"
      subtitle="Registry configuration and preferences"
    >
      <div className="mx-auto max-w-2xl space-y-6">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900">Registry Information</h2>
          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-500">Registry Name</label>
              <input
                type="text"
                defaultValue="HairReg Clinical Registry"
                disabled
                className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500">Principal Investigator</label>
              <input
                type="text"
                defaultValue="Dr. Rivera"
                disabled
                className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500">Enrollment Target</label>
              <input
                type="text"
                defaultValue="50 patients"
                disabled
                className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700"
              />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900">Notifications</h2>
          <div className="mt-4 space-y-3">
            {[
              "Follow-up reminders",
              "Adverse event alerts",
              "Data completeness warnings",
            ].map((label) => (
              <label key={label} className="flex items-center justify-between text-sm text-slate-700">
                <span>{label}</span>
                <input type="checkbox" defaultChecked disabled className="h-4 w-4 rounded border-slate-300" />
              </label>
            ))}
          </div>
        </div>

        <PlaceholderPanel
          title="Settings are read-only"
          description="Configuration changes will be persisted once authentication and database integration are in place."
        />
      </div>
    </RegistryLayout>
  );
}
