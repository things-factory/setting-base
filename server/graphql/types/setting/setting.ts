import gql from 'graphql-tag'

export const Setting = gql`
  type Setting {
    id: String
    domain: Domain
    name: String
    description: String
    category: String
    value: String
    creator: User
    updater: User
    createdAt: String
    updatedAt: String
  }
`
