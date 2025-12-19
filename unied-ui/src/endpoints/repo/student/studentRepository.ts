import axios from "axios";
import { URLBASE } from "../../helpers/constants/urls";
import type { StudentModel } from "../../model/student/studentModel";
import type { IApiResponse } from "../../interfaces/api/iApiResponse";
import type { IRepository } from "../../interfaces/iRepository/iRepository";
export default class StudentRepository implements IRepository<StudentModel> {
  async readAll(): Promise<IApiResponse<StudentModel[]>> {
    try {
      const request = await axios.get(URLBASE + "/students");
      const response: IApiResponse<StudentModel[]> = {
        status: 200,
        message: "Success",
        isError: false,
        data: {
          data: request.data,
          currentPage: 0,
          pageSize: 0,
          totalItems: 0,
          totalPages: 0,
        },
      };
      console.log("response", response);
      return response;
    } catch (error) {
      const response: IApiResponse<StudentModel[]> = {
        status: 404,
        message: "Error -" + error,
        isError: true,
        data: [],
      };
      return response;
    }
  }

  async create(student: StudentModel): Promise<IApiResponse<StudentModel[]>> {
    try {
      const request = await axios.post(URLBASE + "/students", student);
      const response: IApiResponse<StudentModel[]> = {
        status: 200,
        message: "Success",
        isError: false,
        data: {
          data: [],
          currentPage: 0,
          pageSize: 0,
          totalItems: 0,
          totalPages: 0,
        },
      };
      console.log("Status", request.status);
      return response;
    } catch (error) {
      const response: IApiResponse<StudentModel[]> = {
        status: 404,
        message: "Error -" + error,
        isError: true,
        data: [],
      };
      console.log("Status", response);

      return response;
    }
  }
}
