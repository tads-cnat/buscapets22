import { getCustomRepository } from "typeorm";
import { IComment } from "../models/IComment";
import { IFindById } from "../models/IFindById";
import CommentsRepository from "../repositories/CommentsRepository";

class FindCommentService {
  public async show({id}: IFindById): Promise<IComment> {
    const commentsRepository = getCustomRepository(CommentsRepository)

    const comment = await commentsRepository.findById({
      id
    })

    return comment
  }
}

export default FindCommentService