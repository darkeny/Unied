import axios from "axios";
import { URLBASE } from "../../helpers/constants/urls";
import type { IApiResponse } from "../../interfaces/api/iApiResponse";
import type { IRepository } from "../../interfaces/iRepository/iRepository";
import { MESSAGES } from "../../helpers/constants/message/Message";
import { STATUS_CODE } from "../../helpers/constants/message/StatusCode";
import type { ClassTeacherModel } from "../../model/classTeacher/classTeacher";
export default class ClassTeacherRepository implements IRepository<ClassTeacherModel> {
  uri = "/classTeachers";

  async readById(id: number): Promise<IApiResponse<ClassTeacherModel[]>> {
    try {
      const request = await axios.get(URLBASE + this.uri + "/" + id.toString());
      const response: IApiResponse<ClassTeacherModel[]> = {
        status: STATUS_CODE.SUCCESS.OK,
        message: MESSAGES.SUCCESS.READ,
        isError: false,
        data: {
          data: [request.data],
          currentPage: 0,
          pageSize: 0,
          totalItems: 0,
          totalPages: 0,
        },
      };
      console.log("response", response);
      return response;
    } catch (error) {
      const response: IApiResponse<ClassTeacherModel[]> = {
        status: STATUS_CODE.SERVER_ERROR.INTERNAL,
        message: MESSAGES.ERROR.READ + error,
        isError: true,
        data: null,
      };
      return response;
    }
  }
  async readAll(): Promise<IApiResponse<ClassTeacherModel[]>> {
    try {
      const request = await axios.get(URLBASE + this.uri);
      const response: IApiResponse<ClassTeacherModel[]> = {
        status: STATUS_CODE.SUCCESS.OK,
        message: MESSAGES.SUCCESS.READ,
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
      const response: IApiResponse<ClassTeacherModel[]> = {
        status: STATUS_CODE.SERVER_ERROR.INTERNAL,
        message: MESSAGES.ERROR.READ + error,
        isError: true,
        data: null,
      };
      return response;
    }
  }

  async create(student: ClassTeacherModel): Promise<IApiResponse<ClassTeacherModel[]>> {
    try {
      const request = await axios.post(URLBASE + this.uri, student);
      const response: IApiResponse<ClassTeacherModel[]> = {
        status: STATUS_CODE.SUCCESS.CREATED,
        message: MESSAGES.SUCCESS.CREATE,
        isError: false,
        data: null,
      };
      console.log("Status", request.status);
      return response;
    } catch (error) {
      const response: IApiResponse<ClassTeacherModel[]> = {
        status: STATUS_CODE.SERVER_ERROR.INTERNAL,
        message: MESSAGES.ERROR.CREATE + error,
        isError: true,
        data: null,
      };
      console.log("Status", response);

      return response;
    }
  }

  async update(student: ClassTeacherModel): Promise<IApiResponse<ClassTeacherModel[]>> {
    try {
      const request = await axios.put(
        URLBASE + this.uri + "/" + student.id.toString(),
        student
      );

      const response: IApiResponse<ClassTeacherModel[]> = {
        status: STATUS_CODE.SUCCESS.OK,
        message: MESSAGES.SUCCESS.UPDATE,
        isError: false,
        data: null,
      };
      console.log("Status", request.status);
      return response;
    } catch (error) {
      const response: IApiResponse<ClassTeacherModel[]> = {
        status: STATUS_CODE.SERVER_ERROR.INTERNAL,
        message: MESSAGES.ERROR.UPDATE + error,
        isError: true,
        data: null,
      };
      console.log("Status", response);

      return response;
    }
  }
  async delete(id: number): Promise<IApiResponse<ClassTeacherModel[]>> {
    try {
      const request = await axios.delete(
        URLBASE + this.uri + "/" + id.toString()
      );

      const response: IApiResponse<ClassTeacherModel[]> = {
        status: STATUS_CODE.SUCCESS.OK,
        message: MESSAGES.SUCCESS.DELETE,
        isError: false,
        data: null,
      };
      console.log("Status", request.status);
      return response;
    } catch (error) {
      const response: IApiResponse<ClassTeacherModel[]> = {
        status: STATUS_CODE.SERVER_ERROR.INTERNAL,
        message: MESSAGES.ERROR.DELETE + error,
        isError: true,
        data: null,
      };
      console.log("Status", response);

      return response;
    }
  }
}
