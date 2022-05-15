import User from "../entities/User";
import { EntityRepository, getRepository, Like, Repository } from "typeorm";
import { IUser } from "../models/IUser";
import { ICreateUser } from "../models/ICreateUser";
import { IListUsers } from "../models/IListUsers";
import { IFindById } from "../models/IFindById";
import AppError from "@shared/errors/AppErrors";
import { ISoftDelete } from "../models/ISoftDelete";
import { IFindByName } from "../models/IFindByName";
import { IFindByEmail } from "../models/IFindByEmail";

@EntityRepository(User)
export default class UsersRepository{

  private ormRepository: Repository<User>

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findAll(): Promise<IListUsers> {
    const users = await this.ormRepository.find()

    return {
      users,
      count: users.length
    }
  }

  public async findById({id}: IFindById): Promise<IUser> {
    const user = await this.ormRepository.findOne(id)

    if (!user) {
      throw new AppError('User not found');
    }

    return user
  }

  public async findByName({ name }: IFindByName): Promise<IUser[]> {
    const user = await this.ormRepository.find({
      where: {
        name: Like(`%${name}%`),
      }
    })

    return user
  }

  public async findByEmail({ email }: IFindByEmail): Promise<IUser[]> {
    const users = await this.ormRepository.find({
      where: {
        email: Like(`%${email}%`),
      }
    })

    return users
  }

  public async findByExactEmail({email}: IFindByEmail): Promise<IUser | undefined> {
    const user = await this.ormRepository.findOne({
      where: {
        email,
      }
    })

    return user
  }

  public async findByEmailForSession({email}: IFindByEmail): Promise<IUser | undefined> {
    const user = await this.ormRepository.findOne({
      where: {
        email,
      },
      select: ['id', 'password']
    })

    return user
  }

  public async create({ name, email, phone, password }: ICreateUser): Promise<IUser> {
    const user = this.ormRepository.create({
      name,
      email,
      phone,
      password
    })

    return user
  }

  public async save(user: IUser): Promise<IUser> {
    const userSaved = await this.ormRepository.save(user)

    return userSaved
  }

  public async softDelete({id}: ISoftDelete){
    return this.ormRepository.softDelete(id)
  }
}