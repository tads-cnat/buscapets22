import User from '../../users/entities/User';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IPublication } from "../models/IPublication";
import Comment from './Comment';
import { GeometryTransformer } from '@shared/libs/transformers';
import { Geometry } from 'geojson'

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

  @Column({
    type: 'geometry',
    spatialFeatureType: 'Point',
    srid: 4326,
    transformer: new GeometryTransformer(),
  })
  last_location: Geometry

  @OneToMany(() => Comment, comment => comment.publication_id)
  comments: Comment[]

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @DeleteDateColumn()
  deleted_at: Date
}

export default Publication