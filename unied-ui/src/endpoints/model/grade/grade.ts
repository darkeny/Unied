export interface AttendanceModel {
  id_attendance: number;
  id_student: number;
  id_class: number;
  class_date: Date;
  check_in_time: string;
  check_out_time: string;
  attendance_status: string;
  notes?: string;
  id_teacher: number;
}