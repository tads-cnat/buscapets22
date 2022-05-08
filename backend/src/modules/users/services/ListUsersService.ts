import { getCustomRepository } from "typeorm";
import { IUser } from "../models/IUser";
import UsersRepository from "../repositories/UsersRepository";

class ListUsersService {
  public async execute(): Promise<IUser[] | undefined> {
    const usersRepository = getCustomRepository(UsersRepository);
    const users = await usersRepository.findAll()

    return users
  }
}

export default ListUsersService