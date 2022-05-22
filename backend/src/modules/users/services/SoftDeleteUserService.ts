import { getCustomRepository } from "typeorm";
import { ISoftDelete } from "../models/ISoftDelete";
import UsersRepository from "../repositories/UsersRepository";

class SoftDeleteUserService {
  public async execute({id}: ISoftDelete) {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findById({
      id
    })
    
    await usersRepository.softDelete(user)
  }
}

export default SoftDeleteUserService