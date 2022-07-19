import { getCustomRepository } from 'typeorm';
import { ICreatePublication } from '../models/ICreatePublication';
import { IPublication } from '../models/IPublication';
import PublicationRepository from '../repositories/PublicationsRepository';
import { Geometry } from 'geojson'
import S3StorageProvider from '@shared/providers/S3StorageProvider';

class CreatePublicationService {
  public async execute({ 
    user_id,
    title,
    description,
    pet_name,
    gender,
    disappearance_date,
    last_location,
    images_url
  }: ICreatePublication): Promise<IPublication> {
    const publicationRepository = getCustomRepository(PublicationRepository)

    const location: Geometry = {
      type: 'Point',
      coordinates: last_location
   }

   let image_url_created:string = ''

    const s3Provider = new S3StorageProvider();
    const filename = await s3Provider.saveFile(images_url);
    image_url_created = filename;

    const publication = await publicationRepository.create({
      user_id,
      title,
      description,
      pet_name,
      gender,
      disappearance_date,
      last_location: location,
      images_url: image_url_created
    })

    await publicationRepository.save(publication)

    return publication
  }
}

export default CreatePublicationService