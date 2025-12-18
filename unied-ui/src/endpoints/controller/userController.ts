import type { IApiResponse } from "../interfaces/api/iApiResponse";
import type { UserModel } from "../model/userModel";
import UserRepository from "../repo/userRepository";

export class UserController {
  userData?: IApiResponse<UserModel>;
  userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }
  async readAllUser() {
    this.userData = await this.userRepository.fetchUserData();
  }
}
