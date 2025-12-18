import UserRepository from "../repo/userRepository";

export class UserController {
  userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }
  async readAllUser() {
    await this.userRepository.fetchUserData();
  }
}
