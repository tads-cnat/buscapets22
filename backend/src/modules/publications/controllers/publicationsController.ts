import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import CreatePublicationService from "../services/CreatePublicationService";
import FindByTitlePublicationService from "../services/FindByTitlePublicationService";
import FindPublicationService from "../services/FindPublicationService";
import ListPublicationsService from "../services/ListPublicationsService";
import SoftDeletePublicationService from "../services/SoftDeletePublicationService";
import UpdatePublicationService from "../services/UpdatePublicationService";

export default class PublicationsController {

  public async list(request: Request, response: Response): Promise<Response> {
    const listPublications = new ListPublicationsService()

    const publications = await listPublications.execute()

    return response.json(instanceToInstance(publications))
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const showPublication = new FindPublicationService()

    const publication = await showPublication.execute({id})

    return response.json(instanceToInstance(publication))
  }

  public async findTitle(request: Request, response: Response): Promise<Response> {
    const { title } = request.body

    const findTitlePublication = new FindByTitlePublicationService()

    const publications = await findTitlePublication.execute({title})

    return response.json(instanceToInstance(publications))
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { 
      title,
      description,
      pet_name,
      gender,
      disappearance_date,
      last_location
    } = request.body

    const createPublication = new CreatePublicationService()

    const publication = await createPublication.execute({
      user_id: request.user.id,
      title,
      description,
      pet_name,
      gender,
      disappearance_date,
      last_location
    })

    return response.json(instanceToInstance(publication))
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const {
      title,
      description,
      pet_name,
      gender,
      disappearance_date,
      last_location
    } = request.body
    const { id } = request.params

    const updatePublication = new UpdatePublicationService()

    const user = await updatePublication.execute({
      id,
      title,
      description,
      pet_name,
      gender,
      disappearance_date,
      last_location
    })

    return response.json(user)
  }

  public async softDelete(request: Request, response: Response) {
    const { id } = request.params

    const deleteUser = new SoftDeletePublicationService()

    await deleteUser.execute(id)

    return response.json([])
  }
}