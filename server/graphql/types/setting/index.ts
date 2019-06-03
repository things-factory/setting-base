import { Filter, Pagination, Sorting } from '@things-factory/shell'
import { NewSetting } from './new-setting'
import { Setting } from './setting'
import { SettingList } from './setting-list'
import { SettingPatch } from './setting-patch'

export const Mutation = `
  createSetting (
    setting: NewSetting!
  ): Setting

  updateSetting (
    name: String!
    patch: SettingPatch!
  ): Setting

  deleteSetting (
    name: String!
  ): Setting
`

export const Query = `
  settings(filters: [Filter], pagination: Pagination, sortings: [Sorting]): SettingList
  setting(name: String!): Setting
`

export const Types = [Filter, Pagination, Sorting, Setting, NewSetting, SettingPatch, SettingList]
