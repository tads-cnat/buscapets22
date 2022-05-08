import User from "@modules/users/entities/User"

export interface IPublication {
  title: string
  description: string
  owner: User
  created_at: Date
  updated_at: Date
  deleted_at: Date
}