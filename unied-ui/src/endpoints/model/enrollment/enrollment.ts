export interface EnrollmentModel {
  id_enrollment: number;
  id_student: number;
  id_class: number;
  enrollment_date: Date;
  academic_year: string;
  enrollment_type: string;
  amount_paid: number;
  status: string;
  documents?: string;
}