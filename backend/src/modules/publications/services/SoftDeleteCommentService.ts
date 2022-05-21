import { getCustomRepository } from "typeorm";
import { ISoftDelete } from "../models/ISoftDelete";
import CommentsRepository from "../repositories/CommentsRepository";

class SoftDeleteCommentService {
  public async execute({id}: ISoftDelete) {
    const commentRepository = getCustomRepository(CommentsRepository);

    const comment = await commentRepository.findById({
      id
    })
    
    await commentRepository.softDelete({
      id: comment.id
    })
  }
}

export default SoftDeleteCommentService