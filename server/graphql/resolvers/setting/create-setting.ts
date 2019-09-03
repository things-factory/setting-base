import { getRepository } from 'typeorm'
import { Setting } from '../../../entities'

export const createSetting = {
  async createSetting(_: any, { setting }, context: any) {
    return await getRepository(Setting).save({
      domain: context.state.domain,
      ...setting,
      creator: context.state.user,
      updater: context.state.user
    })
  }
}
