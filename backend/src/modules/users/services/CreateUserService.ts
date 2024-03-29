import AppError from '@shared/errors/AppErrors';
import { getCustomRepository } from 'typeorm';
import { ICreateUser } from '../models/ICreateUser';
import { IUser } from '../models/IUser';
import { hash } from "bcryptjs";
import UsersRepository from '../repositories/UsersRepository';
import S3StorageProvider from '@shared/providers/S3StorageProvider';

class CreateUserService {
  public async execute({ name, email, password, phone, image_url }: ICreateUser): Promise<IUser> {
    const usersRepository = getCustomRepository(UsersRepository);
    
    const emailExists = await usersRepository.findByExactEmail({
      email
    });

    if (emailExists) {
      throw new AppError('Email address already used');
    }

    const hashedPassword = await hash(password, 8)

    let image_url_created: string =''

    if(image_url){
      const s3Provider = new S3StorageProvider();
      const filename = await s3Provider.saveFile(image_url);
      image_url_created = filename;
    }

    const user = await usersRepository.create({
      name,
      email,
      phone,
      password: hashedPassword,
      image_url: image_url_created
    })

    await usersRepository.save(user)

    return user
  }
}

export default CreateUserService