import Publication from "../entities/Publication";
import { EntityRepository, getRepository, Repository } from "typeorm";
import { IPublication } from "../models/IPublication";
import { ICreatePublication } from "../models/ICreatePublication";
import { IListPublications } from "../models/IListPublications";

@EntityRepository(Publication)
export default class PublicationRepository {
  private ormRepository: Repository<Publication>

  constructor() {
    this.ormRepository = getRepository(Publication)
  }

  public async findAll(): Promise<IListPublications> {
    const publications = await this.ormRepository.find()

    return {
      publications,
      count: publications.length
    } 
  }

  public async findById(id: string): Promise<IPublication | undefined> {
    const user = await this.ormRepository.findOne({
      where: {
        id,
      }
    })

    return user
  }

  public async create({ 
    user_id,
    title,
    description,
    pet_name,
    gender,
    disappearance_date,
    last_location
  }: ICreatePublication): Promise<IPublication> {
    const publication = this.ormRepository.create({
      user_id,
      title,
      description,
      pet_name,
      gender,
      disappearance_date,
      last_location
    })

    return publication
  }

  public async save(publication: IPublication): Promise<IPublication> {
    const publicationSaved = await this.ormRepository.save(publication)

    return publicationSaved
  }

  public async softDelete(id: string) {
    await this.ormRepository.softDelete(id)
  }
}