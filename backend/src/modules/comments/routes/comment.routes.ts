import { Router } from 'express';
import { celebrate, Joi, Segments } from "celebrate";
import isAuthenticated from '@shared/middlewares/isAthenticated';
import CommentsController from '../controllers/commentsController';

const commentsRouter = Router()
const commentController = new CommentsController()

commentsRouter.get('/', isAuthenticated, commentController.index)

commentsRouter.get(
  '/:id', isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    }
  }),
  commentController.show
)

commentsRouter.post(
  '/',
  celebrate({
    [Segments.PARAMS]: {
      publication_id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      comment: Joi.string().required()
    }
  }),
  commentController.create
)

commentsRouter.patch(
  '/:id', isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required()
    },
    [Segments.BODY]: {
      comment: Joi.string().required()
    }
  }),
  commentController.update
)

commentsRouter.delete(
  '/:id', isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required()
    }
  }),
  commentController.softDelete
)

export default commentsRouter