
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { User } from '../user/user.entity';
@ObjectType()
@Entity()
export class Post {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column('varchar', { length: 75 })
  title: string;

  @Field()
  @Column('varchar', { length: 100, nullable: true })
  meta_title: string;

  @Field()
  @Column('tinytext', { nullable: true })
  summary: string;

  @Field()
  @Column('boolean', { default: false })
  published: boolean;

  @Field()
  @Column()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @Column()
  @UpdateDateColumn()
  updated_at: Date;

  @Field()
  @Column('datetime', { nullable: true })
  published_at: Date;

  @Field()
  @Column('text', { nullable: true })
  content: string;

  @Column()
  @Field(type => String)
  userId: string;

  @Field(type => User)
  @ManyToOne(() => User, user => user.posts)
  user: User;
}