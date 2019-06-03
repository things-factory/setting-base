import { gql } from 'apollo-server-koa'

export const SettingList = gql`
  type SettingList {
    items: [Setting]
    total: Int
  }
`
