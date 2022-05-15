import Comment from "@modules/comments/entities/Comment"
import { IGeometry } from "./IGeometry"
export interface IPublication {
  id: string
  user_id: string
  title: string
  description: string
  pet_name: string
  gender: string
  disappearance_date: Date
  last_location: IGeometry
  comments: Comment[]
  created_at: Date
  updated_at: Date
  deleted_at: Date
}