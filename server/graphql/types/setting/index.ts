import { NewSetting } from './new-setting'
import { Setting } from './setting'
import { SettingList } from './setting-list'
import { SettingPatch } from './setting-patch'

export const Mutation = `
  createSetting (
    setting: NewSetting!
  ): Setting @priviledge(category: "setting", priviledge: "mutation")

  updateSetting (
    name: String!
    patch: SettingPatch!
  ): Setting @priviledge(category: "setting", priviledge: "mutation")

  updateMultipleSetting (
    patches: [SettingPatch]!
  ): [Setting] @priviledge(category: "setting", priviledge: "mutation")

  deleteSetting (
    name: String!
  ): Setting

  deleteSettings (
    names: [String]!
  ): Boolean @priviledge(category: "setting", priviledge: "mutation")
`

export const Query = `
  settings(filters: [Filter], pagination: Pagination, sortings: [Sorting]): SettingList @priviledge(category: "setting", priviledge: "query")
  setting(name: String!): Setting @priviledge(category: "setting", priviledge: "query")
`

export const Types = [Setting, NewSetting, SettingPatch, SettingList]
