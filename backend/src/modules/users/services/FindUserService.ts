import { getCustomRepository } from 'typeorm';
import { IFindById } from '../models/IFindById';
import { IUser } from '../models/IUser';
import UsersRepository from '../repositories/UsersRepository';

class FindUserService {
  public async execute({id}: IFindById): Promise<IUser> {
    const usersRepository = getCustomRepository(UsersRepository);
    
    const user = await usersRepository.findById({id});

    return user
  }
}

export default FindUserService