import { createSetting } from './create-setting'
import { deleteSetting } from './delete-setting'
import { deleteSettings } from './delete-settings'
import { settingResolver } from './setting'
import { settingsResolver } from './settings'
import { updateMultipleSetting } from './update-multiple-setting'
import { updateSetting } from './update-setting'

export const Query = {
  ...settingsResolver,
  ...settingResolver
}

export const Mutation = {
  ...updateSetting,
  ...updateMultipleSetting,
  ...createSetting,
  ...deleteSetting,
  ...deleteSettings
}
