import Publication from "../../publications/entities/Publication";
import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IUser } from '../models/IUser'
import Comment from "@modules/comments/entities/Comment";

@Entity('users')
class User implements IUser {

  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @OneToMany(() => Publication, publication => publication.owner)
  publications: Publication[]

  @OneToMany(() => Comment, comment => comment.user)
  comments: Comment[]

  @Column({select: false})
  @Exclude()
  password: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @DeleteDateColumn()
  deleted_at: Date
}

export default User