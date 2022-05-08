import commentsRouter from '@modules/comments/routes/comment.routes'
import publicationsRouter from '@modules/publications/routes/publication.routes'
import usersRouter from '@modules/users/routes/users.routes'
import { Router } from 'express'

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/publications', publicationsRouter)
routes.use('/comments', commentsRouter)


export default routes