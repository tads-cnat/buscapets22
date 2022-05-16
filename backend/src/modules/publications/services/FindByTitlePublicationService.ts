import { getCustomRepository } from "typeorm";
import { IFindByTitle } from "../models/IFindByTitle";
import { IPublication } from "../models/IPublication";
import PublicationRepository from "../repositories/PublicationsRepository";

class FindByTitlePublicationService {
  public async execute({title}: IFindByTitle): Promise<IPublication[]> {
    const publicationRepository = getCustomRepository(PublicationRepository)

    const publications = publicationRepository.findByTitle({
      title
    })

    return publications
  }
}

export default FindByTitlePublicationService