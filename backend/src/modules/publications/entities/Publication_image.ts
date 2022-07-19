import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IPublication_image } from '../models/IPublication_image';
import Publication from './Publication';

@Entity('publications_images')
class Publication_image implements IPublication_image {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Publication, publication => publication.images_url, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({name: 'publication_id'})
  publication_id: string

  @Column()
  image_url: string;

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @DeleteDateColumn()
  deleted_at: Date
}

export default Publication_image