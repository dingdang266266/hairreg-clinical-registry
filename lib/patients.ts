export type Patient = {
  id: string;
  patient_code: string;
  name: string;
  gender: string;
  birth_date: string;
  diagnosis: string;
  enrollment_date: string;
  phone: string | null;
  email: string | null;
};

export type NewPatient = Omit<Patient, "id">;

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function calculateAge(birthDate: string): number {
  const birth = new Date(birthDate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
}

export function todayDateInputValue(): string {
  return new Date().toISOString().split("T")[0];
}
