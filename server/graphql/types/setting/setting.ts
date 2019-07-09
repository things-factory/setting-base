import { gql } from 'apollo-server-koa'

export const Setting = gql`
  type Setting {
    id: String
    domain: Domain
    name: String
    category: String
    value: String
    creator: User
    updater: User
    createdAt: String
    updatedAt: String
  }
`
