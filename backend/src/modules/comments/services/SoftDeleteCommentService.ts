import AppError from "@shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import CommentsRepository from "../repositories/CommentsRepository";

class SoftDeleteCommentService {
  public async execute(id: string) {
    const commentRepository = getCustomRepository(CommentsRepository);

    const publication = await commentRepository.findById(id)

    if (!publication) {
      throw new AppError('Publication not found')
    }
    
    await commentRepository.softDelete(id)
  }
}

export default SoftDeleteCommentService