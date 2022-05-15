import { getCustomRepository } from "typeorm";
import { IListUsers } from "../models/IListUsers";
import UsersRepository from "../repositories/UsersRepository";

class ListUsersService {
  public async execute(): Promise<IListUsers> {
    const usersRepository = getCustomRepository(UsersRepository)
    const users = await usersRepository.findAll()

    return users
  }
}

export default ListUsersService