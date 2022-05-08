import AppError from "@shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import { IPublication } from "../models/IPublication";
import PublicationRepository from "../repositories/PublicationsRepository";

class FindPublicationService {
  public async execute(id: string): Promise<IPublication> {
    const publicationRespository = getCustomRepository(PublicationRepository)
    const publication = await publicationRespository.findById(id)

    if (!publication) {
      throw new AppError('Publication not found')
    }

    return publication
  }
}

export default FindPublicationService