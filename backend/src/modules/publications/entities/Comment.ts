import Publication from "@modules/publications/entities/Publication";
import User from "@modules/users/entities/User";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IComment } from "../models/IComment";

@Entity('comments')
class Comment implements IComment {
  
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => User, user => user.comments, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({name: 'user_id'})
  user_id: string

  @ManyToOne(() => Publication, publication => publication.comments, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({name: 'publication_id'})
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