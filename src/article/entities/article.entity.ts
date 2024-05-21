import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('article')
export class Article {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column('varchar', { nullable: false, length: 50 })
  title!: string;

  @Column({ nullable: true })
  userId?: number;

  @Column('varchar', { nullable: false, length: 300 })
  description!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
