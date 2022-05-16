import { Router } from 'express';
import { celebrate, Joi, Segments } from "celebrate";
import isAuthenticated from '@shared/middlewares/isAthenticated';
import PublicationsController from '../controllers/publicationsController';
import CommentsController from '@modules/comments/controllers/commentsController';

const publicationsRouter = Router()
const publicationController = new PublicationsController()
const commentController = new CommentsController()

publicationsRouter.get('/', isAuthenticated, publicationController.list)

publicationsRouter.get(
  '/:id', isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    }
  }),
  publicationController.show
)

publicationsRouter.post(
  '/', isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
      description: Joi.string().required(),
      pet_name: Joi.string().required(),
      gender: Joi.string().required(),
      disappearance_date: Joi.date().required(),
      last_location: Joi.array().length(2).items(Joi.number()).required(),
    }
  }),
  publicationController.create
)

publicationsRouter.post(
  '/:id/comments', isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      comment: Joi.string().required()
    }
  }),
  commentController.create
)

publicationsRouter.patch(
  '/:id', isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      title: Joi.string(),
      description: Joi.string()
    }
  }),
  publicationController.update
)

publicationsRouter.delete(
  '/:id', isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    }
  }),
  publicationController.softDelete
)

export default publicationsRouter