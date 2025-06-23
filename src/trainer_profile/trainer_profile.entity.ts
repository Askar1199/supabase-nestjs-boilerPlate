import { AbstractEntity } from 'src/abstract.entity';
import { AuthUser } from 'src/auth/auth.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('trainer_profiles')
export class TrainerProfiles extends AbstractEntity {
  @Column()
  age: number;

  @Column({ nullable: true })
  avatar: string;

  @Column('text', { array: true })
  specialization: string[];

  @ManyToOne(() => AuthUser, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user: AuthUser;

  @Column('uuid')
  user_id: string;
}
