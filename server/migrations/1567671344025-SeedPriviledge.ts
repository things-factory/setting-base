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

    try {
      domains.forEach(async domain => {
        const priviledge = await Promise.all(
          SEEDS_PRIVILEDGES.map(async (priviledge: Priviledge) => {
            return {
              ...priviledge,
              domain
            }
          })
        )

        await getRepository(Priviledge).save(priviledge)
      })
    } catch (e) {
      console.error(e)
    }
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(Priviledge)

    SEEDS_PRIVILEDGES.reverse().forEach(async priviledge => {
      let record = await repository.findOne({ name: priviledge.name })
      await repository.remove(record)
    })
  }
}
