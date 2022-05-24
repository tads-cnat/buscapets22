import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IUser_image } from "../models/IUser_image";
import User from "./User";

@Entity('users_images')
class User_image implements IUser_image {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @OneToOne(() => User, (user) => user.image_url, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({name: 'user_id'})
  user_id: string

  @Column()
  image_url: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @DeleteDateColumn()
  deleted_at: Date
}

export default User_image