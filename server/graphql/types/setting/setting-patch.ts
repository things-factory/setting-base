import gql from 'graphql-tag'

export const SettingPatch = gql`
  input SettingPatch {
    id: String
    name: String
    description: String
    category: String
    value: String
    cuFlag: String
  }
`
