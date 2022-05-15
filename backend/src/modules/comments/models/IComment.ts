export interface IComment {
  id: string
  user_id: string
  publication_id: string
  comment: string
  created_at: Date
  updated_at: Date
  deleted_at: Date
}