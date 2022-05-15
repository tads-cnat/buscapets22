import { getCustomRepository } from "typeorm";
import { IFindByName } from "../models/IFindByName";
import { IUser } from "../models/IUser";
import UsersRepository from "../repositories/UsersRepository";

class FindByNameUserService {
  public async execute({name}: IFindByName): Promise<IUser[]> {
    const usersRepository = getCustomRepository(UsersRepository)

    const users = await usersRepository.findByName({
      name
    })

    return users
  }
}

export default FindByNameUserService