import type { IApiResponse } from "../../interfaces/api/iApiResponse";
import type { StudentModel } from "../../model/student/studentModel";
import StudentRepository from "../../repo/student/studentRepository";

export class StudentController extends StudentRepository {
  data: IApiResponse<StudentModel[]> | null = null;

  async getAllStudents() {
    this.data = await this.readAll();
  }

  async createStudent(student: StudentModel) {
    this.data = await this.create(student);
  }
    async updateStudent(student: StudentModel) {
    this.data = await this.update(student);
  }
}
