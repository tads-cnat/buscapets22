import User from '../../users/entities/User';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IPublication } from "../models/IPublication";
import Comment from '@modules/comments/entities/Comment';
import { IGeometry } from '../models/IGeometry';


@Entity('publications')
class Publication implements IPublication {

  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => User, user => user.publications)
  user_id: string

  @Column()
  title: string

  @Column()
  description: string

  @Column()
  pet_name: string

  @Column()
  gender: string

  @Column()
  disappearance_date: Date

  @Column({type: "geometry"})
  last_location: IGeometry

  @OneToMany(() => Comment, comment => comment.publication)
  comments: Comment[]

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @DeleteDateColumn()
  deleted_at: Date
}

export default Publication