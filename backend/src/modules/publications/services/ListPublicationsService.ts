import { getCustomRepository } from "typeorm";
import { IListPublications } from "../models/IListPublications";
import PublicationRepository from "../repositories/PublicationsRepository";

class ListPublicationsService {
  public async execute(): Promise<IListPublications> {
    const publicationRespository = getCustomRepository(PublicationRepository)
    const publications = await publicationRespository.findAll()
    
    return publications
  }
}

export default ListPublicationsService