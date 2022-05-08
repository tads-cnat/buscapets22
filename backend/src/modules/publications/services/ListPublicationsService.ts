import { getCustomRepository } from "typeorm";
import { IPublication } from "../models/IPublication";
import PublicationRepository from "../repositories/PublicationsRepository";

class ListPublicationsService {
  public async execute(): Promise<IPublication[] | undefined> {
    const publicationRespository = getCustomRepository(PublicationRepository)
    const publications = await publicationRespository.findAll()
    
    return publications
  }
}

export default ListPublicationsService