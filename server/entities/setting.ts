import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, Entity, Index, ManyToOne } from 'typeorm'
import { Domain } from '@things-factory/shell'
import { User } from '@things-factory/auth-base'

@Entity('settings')
@Index('ix_setting_0', (setting: Setting) => [setting.domain, setting.name], { unique: true })
@Index('ix_setting_1', (setting: Setting) => [setting.domain, setting.category])
export class Setting {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @Column('text')
  name: string

  @Column('text')
  description: string

  @Column('text')
  category: string

  @Column('text', {
    nullable: true
  })
  value: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @ManyToOne(type => User, {
    nullable: true
  })
  creator: User

  @ManyToOne(type => User, {
    nullable: true
  })
  updater: User
}
