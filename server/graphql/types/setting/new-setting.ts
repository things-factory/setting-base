import gql from 'graphql-tag'

export const NewSetting = gql`
  input NewSetting {
    name: String!
    description: String
    category: String!
    value: String
  }
`
