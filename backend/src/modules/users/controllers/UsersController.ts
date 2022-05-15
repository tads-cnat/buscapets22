import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import CreateUserService from "../services/CreateUserService";
import FindUserService from "../services/FindUserService";
import ListUsersService from "../services/ListUsersService";
import SoftDeleteUser from "../services/SoftDeleteUserService";
import UpdateUserService from "../services/UpdateUserService";

export default class UsersController {

  public async index(request: Request, response: Response): Promise<Response> {
    const listUser = new ListUsersService()

    const users = await listUser.execute()

    return response.json(instanceToInstance(users))
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password, phone } = request.body

    const createUser = new CreateUserService()

    const user = await createUser.execute({
      name,
      email,
      phone,
      password
    })

    return response.json(instanceToInstance(user))
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const showUser = new FindUserService()

    const user = await showUser.execute(id)

    return response.json(instanceToInstance(user))
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body
    const { id } = request.params

    const updateUser = new UpdateUserService()

    const user = await updateUser.execute({
      id,
      name,
      email,
    })


    return response.json(user)
  }

  public async softDelete(request: Request, response: Response) {
    const { id } = request.params

    const deleteUser = new SoftDeleteUser()

    await deleteUser.execute(id)

    return response.json([])
  }
}