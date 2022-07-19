import { Router } from 'express';
import { celebrate, Joi, Segments } from "celebrate";
import UsersController from '../controllers/UsersController';
import SessionController from '../controllers/SessionController';
import isAuthenticated from '@shared/middlewares/isAthenticated';
import multer from 'multer';
import uploadConfig from "@config/upload";

const usersRouter = Router()
const usersController = new UsersController()
const sessionController = new SessionController()
const upload = multer(uploadConfig.multer)

usersRouter.post(
  '/session',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }
  }),
  sessionController.createSession
)

usersRouter.post(
  '/', upload.single("user_image"),
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      phone: Joi.string().required(),
      password: Joi.string().required(),
    }
  }),
  usersController.create
)

usersRouter.get('/', isAuthenticated, usersController.list)

usersRouter.get(
  '/name',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string(),
    }
  }),
  usersController.findName
)

usersRouter.get(
  '/email',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string(),
    }
  }),
  usersController.findEmail
)

usersRouter.get(
  '/:id', isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    }
  }),
  usersController.show
)

usersRouter.delete(
  '/:id', isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    }
  }),
  usersController.softDelete
)

usersRouter.patch(
  '/:id', isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    }
  }),
  celebrate({
    [Segments.BODY]: {
      name: Joi.string(),
      email: Joi.string().email(),
      phone: Joi.string(),
    }
  }),
  usersController.update
)

export default usersRouter