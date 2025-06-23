import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'auth', name: 'users', synchronize: false })
export class AuthUser {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  role: string;

  @Column()
  phone: string;

  @Column({ name: 'encrypted_password', select: false })
  password: string;

  @Column()
  email_confirmed_at: string;

  @Column()
  invited_at: string;

  @Column({ select: false })
  confirmation_token: string;

  @Column({ select: false })
  recovery_token: string;

  @Column({ type: 'timestamptz', nullable: true })
  deleted_at: Date | null;

  @Column({ name: 'created_at' })
  createdAt: Date;
}
