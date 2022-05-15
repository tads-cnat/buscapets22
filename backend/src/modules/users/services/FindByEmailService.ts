import { getCustomRepository } from "typeorm";
import { IFindByEmail } from "../models/IFindByEmail";
import { IUser } from "../models/IUser";
import UsersRepository from "../repositories/UsersRepository";

class FindByEmailService {
  public async execute({email}: IFindByEmail): Promise<IUser[]> {
    const usersRepository = getCustomRepository(UsersRepository)

    const users = await usersRepository.findByEmail({
      email
    })

    return users
  }
}

export default FindByEmailService