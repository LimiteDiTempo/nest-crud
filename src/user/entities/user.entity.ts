import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({ nullable: false })
  email?: string;

  @Column({ nullable: false })
  password?: string;

  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'createdAt',
  })
  createdAt!: Date;

  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'updatedAt',
  })
  updatedAt!: Date;
}
