export interface GradeModel {
  id_grade: number;
  id_student: number;
  id_class: number;
  subject: string;
  term: string;
  assessment_type: string;
  grade_value: number;
  recorded_at: Date;
  id_teacher: number;
  remarks?: string;
}