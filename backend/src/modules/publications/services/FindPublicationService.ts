import { getCustomRepository } from "typeorm";
import { IFindById } from "../models/IFindById";
import { IPublication } from "../models/IPublication";
import PublicationRepository from "../repositories/PublicationsRepository";

class FindPublicationService {
  public async execute({id}: IFindById): Promise<IPublication> {
    const publicationRespository = getCustomRepository(PublicationRepository)
    const publication = await publicationRespository.findById({
      id
    })

    return publication
  }
}

export default FindPublicationService