import axios from "axios";
import { URLBASE } from "../../helpers/constants/urls";
import type { StudentModel } from "../../model/student/studentModel";
import type { IApiResponse } from "../../interfaces/api/iApiResponse";
export default class StudentRepository {
 protected async readAllStudents(): Promise<IApiResponse<StudentModel[]>> {
    try {
      var request = await axios.get(URLBASE + "/students");
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
        message: "Error",
        isError: true,
        data: [],
      };
      return response;
    }
  }
}
