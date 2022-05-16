import { getCustomRepository } from 'typeorm';
import { ICreatePublication } from '../models/ICreatePublication';
import { IPublication } from '../models/IPublication';
import PublicationRepository from '../repositories/PublicationsRepository';
import { Geometry } from 'geojson'

class CreatePublicationService {
  public async execute({ 
    user_id,
    title,
    description,
    pet_name,
    gender,
    disappearance_date,
    last_location 
  }: ICreatePublication): Promise<IPublication> {
    const publicationRepository = getCustomRepository(PublicationRepository)

    const location: Geometry = {
      type: 'Point',
      coordinates: last_location
   }

    const publication = await publicationRepository.create({
      user_id,
      title,
      description,
      pet_name,
      gender,
      disappearance_date,
      last_location: location
    })

    await publicationRepository.save(publication)

    return publication
  }
}

export default CreatePublicationService