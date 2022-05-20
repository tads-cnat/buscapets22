import { getCustomRepository } from "typeorm";
import { IComment } from "../models/IComment";
import { ICreateComment } from "../models/ICreateComment";
import CommentsRepository from "../repositories/CommentsRepository";

class CreateCommentService {
  public async execute({user_id, publication_id, comment}: ICreateComment): Promise<IComment> {
    const commentsRepository = getCustomRepository(CommentsRepository)

    const createdComment = await commentsRepository.create({
      user_id,
      publication_id,
      comment
    })

    await commentsRepository.save(createdComment)

    return createdComment
  }
}

export default CreateCommentService