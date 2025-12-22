import type { IApiResponse } from "../../interfaces/api/iApiResponse";import type { ClassModel } from "../../model/class/class";
;
import ClassRepository from "../../repo/class/classRepository";


export class ClassController extends ClassRepository {
  data: IApiResponse<ClassModel[]> | null = null;
  async readByIdClasses(id: number) {
    this.data = await this.readById(id);
  }
  async readAllClasses() {
    this.data = await this.readAll();
  }

  async createClass(classes: ClassModel) {
    this.data = await this.create(classes);
  }
  async updateClass(classes: ClassModel) {
    this.data = await this.update(classes);
  }
  async deleteClass(idClasse: number) {
    this.data = await this.delete(idClasse);
  }
}
