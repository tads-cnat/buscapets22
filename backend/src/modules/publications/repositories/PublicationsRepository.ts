import Publication from "../entities/Publication";
import { EntityRepository, getRepository, Repository } from "typeorm";
import { IPublication } from "../models/IPublication";
import { ICreatePublication } from "../models/ICreatePublication";

@EntityRepository(Publication)
export default class PublicationRepository {
  private ormRepository: Repository<Publication>

  constructor() {
    this.ormRepository = getRepository(Publication)
  }

  public async findAll(): Promise<IPublication[] | undefined> {
    return this.ormRepository.find({relations: ['owner', 'comments']})
  }

  public async findById(id: string): Promise<IPublication | undefined> {
    const user = await this.ormRepository.findOne({
      where: {
        id,
      },
      relations: ['owner']
    })

    return user
  }

  public async create({ title, description, owner}: ICreatePublication): Promise<IPublication> {
    const publication = this.ormRepository.create({
      title,
      description,
      owner
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