import AppError from '@shared/errors/AppErrors';
import { getCustomRepository } from 'typeorm';
import { IUser } from '../models/IUser';
import UsersRepository from '../repositories/UsersRepository';

class FindUserService {
  public async execute(id: string): Promise<IUser> {
    const usersRepository = getCustomRepository(UsersRepository);
    
    const user = await usersRepository.findById(id);

    if (!user) {
      throw new AppError('User not found');
    }

    return user
  }
}

export default FindUserService