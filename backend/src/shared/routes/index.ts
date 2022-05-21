import publicationsRouter from '@modules/publications/routes/publication.routes'
import usersRouter from '@modules/users/routes/users.routes'
import { Router } from 'express'

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/publications', publicationsRouter)

export default routes