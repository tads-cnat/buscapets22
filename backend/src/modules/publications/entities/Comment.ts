import Publication from "@modules/publications/entities/Publication";
import User from "@modules/users/entities/User";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IComment } from "../models/IComment";

@Entity('comments')
class Comment implements IComment {
  
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => User, user => user.comments)
  user_id: string

  @ManyToOne(() => Publication, publication => publication.comments)
  publication_id: string

  @Column()
  comment: string;

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @DeleteDateColumn()
  deleted_at: Date
}

export default Comment