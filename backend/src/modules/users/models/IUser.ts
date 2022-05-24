export interface IUser {
  id: string
  name: string
  email: string
  phone: string
  password: string
  image_url?: string
  created_at: Date
  updated_at: Date
  deleted_at: Date
}