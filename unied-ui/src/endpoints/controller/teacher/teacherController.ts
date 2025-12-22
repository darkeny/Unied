import type { IApiResponse } from "../../interfaces/api/iApiResponse";
import type { TeacherModel } from "../../model/teacher/teacher";
import TeacherRepository from "../../repo/teacher/teacherRepository";


export class TeacherController extends TeacherRepository {
  data: IApiResponse<TeacherModel[]> | null = null;
  async readByIdTeachers(id: number) {
    this.data = await this.readById(id);
  }
  async readAllTeachers() {
    this.data = await this.readAll();
  }

  async createTeacher(teacher: TeacherModel) {
    this.data = await this.create(teacher);
  }
  async updateTeacher(teacher: TeacherModel) {
    this.data = await this.update(teacher);
  }
  async deleteTeacher(idTeacher: number) {
    this.data = await this.delete(idTeacher);
  }
}
