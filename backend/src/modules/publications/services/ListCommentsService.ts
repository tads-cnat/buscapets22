import AppError from "@shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import { IComment } from "../models/IComment";
import CommentsRepository from "../repositories/CommentsRepository";

class ListCommentsService {
  public async show(): Promise<IComment[]> {
    const commentsRepository = getCustomRepository(CommentsRepository)

    const comments = await commentsRepository.findAll()

    return comments
  }
}

export default ListCommentsService