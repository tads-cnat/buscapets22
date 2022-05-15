import AppError from "@shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import { IUpdateUser } from "../models/IUpdateUser";
import { IUser } from "../models/IUser";
import UsersRepository from "../repositories/UsersRepository";

class UpdateUserService {
  public async execute({ id, name, email, phone }: IUpdateUser): Promise<IUser> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findById({id})

    // if all fields are equal, return user. There is no need to update anything.
    if (user.name === name && user.email === email && user.phone === phone) {
      return user
    }

    if (email) {
      const userExists = await usersRepository.findByEmail(email)

      if (userExists && email !== user.email) {
        throw new AppError('There is already one user with this email ')
      }
    }

    user.name = name
    user.email = email
    user.phone = phone

    await usersRepository.save(user)

    return user
  }
}

export default UpdateUserService