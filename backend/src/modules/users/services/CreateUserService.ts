import AppError from '@shared/errors/AppErrors';
import { getCustomRepository } from 'typeorm';
import { ICreateUser } from '../models/ICreateUser';
import { IUser } from '../models/IUser';
import { hash } from "bcryptjs";
import UsersRepository from '../repositories/UsersRepository';

class CreateUserService {
  public async execute({ name, email, password, phone }: ICreateUser): Promise<IUser> {
    const usersRepository = getCustomRepository(UsersRepository);
    
    const emailExists = await usersRepository.findByExactEmail({
      email
    });

    if (emailExists) {
      throw new AppError('Email address already used');
    }

    const hashedPassword = await hash(password, 8)

    const user = await usersRepository.create({
      name,
      email,
      phone,
      password: hashedPassword
    })

    await usersRepository.save(user)

    return user
  }
}

export default CreateUserService