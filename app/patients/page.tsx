import {
  AddPatientButton,
  AddPatientProvider,
  AddPatientSuccessAlert,
} from "@/components/add-patient-provider";
import { RegistryLayout } from "@/components/registry-layout";
import { supabase } from "@/lib/supabase";
import { calculateAge, formatDate, type Patient } from "@/lib/patients";

export default async function PatientsPage() {
  const { data, error } = await supabase
    .from("patients")
    .select(
      "id, patient_code, name, gender, birth_date, diagnosis, enrollment_date, phone, email"
    )
    .order("enrollment_date", { ascending: false });

  const patients = (data ?? []) as Patient[];

  return (
    <AddPatientProvider>
      <RegistryLayout
        title="Patients"
        subtitle="Manage enrolled registry participants"
        headerActions={<AddPatientButton />}
      >
        <AddPatientSuccessAlert />

        {error ? (
          <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-sm text-red-800">
            <p className="font-semibold">Failed to load patients</p>
            <p className="mt-2">{error.message}</p>
          </div>
        ) : (
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 px-6 py-4">
              <h2 className="text-sm font-semibold text-slate-900">Patient Registry</h2>
              <p className="text-xs text-slate-500">
                {patients.length} patient{patients.length === 1 ? "" : "s"} enrolled
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50 text-xs font-medium uppercase tracking-wide text-slate-500">
                    <th className="px-6 py-3">Patient Code</th>
                    <th className="px-6 py-3">Gender</th>
                    <th className="px-6 py-3">Age</th>
                    <th className="px-6 py-3">Diagnosis</th>
                    <th className="px-6 py-3">Enrollment Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {patients.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                        No patients found
                      </td>
                    </tr>
                  ) : (
                    patients.map((patient) => (
                      <tr key={patient.id} className="hover:bg-slate-50">
                        <td className="px-6 py-4 font-medium text-slate-900">
                          {patient.patient_code}
                        </td>
                        <td className="px-6 py-4 text-slate-700">{patient.gender}</td>
                        <td className="px-6 py-4 text-slate-700">
                          {calculateAge(patient.birth_date)}
                        </td>
                        <td className="px-6 py-4 text-slate-700">{patient.diagnosis}</td>
                        <td className="px-6 py-4 text-slate-500">
                          {formatDate(patient.enrollment_date)}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </RegistryLayout>
    </AddPatientProvider>
  );
}
