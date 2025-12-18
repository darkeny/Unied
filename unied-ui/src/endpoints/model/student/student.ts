export interface StudentModel {
  id_student: number;
  student_number: string;
  full_name: string;
  date_of_birth: Date;
  gender: string;
  email: string;
  phone: string;
  address: string;
  guardian_name: string;
  guardian_phone: string;
  registration_date: Date;
  status: string;
  photo?: string;
}