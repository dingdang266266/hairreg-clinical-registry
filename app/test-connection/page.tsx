import { RegistryLayout } from "@/components/registry-layout";
import { supabase } from "@/lib/supabase";

function formatCellValue(value: unknown): string {
  if (value === null || value === undefined) {
    return "—";
  }

  if (typeof value === "object") {
    return JSON.stringify(value);
  }

  return String(value);
}

export default async function TestConnectionPage() {
  const { data, error } = await supabase.from("patients").select("*");

  const columns =
    data && data.length > 0
      ? Array.from(new Set(data.flatMap((row) => Object.keys(row))))
      : [];

  return (
    <RegistryLayout
      title="Supabase Test Connection"
      subtitle="Reads all rows from the patients table"
    >
      {error ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-sm text-red-800">
          <p className="font-semibold">Connection failed</p>
          <p className="mt-2">{error.message}</p>
          <p className="mt-4 text-xs text-red-700">
            Check that your publishable key is set in <code>.env.local</code> and
            that Row Level Security policies allow read access to the patients table.
          </p>
        </div>
      ) : (
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-4">
            <h2 className="text-sm font-semibold text-slate-900">Patients</h2>
            <p className="text-xs text-emerald-600">
              Connected — {data?.length ?? 0} row{(data?.length ?? 0) === 1 ? "" : "s"} returned
            </p>
          </div>

          {!data || data.length === 0 ? (
            <div className="px-6 py-8 text-sm text-slate-500">
              Connection successful, but the patients table is empty.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50 text-xs font-medium uppercase tracking-wide text-slate-500">
                    {columns.map((column) => (
                      <th key={column} className="px-6 py-3">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {data.map((row, index) => (
                    <tr key={String(row.id ?? index)} className="hover:bg-slate-50">
                      {columns.map((column) => (
                        <td key={column} className="px-6 py-4 text-slate-700">
                          {formatCellValue(row[column as keyof typeof row])}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </RegistryLayout>
  );
}
