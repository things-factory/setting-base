import { getRepository, In } from 'typeorm'
import { Setting } from '../../../entities'

export const deleteSettings = {
  async deleteSettings(_: any, { names }, context: any) {
    await getRepository(Setting).delete({
      domain: context.state.domain,
      name: In(names)
    })

    return true
  }
}
