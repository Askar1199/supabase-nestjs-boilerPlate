import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('profiles')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  full_name: string;

  @Column({ nullable: true })
  phone_number: string;

  @Column({ nullable: true })
  age: number;

  @Column({ nullable: true })
  height: string;

  @Column({ nullable: true })
  weight: string;

  @Column({ nullable: true })
  avatar_url: string;
}
