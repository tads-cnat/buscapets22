import Publication from "../../publications/entities/Publication";
import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IUser } from '../models/IUser'
import Comment from "@modules/publications/entities/Comment";

@Entity('users')
class User implements IUser {

  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column({select: false})
  @Exclude()
  password: string

  @Column()
  phone: string

  @Column({default: 'user'})
  role: string

  @OneToMany(() => Publication, publication => publication.user_id, {
    cascade: true,
  })
  publications: Publication[]

  @OneToMany(() => Comment, comment => comment.user_id, {
    cascade: true
  })
  comments: Comment[]

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @DeleteDateColumn()
  deleted_at: Date
}

export default User