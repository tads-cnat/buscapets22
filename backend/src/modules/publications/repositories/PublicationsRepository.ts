import Publication from "../entities/Publication";
import { EntityRepository, getRepository, Like, Repository } from "typeorm";
import { IPublication } from "../models/IPublication";
import { ICreatePublication } from "../models/ICreatePublication";
import { IListPublications } from "../models/IListPublications";
import { IFindById } from "../models/IFindById";
import AppError from "@shared/errors/AppErrors";
import { IFindByTitle } from "../models/IFindByTitle";

@EntityRepository(Publication)
export default class PublicationRepository {
  private ormRepository: Repository<Publication>

  constructor() {
    this.ormRepository = getRepository(Publication)
  }

  public async findAllPreview(): Promise<IListPublications> {
    const publications = await this.ormRepository.createQueryBuilder('publication')
    .leftJoin('publication.user_id', 'users')
    .leftJoin('publication.image_url', 'publications_images')
    .select([
      'publication.id',
      'publication.last_location',
    ])
    .addSelect(['publications_images.image_url'])
    .getMany()

    return {
      publications,
      count: publications.length
    } 
  }

  public async findById({id}: IFindById): Promise<IPublication> {
    const publication = await this.ormRepository.createQueryBuilder('publication')
    .where({
      id
    })
    .leftJoin('publication.user_id', 'users')
    .leftJoin('publication.comments', 'comments')
    .leftJoin('comments.user_id', 'users.id')
    .select([
      'publication.id',
      'publication.title',
      'publication.description',
      'publication.pet_name',
      'publication.gender',
      'publication.disappearance_date',
      'publication.last_location',
      'publication.created_at',
      'publication.updated_at',
    ])
    .addSelect(['users.id', 'users.name', 'users.phone'])
    /** TODO: "comments.user_id ta retornando muitas colunas" **/
    .addSelect(['comments.id', 'comments.comment', 'comments.user_id', 'comments.created_at'])
    .getOne()

    if (!publication) {
      throw new AppError('Publication not found')
    }

    return publication
  }

  public async findByTitle({ title }: IFindByTitle): Promise<IPublication[]> {
    const publications = await this.ormRepository.find({
      where: {
        title: Like(`%${title}%`),
      }
    })

    return publications
  }

  public async create({ 
    user_id,
    title,
    description,
    pet_name,
    gender,
    disappearance_date,
    last_location,
    img_url
  }: ICreatePublication): Promise<IPublication> {
    const publication = this.ormRepository.create({
      user_id,
      title,
      description,
      pet_name,
      gender,
      disappearance_date,
      last_location,
      image_url: [{image_url: img_url}]
    })

    return publication
  }

  public async save(publication: IPublication): Promise<IPublication> {
    const publicationSaved = await this.ormRepository.save(publication)

    return publicationSaved
  }

  public async softDelete(publication: IPublication) {
    return this.ormRepository.softRemove(publication)
  }
}