import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import CreateUserService from "../services/CreateUserService";
import FindByEmailService from "../services/FindByEmailService";
import FindByNameUserService from "../services/FindByNameUserService";
import FindUserService from "../services/FindUserService";
import ListUsersService from "../services/ListUsersService";
import SoftDeleteUser from "../services/SoftDeleteUserService";
import UpdateUserService from "../services/UpdateUserService";

export default class UsersController {

  public async list(request: Request, response: Response): Promise<Response> {
    const listUsers = new ListUsersService()

    const users = await listUsers.execute()

    return response.json(instanceToInstance(users))
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password, phone } = request.body

    const image_url = request.file.filename ? request.file.filename : undefined

    const createUser = new CreateUserService()

    const user = await createUser.execute({
      name,
      email,
      phone,
      password,
      image_url,
    })

    return response.json(instanceToInstance(user))
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const showUser = new FindUserService()

    const user = await showUser.execute({id})

    return response.json(instanceToInstance(user))
  }

  public async findName(request: Request, response: Response): Promise<Response> {
    const {name} = request.body

    const findNameUsers = new FindByNameUserService()

    const users = await findNameUsers.execute({
      name
    })

    return response.json(instanceToInstance(users))
  }

  public async findEmail(request: Request, response: Response): Promise<Response> {
    const {email} = request.body

    const findEmailUsers = new FindByEmailService()

    const users = await findEmailUsers.execute({
      email
    })

    return response.json(instanceToInstance(users))
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, email, phone } = request.body
    const { id } = request.params

    const updateUser = new UpdateUserService()

    const user = await updateUser.execute({
      id,
      name,
      email,
      phone
    })


    return response.json(user)
  }

  public async softDelete(request: Request, response: Response) {
    const { id } = request.params

    const softDeleteUser = new SoftDeleteUser()

    await softDeleteUser.execute({
      id
    })

    return response.json(true)
  }
}