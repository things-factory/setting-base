import gql from 'graphql-tag'

export const SettingList = gql`
  type SettingList {
    items: [Setting]
    total: Int
  }
`
