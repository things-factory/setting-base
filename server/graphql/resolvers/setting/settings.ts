import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Setting } from '../../../entities'

export const settingsResolver = {
  async settings(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(Setting).createQueryBuilder()
    buildQuery(queryBuilder, params, context)
    const [items, total] = await queryBuilder
      .leftJoinAndSelect('Setting.domain', 'Domain')
      .leftJoinAndSelect('Setting.creator', 'Creator')
      .leftJoinAndSelect('Setting.updater', 'Updater')
      .getManyAndCount()

    return { items, total }
  }
}
