import FindPublicationService from "@modules/publications/services/FindPublicationService";
import FindUserService from "@modules/users/services/FindUserService";
import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import CreateCommentService from "../services/CreateCommentService";
import FindCommentService from "../services/FindCommentService";
import ListCommentsService from "../services/ListCommentsService";
import SoftDeleteCommentService from "../services/SoftDeleteCommentService";
import UpdateCommentService from "../services/UpdateCommentService";

export default class CommentsController {

  public async index(request: Request, response: Response): Promise<Response> {
    const listComments = new ListCommentsService()

    const comments = await listComments.show()

    return response.json(instanceToInstance(comments))
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { comment } = request.body
    const { id } = request.params

    const createComment = new CreateCommentService()

    const findByIdPublication = new FindPublicationService()
    const findByIdUser = new FindUserService()

    const publication = await findByIdPublication.execute(id)
    const user = await findByIdUser.execute(request.user.id)

    const savedComment = await createComment.execute({
      comment,
      user,
      publication
    })

    return response.json(instanceToInstance(savedComment))
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { comment } = request.body
    const { id } = request.params

    const updateComment = new UpdateCommentService()

    const user = await updateComment.update({
      id,
      comment,
    })


    return response.json(user)
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const findByIdComment = new FindCommentService()

    const comment = await findByIdComment.show(id)

    return response.json(instanceToInstance(comment))
  }

  public async softDelete(request: Request, response: Response) {
    const { id } = request.params

    const deleteComment = new SoftDeleteCommentService()

    await deleteComment.execute(id)

    return response.json([])
  }
}