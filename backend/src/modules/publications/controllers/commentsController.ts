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
    const { publication_id } = request.params

    const createComment = new CreateCommentService()

    const savedComment = await createComment.execute({
      publication_id,
      user_id: request.user.id,
      comment
    })

    return response.json(instanceToInstance(savedComment))
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id, comment } = request.body

    const updateComment = new UpdateCommentService()

    const updatedComment = await updateComment.update({
      id,
      comment
    })


    return response.json(updatedComment)
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.body

    const findByIdComment = new FindCommentService()

    const comment = await findByIdComment.show({
      id
    })

    return response.json(instanceToInstance(comment))
  }

  public async softDelete(request: Request, response: Response) {
    const { id } = request.body

    const deleteComment = new SoftDeleteCommentService()

    await deleteComment.execute({
      id
    })

    return response.json(true)
  }
}