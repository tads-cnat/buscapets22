import Comment from "../entities/Comment"
import { Geometry } from 'geojson'
export interface IPublication {
  id: string
  user_id: string
  title: string
  description: string
  pet_name: string
  gender: string
  disappearance_date: Date
  last_location: Geometry
  images_url: string
  comments: Comment[]
  created_at: Date
  updated_at: Date
  deleted_at: Date
}