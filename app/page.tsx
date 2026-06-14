import { RegistryLayout } from "@/components/registry-layout";

const stats = [
  {
    label: "Total Patients",
    value: "32",
    change: "+4 this month",
    changeType: "positive" as const,
    icon: (
      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
  {
    label: "Total Treatments",
    value: "156",
    change: "+23 this month",
    changeType: "positive" as const,
    icon: (
      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.611L5 14.5" />
      </svg>
    ),
  },
  {
    label: "Follow-up Rate",
    value: "78%",
    change: "+2.4% vs last quarter",
    changeType: "positive" as const,
    icon: (
      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    ),
  },
  {
    label: "Adverse Event Rate",
    value: "1.8%",
    change: "Within safety threshold",
    changeType: "neutral" as const,
    icon: (
      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    ),
  },
];

const recentActivity = [
  { patient: "Patient #HR-029", action: "Follow-up visit completed", time: "2 hours ago" },
  { patient: "Patient #HR-014", action: "Treatment session recorded", time: "5 hours ago" },
  { patient: "Patient #HR-031", action: "Baseline photos uploaded", time: "Yesterday" },
  { patient: "Patient #HR-008", action: "Adverse event logged — resolved", time: "Yesterday" },
];

export default function Home() {
  return (
    <RegistryLayout
      title="Dashboard"
      subtitle="Clinical registry overview"
      headerActions={
        <>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-600/20">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Registry Active
          </span>
          <button
            type="button"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
          >
            Export Report
          </button>
        </>
      }
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                  {stat.value}
                </p>
              </div>
              <div className="rounded-lg bg-blue-50 p-2.5">{stat.icon}</div>
            </div>
            <p
              className={`mt-4 text-xs font-medium ${
                stat.changeType === "positive"
                  ? "text-emerald-600"
                  : "text-slate-500"
              }`}
            >
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
            <h2 className="text-sm font-semibold text-slate-900">Recent Activity</h2>
            <span className="text-xs font-medium text-blue-600">View all</span>
          </div>
          <ul className="divide-y divide-slate-100">
            {recentActivity.map((entry) => (
              <li key={entry.patient} className="flex items-center justify-between px-6 py-4">
                <div>
                  <p className="text-sm font-medium text-slate-900">{entry.patient}</p>
                  <p className="text-sm text-slate-500">{entry.action}</p>
                </div>
                <span className="text-xs text-slate-400">{entry.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-4">
            <h2 className="text-sm font-semibold text-slate-900">Registry Status</h2>
          </div>
          <div className="space-y-4 p-6">
            <div>
              <div className="mb-1.5 flex justify-between text-xs">
                <span className="font-medium text-slate-600">Enrollment Target</span>
                <span className="text-slate-900">32 / 50</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[64%] rounded-full bg-blue-600" />
              </div>
            </div>
            <div>
              <div className="mb-1.5 flex justify-between text-xs">
                <span className="font-medium text-slate-600">Data Completeness</span>
                <span className="text-slate-900">91%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[91%] rounded-full bg-blue-500" />
              </div>
            </div>
            <div>
              <div className="mb-1.5 flex justify-between text-xs">
                <span className="font-medium text-slate-600">Follow-up Compliance</span>
                <span className="text-slate-900">78%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[78%] rounded-full bg-blue-400" />
              </div>
            </div>
            <div className="rounded-lg bg-blue-50 px-4 py-3">
              <p className="text-xs font-medium text-blue-800">Next scheduled review</p>
              <p className="mt-0.5 text-sm font-semibold text-blue-900">June 28, 2026</p>
            </div>
          </div>
        </div>
      </div>
    </RegistryLayout>
  );
}
