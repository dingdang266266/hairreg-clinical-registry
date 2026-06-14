"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { todayDateInputValue, type NewPatient } from "@/lib/patients";

type PatientFormState = {
  patient_code: string;
  name: string;
  gender: string;
  birth_date: string;
  diagnosis: string;
  enrollment_date: string;
  phone: string;
  email: string;
};

const emptyForm = (): PatientFormState => ({
  patient_code: "",
  name: "",
  gender: "",
  birth_date: "",
  diagnosis: "",
  enrollment_date: todayDateInputValue(),
  phone: "",
  email: "",
});

type AddPatientContextValue = {
  openModal: () => void;
  successMessage: string | null;
};

const AddPatientContext = createContext<AddPatientContextValue | null>(null);

function useAddPatientContext() {
  const context = useContext(AddPatientContext);
  if (!context) {
    throw new Error("AddPatient components must be used within AddPatientProvider");
  }
  return context;
}

export function AddPatientProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [form, setForm] = useState<PatientFormState>(emptyForm);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openModal = useCallback(() => {
    setForm(emptyForm());
    setError(null);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    if (isSubmitting) return;
    setIsOpen(false);
    setError(null);
  }, [isSubmitting]);

  const updateField = (field: keyof PatientFormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const payload: NewPatient = {
      patient_code: form.patient_code.trim(),
      name: form.name.trim(),
      gender: form.gender,
      birth_date: form.birth_date,
      diagnosis: form.diagnosis.trim(),
      enrollment_date: form.enrollment_date,
      phone: form.phone.trim() || null,
      email: form.email.trim() || null,
    };

    const { error: insertError } = await supabase.from("patients").insert(payload);

    setIsSubmitting(false);

    if (insertError) {
      setError(insertError.message);
      return;
    }

    setIsOpen(false);
    setForm(emptyForm());
    setSuccessMessage("Patient added successfully.");
    router.refresh();

    window.setTimeout(() => {
      setSuccessMessage(null);
    }, 5000);
  };

  return (
    <AddPatientContext.Provider value={{ openModal, successMessage }}>
      {children}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <button
            type="button"
            aria-label="Close modal"
            className="absolute inset-0 bg-slate-900/50"
            onClick={closeModal}
          />

          <div className="relative z-10 w-full max-w-lg rounded-xl border border-slate-200 bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Add Patient</h2>
                <p className="text-sm text-slate-500">Enroll a new registry participant</p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                disabled={isSubmitting}
                className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="max-h-[calc(100vh-8rem)] overflow-y-auto px-6 py-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="patient_code" className="block text-xs font-medium text-slate-600">
                    Patient Code
                  </label>
                  <input
                    id="patient_code"
                    type="text"
                    required
                    value={form.patient_code}
                    onChange={(event) => updateField("patient_code", event.target.value)}
                    className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="HR-032"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="name" className="block text-xs font-medium text-slate-600">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="Full name"
                  />
                </div>

                <div>
                  <label htmlFor="gender" className="block text-xs font-medium text-slate-600">
                    Gender
                  </label>
                  <select
                    id="gender"
                    required
                    value={form.gender}
                    onChange={(event) => updateField("gender", event.target.value)}
                    className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="birth_date" className="block text-xs font-medium text-slate-600">
                    Birth Date
                  </label>
                  <input
                    id="birth_date"
                    type="date"
                    required
                    value={form.birth_date}
                    onChange={(event) => updateField("birth_date", event.target.value)}
                    className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="diagnosis" className="block text-xs font-medium text-slate-600">
                    Diagnosis
                  </label>
                  <input
                    id="diagnosis"
                    type="text"
                    required
                    value={form.diagnosis}
                    onChange={(event) => updateField("diagnosis", event.target.value)}
                    className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="Clinical diagnosis"
                  />
                </div>

                <div>
                  <label htmlFor="enrollment_date" className="block text-xs font-medium text-slate-600">
                    Enrollment Date
                  </label>
                  <input
                    id="enrollment_date"
                    type="date"
                    required
                    value={form.enrollment_date}
                    onChange={(event) => updateField("enrollment_date", event.target.value)}
                    className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-slate-600">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(event) => updateField("phone", event.target.value)}
                    className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-xs font-medium text-slate-600">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="patient@example.com"
                  />
                </div>
              </div>

              {error && (
                <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                  {error}
                </div>
              )}

              <div className="mt-6 flex justify-end gap-3 border-t border-slate-200 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  disabled={isSubmitting}
                  className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
                >
                  {isSubmitting ? "Saving..." : "Save Patient"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AddPatientContext.Provider>
  );
}

export function AddPatientButton() {
  const { openModal } = useAddPatientContext();

  return (
    <button
      type="button"
      onClick={openModal}
      className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
    >
      Add Patient
    </button>
  );
}

export function AddPatientSuccessAlert() {
  const { successMessage } = useAddPatientContext();

  if (!successMessage) {
    return null;
  }

  return (
    <div className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
      {successMessage}
    </div>
  );
}
