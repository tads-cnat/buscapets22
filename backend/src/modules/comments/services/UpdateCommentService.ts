import AppError from "@shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import { IComment } from "../models/IComment";
import { IUpdateComment } from "../models/IUpdateComment";
import CommentsRepository from "../repositories/CommentsRepository";

class UpdateCommentService {
  public async update({id, comment}: IUpdateComment): Promise<IComment | undefined> {
    const commentRespository = getCustomRepository(CommentsRepository)

    const commentFound = await commentRespository.findById(id)

    if (!commentFound) {
      throw new AppError('Comment not found')
    }

    commentFound.comment = comment

    await commentRespository.save(commentFound)

    return commentFound
  }
}

export default UpdateCommentService