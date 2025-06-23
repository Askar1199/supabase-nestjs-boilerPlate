import { AbstractEntity } from 'src/abstract.entity';
import { AuthUser } from 'src/auth/auth.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('client_profile')
export class ClientProfile extends AbstractEntity {
  @ManyToOne(() => AuthUser, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user: AuthUser;

  @Column('uuid')
  user_id: string;

  @Column()
  age: number;

  @Column({ default: 'beginner' })
  level: 'beginner' | 'intermediate' | 'advance';

  @Column({ default: false })
  profile_completed: boolean;

  @Column({ nullable: true })
  avatar: string;
}
