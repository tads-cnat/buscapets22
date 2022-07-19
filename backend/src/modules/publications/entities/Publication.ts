import User from '../../users/entities/User';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IPublication } from "../models/IPublication";
import Comment from './Comment';
import { GeometryTransformer } from '@shared/libs/transformers';
import { Geometry } from 'geojson'
import Publication_image from './Publication_image';

@Entity('publications')
class Publication implements IPublication {

  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @ManyToOne(() => User, user => user.publications, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({name: 'user_id'})
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

  @OneToMany(() => Publication_image, publication_image => publication_image.publication_id, {
    cascade: true,
    nullable: true
  })
  images_url: string

  @OneToMany(() => Comment, comment => comment.publication_id, {
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

export default Publication