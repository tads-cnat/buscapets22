import { getCustomRepository } from "typeorm";
import { IComment } from "../models/IComment";
import { IUpdateComment } from "../models/IUpdateComment";
import CommentsRepository from "../repositories/CommentsRepository";

class UpdateCommentService {
  public async update({id, comment}: IUpdateComment): Promise<IComment> {
    const commentRespository = getCustomRepository(CommentsRepository)

    const commentFound = await commentRespository.findById({
      id
    })

    commentFound.comment = comment

    await commentRespository.save(commentFound)

    return commentFound
  }
}

export default UpdateCommentService