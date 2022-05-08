import { getCustomRepository } from 'typeorm';
import { ICreatePublication } from '../models/ICreatePublication';
import { IPublication } from '../models/IPublication';
import PublicationRepository from '../repositories/PublicationsRepository';

class CreatePublicationService {
  public async execute({ title, description, owner }: ICreatePublication): Promise<IPublication> {
    const publicationRepository = getCustomRepository(PublicationRepository);

    const publication = await publicationRepository.create({
      title,
      description,
      owner
    })

    await publicationRepository.save(publication)

    return publication
  }
}

export default CreatePublicationService