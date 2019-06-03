import { gql } from 'apollo-server-koa'

export const SettingList = gql`
  input SettingList {
    items: [Setting]
    total: Int
  }
`
