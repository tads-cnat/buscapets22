import Publication from "@modules/publications/entities/Publication"
import { IPublication } from "@modules/publications/models/IPublication"
import User from "@modules/users/entities/User"
import { IUser } from "@modules/users/models/IUser"

export interface ICreateComment {
  comment: string
  user: IUser
  publication: IPublication
}