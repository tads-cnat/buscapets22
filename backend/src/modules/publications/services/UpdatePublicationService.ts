import { getCustomRepository } from "typeorm";
import { Geometry } from 'geojson'
import { IPublication } from "../models/IPublication";
import { IUpdatePublication } from "../models/IUpdatePublication";
import PublicationRepository from '../repositories/PublicationsRepository';

class UpdatePublicationService {
  public async execute({
    id,
    title,
    description,
    pet_name,
    gender,
    disappearance_date,
    last_location
  }: IUpdatePublication): Promise<IPublication | undefined> {
    const publicationRespository = getCustomRepository(PublicationRepository)

    const publication = await publicationRespository.findById({id})

    const location: Geometry = {
      type: 'Point',
      coordinates: last_location
   }

    publication.title = title
    publication.description = description
    publication.pet_name = pet_name
    publication.gender = gender
    publication.disappearance_date = disappearance_date
    publication.last_location = location

    await publicationRespository.save(publication)

    return publication
  }
}

export default UpdatePublicationService