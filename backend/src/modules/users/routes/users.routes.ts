import { Router } from 'express';
import { celebrate, Joi, Segments } from "celebrate";
import UsersController from '../controllers/UsersController';
import SessionController from '../controllers/SessionController';
import isAuthenticated from '@shared/middlewares/isAthenticated';

const usersRouter = Router()
const usersController = new UsersController()
const sessionController = new SessionController()

usersRouter.get('/', isAuthenticated, usersController.index)

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
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }
  }),
  usersController.create
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
    [Segments.BODY]: {
      name: Joi.string(),
      email: Joi.string().email(),
    }
  }),
  usersController.update
)

export default usersRouter