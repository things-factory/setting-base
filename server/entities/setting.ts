import { Column, Entity, Index, ManyToOne } from 'typeorm'
import { Domain, DomainBaseEntity } from '@things-factory/shell'
import { User } from '@things-factory/auth-base'

@Entity('settings')
@Index('ix_setting_0', (setting: Setting) => [setting.domain, setting.name], { unique: true })
@Index('ix_setting_1', (setting: Setting) => [setting.domain, setting.category])
export class Setting extends DomainBaseEntity {
  @ManyToOne(type => Domain)
  domain: Domain

  @Column('text')
  name: string

  @Column('text')
  category: string

  @Column('text', {
    nullable: true
  })
  value: string

  @ManyToOne(type => User)
  creator: User

  @ManyToOne(type => User)
  updater: User
}
