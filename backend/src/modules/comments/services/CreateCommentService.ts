import { getCustomRepository } from "typeorm";
import { IComment } from "../models/IComment";
import { ICreateComment } from "../models/ICreateComment";
import CommentsRepository from "../repositories/CommentsRepository";

class CreateCommentService {
  public async execute({comment, user, publication}: ICreateComment): Promise<IComment> {
    const commentsRepository = getCustomRepository(CommentsRepository)

    const createdComment = await commentsRepository.create({
      comment,
      user,
      publication
    })

    await commentsRepository.save(createdComment)

    return createdComment
  }
}

export default CreateCommentService