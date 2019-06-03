import { getRepository } from 'typeorm'
import { Setting } from '../../../entities'
import { ListParam, buildQuery } from '@things-factory/shell'

export const settingsResolver = {
  async settings(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(Setting).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder.getManyAndCount()

    return { items, total }
  }
}
