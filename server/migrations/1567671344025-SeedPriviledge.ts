import { Priviledge } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import { getRepository, MigrationInterface, QueryRunner } from 'typeorm'

const SEEDS_PRIVILEDGES = [
  {
    name: 'query',
    category: 'setting',
    description: 'to read setting data'
  },
  {
    name: 'mutation',
    category: 'setting',
    description: 'to edit setting data'
  }
]

export class SeedPriviledge1567671344025 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const domains = await getRepository(Domain).find()

    return Promise.all(
      domains.map(async domain =>
        Promise.all(
          SEEDS_PRIVILEDGES.map(async (priviledge: Priviledge) => {
            await getRepository(Priviledge).save({
              ...priviledge,
              domain
            })
          })
        )
      )
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const domains = await getRepository(Domain).find()

    return Promise.all(
      domains.map(async domain =>
        Promise.all(
          SEEDS_PRIVILEDGES.map(async (priviledge: Priviledge) => {
            await getRepository(Priviledge).delete({
              ...priviledge,
              domain
            })
          })
        )
      )
    )
  }
}
