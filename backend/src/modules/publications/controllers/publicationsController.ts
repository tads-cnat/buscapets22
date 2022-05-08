import FindUserService from "@modules/users/services/FindUserService";
import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import CreatePublicationService from "../services/CreatePublicationService";
import FindPublicationService from "../services/FindPublicationService";
import ListPublicationsService from "../services/ListPublicationsService";
import SoftDeletePublicationService from "../services/SoftDeletePublicationService";
import UpdatePublicationService from "../services/UpdatePublicationService";

export default class PublicationsController {

  public async index(request: Request, response: Response): Promise<Response> {
    const listPublications = new ListPublicationsService()

    const publications = await listPublications.execute()

    return response.json(instanceToInstance(publications))
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const showPublication = new FindPublicationService()

    const publication = await showPublication.execute(id)

    return response.json(instanceToInstance(publication))
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { title, description } = request.body

    const createPublication = new CreatePublicationService()

    const findUserById = new FindUserService()

    const user = await findUserById.execute(request.user.id)

    const publication = await createPublication.execute({
      title,
      description,
      owner: user
    })

    return response.json(instanceToInstance(publication))
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { title, description } = request.body
    const { id } = request.params

    const updatePublication = new UpdatePublicationService()

    const user = await updatePublication.update({
      id,
      title,
      description,
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