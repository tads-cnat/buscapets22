import Comment from "../entities/Comment"
import { Geometry } from 'geojson'
import Publication_image from "../entities/Publication_image"
export interface IPublication {
  id: string
  user_id: string
  title: string
  description: string
  pet_name: string
  gender: string
  disappearance_date: Date
  last_location: Geometry
  image_url: Publication_image[]
  comments: Comment[]
  created_at: Date
  updated_at: Date
  deleted_at: Date
}