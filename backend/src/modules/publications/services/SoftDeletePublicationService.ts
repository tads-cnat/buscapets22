import { getCustomRepository } from "typeorm";
import { ISoftDelete } from "../models/ISoftDelete";
import PublicationRepository from '../repositories/PublicationsRepository';

class SoftDeletePublicationService {
  public async execute({id}: ISoftDelete) {
    const publicationRepository = getCustomRepository(PublicationRepository);

    const publication = await publicationRepository.findById({
      id
    })
    
    await publicationRepository.softDelete(publication)
  }
}

export default SoftDeletePublicationService