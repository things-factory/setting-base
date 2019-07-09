import { gql } from 'apollo-server-koa'

export const NewSetting = gql`
  input NewSetting {
    name: String!
    category: String!
    value: String
  }
`
