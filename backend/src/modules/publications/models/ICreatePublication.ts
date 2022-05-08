import { IUser } from "@modules/users/models/IUser"

export interface ICreatePublication {
  title: string
  description: string
  owner: IUser
}