import { getRepository } from 'typeorm'
import { Setting } from '../../../entities'

export const createSetting = {
  async createSetting(_: any, { setting }, context: any) {
    return await getRepository(Setting).save({
      domain: context.domain,
      ...setting,
      creatorId: context.state.user.id,
      updaterId: context.state.user.id
    })
  }
}
