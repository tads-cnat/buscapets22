import Publication from "@modules/publications/entities/Publication"
import User from "@modules/users/entities/User"

export interface IComment {
  comment: string
  user: User
  publication: Publication
  created_at: Date
  updated_at: Date
  deleted_at: Date
}