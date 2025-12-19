import type { IApiResponse } from "../api/iApiResponse";

export interface IRepository<T> {
 readAll(): Promise<IApiResponse<T[]>>;
  create(model : T): Promise<IApiResponse<T[]>>;
}
