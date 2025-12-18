import type { IApiResponse } from "../interfaces/api/iApiResponse";
import type { UserModel } from "../model/userModel";
import axios from "axios";

export default class UserRepository {
  async fetchUserData(): Promise<IApiResponse<UserModel>> {
    try {
      const response = await axios.get<IApiResponse<UserModel>>(
        "https://sua-api.com/users/1"
      );

      return response.data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error; // importante
    }
  }
}

