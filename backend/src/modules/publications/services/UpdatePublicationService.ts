import AppError from "@shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import { IPublication } from "../models/IPublication";
import { IUpdatePublication } from "../models/IUpdatePublication";
import PublicationRepository from '../repositories/PublicationsRepository';

class UpdatePublicationService {
  public async update({id, title, description}: IUpdatePublication): Promise<IPublication | undefined> {
    const publicationRespository = getCustomRepository(PublicationRepository)

    const publication = await publicationRespository.findById(id)

    if (!publication) {
      throw new AppError('Publication not found')
    }

    publication.title = title
    publication.description = description

    await publicationRespository.save(publication)

    return publication
  }
}

export default UpdatePublicationService