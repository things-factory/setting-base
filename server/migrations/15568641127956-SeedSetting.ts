import { MigrationInterface, QueryRunner, getRepository } from 'typeorm'
import { Domain } from '@things-factory/shell'
import { Setting } from '../entities'
import { SETTINGS as SEED_SETTINGS } from '../seed-data/settings'

export class SeedSetting1556864112795 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(Setting)
    const domainRepository = getRepository(Domain)
    const domain = await domainRepository.findOne({
      name: 'SYSTEM'
    })

    try {
      SEED_SETTINGS.forEach(async setting => {
        await repository.save({
          ...setting,
          domain
        })
      })
    } catch (e) {
      console.error(e)
    }
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(Setting)
    SEED_SETTINGS.forEach(async setting => {
      let recode = await repository.findOne({ name: setting.name })
      await repository.remove(recode)
    })
  }
}
