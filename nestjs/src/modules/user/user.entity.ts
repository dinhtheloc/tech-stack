import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Post } from '../post/post.entity';

@ObjectType()
@Entity('users')
export class User {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column('varchar', { length: 50, nullable: true })
  fullname: string;

  @Field()
  @Column('varchar', { length: 50, nullable: true })
  email: string;

  @Field()
  @Column('varchar', { length: 100 })
  passwordHash: string;

  @Field()
  @CreateDateColumn({ type: 'timestamp' })
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  registered_at: Date;

  @Field()
  @UpdateDateColumn()
  @Column({ type: 'timestamp', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
  lastLogin: Date;

  @OneToMany(() => Post, post => post.user)
  @Field(type => [Post], { nullable: true })
  posts?: Post[];
}
