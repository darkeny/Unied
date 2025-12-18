import type { IApiResponse } from "../interfaces/api/iApiResponse";
import type { User } from "../model/userModel";
import axios from "axios";

export default class UserRepository {
  async fetchUserData(): Promise<IApiResponse<User>> {
    try {
      const response = await axios.get<IApiResponse<User>>(
        "https://sua-api.com/users/1"
      );

      return response.data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error; // importante
    }
  }
}

