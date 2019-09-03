import { getRepository } from 'typeorm'
import { Setting } from '../../../entities'

export const deleteSetting = {
  async deleteSetting(_: any, { name }, context: any) {
    return await getRepository(Setting).delete({ domain: context.state.domain, name })
  }
}
