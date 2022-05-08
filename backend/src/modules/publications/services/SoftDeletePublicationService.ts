import AppError from "@shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import PublicationRepository from '../repositories/PublicationsRepository';

class SoftDeletePublicationService {
  public async execute(id: string) {
    const publicationRepository = getCustomRepository(PublicationRepository);

    const publication = await publicationRepository.findById(id)

    if (!publication) {
      throw new AppError('Publication not found')
    }
    
    await publicationRepository.softDelete(id)
  }
}

export default SoftDeletePublicationService