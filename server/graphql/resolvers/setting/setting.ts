import { getRepository } from 'typeorm'
import { Setting } from '../../../entities'

export const settingResolver = {
  async setting(_: any, { name }, context: any) {
    return await getRepository(Setting).findOne({
      where: { domain: context.domain, name },
      relations: ['domain', 'creator', 'updater']
    })
  }
}
