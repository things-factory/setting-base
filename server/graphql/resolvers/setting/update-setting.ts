import { getRepository } from 'typeorm'
import { Setting } from '../../../entities'

export const updateSetting = {
  async updateSetting(_: any, { name, patch }, context: any) {
    const repository = getRepository(Setting)
    const setting = await repository.findOne({ domain: context.state.domain, name })

    return await repository.save({
      ...setting,
      ...patch,
      updater: context.state.user
    })
  }
}
