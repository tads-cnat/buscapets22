import { getCustomRepository } from "typeorm";
import { IListPublications } from "../models/IListPublications";
import PublicationRepository from "../repositories/PublicationsRepository";

class ListPublicationsPreviewService {
  public async execute(): Promise<IListPublications> {
    const publicationRespository = getCustomRepository(PublicationRepository)
    const publications = await publicationRespository.findAllPreview()
    
    return publications
  }
}

export default ListPublicationsPreviewService