import Comment from "../entities/Comment";
import { EntityRepository, getRepository, Repository } from "typeorm";
import { IComment } from "../models/IComment";
import { ICreateComment } from "../models/ICreateComment";
import { IFindByIdAndIdPublication } from "../models/IFindByIdAndIdPublication";
import AppError from "@shared/errors/AppErrors";
import { IFindById } from "../models/IFindById";
import { ISoftDelete } from "../models/ISoftDelete";

@EntityRepository(Comment)
export default class CommentsRepository {
  private ormRepository: Repository<Comment>

  constructor () {
    this.ormRepository = getRepository(Comment)
  }

  public async create({ user_id, publication_id, comment }: ICreateComment): Promise<IComment> {
    const commentCreated = this.ormRepository.create({
      user_id,
      publication_id,
      comment
    })

    return commentCreated
  }

  public async findAll(): Promise<IComment[]> {
    const comments = await this.ormRepository.find()

    return comments
  }

  public async findById({id}: IFindById): Promise<IComment> {
    const comment = await this.ormRepository.createQueryBuilder('comment')
    .where({
      id
    })
    .leftJoin('comment.user_id', 'users')
    .select([
      'comment.id',
      'comment.comment',
      'comment.created_at'
    ]).addSelect(['users.id', 'users.name'])
    .getOne()

    if (!comment) {
      throw new AppError('Comment not found')
    }

    return comment
  }

  public async findByIdAndPublicationId({id, publication_id}: IFindByIdAndIdPublication): Promise<IComment> {
    const comment = await this.ormRepository.findOne({
      where: {
        id,
        publication_id
      }
    })

    if (!comment) {
      throw new AppError('Comment not found')
    }

    return comment
  }

  public async save(comment: IComment): Promise<IComment> {
    const commentSaved = await this.ormRepository.save(comment)

    return commentSaved
  }

  public async softDelete({id}: ISoftDelete) {
    await this.ormRepository.softDelete(id)
  }
}