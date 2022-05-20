import { getCustomRepository } from "typeorm";
import { IComment } from "../models/IComment";
import { IFindByIdAndIdPublication } from "../models/IFindByIdAndIdPublication";
import CommentsRepository from "../repositories/CommentsRepository";

class FindCommentService {
  public async show({id, publication_id}: IFindByIdAndIdPublication): Promise<IComment> {
    const commentsRepository = getCustomRepository(CommentsRepository)

    const comment = await commentsRepository.findByIdAndPublicationId({
      id,
      publication_id
    })

    return comment
  }
}

export default FindCommentService