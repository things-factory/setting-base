import { getRepository } from 'typeorm'
import { Setting } from '../../../entities'

export const updateSetting = {
  async updateSetting(_: any, { name, patch }, context: any) {
    const repository = getRepository(Setting)
    const setting = await repository.findOne({ domain: context.state.domain, name })

    return await repository.save({
      creater: context.state.user,
      ...setting,
      ...patch,
      domain: context.state.domain,
      updater: context.state.user
    })
  }
}
