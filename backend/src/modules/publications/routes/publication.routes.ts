import { Router } from 'express';
import { celebrate, Joi, Segments } from "celebrate";
import isAuthenticated from '@shared/middlewares/isAthenticated';
import PublicationsController from '../controllers/publicationsController';
import CommentsController from '@modules/publications/controllers/commentsController';
import multer from 'multer';
import uploadConfig from "@config/upload";
import parseLastLocation from '@shared/middlewares/parseLastLocation';
const publicationsRouter = Router()
const publicationController = new PublicationsController()
const commentController = new CommentsController()
const upload = multer(uploadConfig.multer)

publicationsRouter.get('/', publicationController.listPreview)

publicationsRouter.get('/all', isAuthenticated, publicationController.list)

publicationsRouter.get(
  '/title', isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      title: Joi.string(),
    }
  }),
  publicationController.findTitle
)

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
  '/', isAuthenticated, upload.single("publication_image"),
  parseLastLocation,
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

publicationsRouter.patch(
  '/:id', isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      title: Joi.string(),
      description: Joi.string(),
      pet_name: Joi.string(),
      gender: Joi.string().valid("fêmea", "macho"),
      disappearance_date: Joi.date(),
      last_location: Joi.array().length(2).items(Joi.number()),
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

publicationsRouter.post(
  '/:publication_id/comments', isAuthenticated,
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

// publication_id apenas para validar a rota, não será necessário usá-lo
publicationsRouter.get(
  '/:publication_id/comments', isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      publication_id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      id: Joi.string().uuid().required(),
    }
  }),
  commentController.show
)

// publication_id apenas para validar a rota, não será necessário usá-lo
publicationsRouter.patch(
  '/:publication_id/comments', isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      publication_id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      id: Joi.string().uuid().required(),
      comment: Joi.string(),
    }
  }),
  commentController.update
)

// publication_id apenas para validar a rota, não será necessário usá-lo
publicationsRouter.delete(
  '/:publication_id/comments', isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      publication_id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      id: Joi.string().uuid().required(),
    }
  }),
  commentController.softDelete
)



export default publicationsRouter