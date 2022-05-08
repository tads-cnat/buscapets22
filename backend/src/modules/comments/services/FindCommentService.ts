import AppError from "@shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import { IComment } from "../models/IComment";
import CommentsRepository from "../repositories/CommentsRepository";

class FindCommentService {
  public async show(id: string): Promise<IComment> {
    const commentsRepository = getCustomRepository(CommentsRepository)

    const comment = await commentsRepository.findById(id)

    if (!comment) {
      throw new AppError('Comment not found')
    }

    return comment
  }
}

export default FindCommentService