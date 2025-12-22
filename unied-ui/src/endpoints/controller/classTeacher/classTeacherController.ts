import type { IApiResponse } from "../../interfaces/api/iApiResponse";
import type { ClassTeacherModel } from "../../model/classTeacher/classTeacher";

import ClassTeacherRepository from "../../repo/classTeacher/classTeacherRepository";
;


export class ClassTeacherController extends ClassTeacherRepository {
  data: IApiResponse<ClassTeacherModel[]> | null = null;
  async readByIdClassTeachers(id: number) {
    this.data = await this.readById(id);
  }
  async readAllClassTeachers() {
    this.data = await this.readAll();
  }

  async createClass(classTeacher: ClassTeacherModel) {
    this.data = await this.create(classTeacher);
  }
  async updateClass(classTeacher: ClassTeacherModel) {
    this.data = await this.update(classTeacher);
  }
  async deleteClass(idClasse: number) {
    this.data = await this.delete(idClasse);
  }
}
