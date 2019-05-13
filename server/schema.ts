const path = require('path')
const appRootPath = require('app-root-path').path
const selfModulePackage = require(path.resolve(appRootPath, 'package.json'))
const selfModuleName = selfModulePackage.name
const selfModule = require(path.resolve(appRootPath, selfModulePackage.main))

const orderedModuleNames = require('@things-factory/env').orderedModuleNames
import { makeExecutableSchema } from 'graphql-tools'

const totalSchemas = [...orderedModuleNames]
  .map(dep => {
    try {
      if (selfModuleName == dep) {
        /* self module entities */
        return selfModule.schema
      } else {
        return require(dep).schema
      }
    } catch (e) {
      console.error(e)
    }
  })
  .filter(schema => schema)
  .reduce(
    (sum, schema) => {
      let { typeDefs, resolvers } = sum
      return {
        typeDefs: [...typeDefs, ...(schema.typeDefs || [])],
        resolvers: {
          Query: {
            ...resolvers.Query,
            ...((schema.resolvers && schema.resolvers.Query) || {})
          },
          Mutation: {
            ...resolvers.Mutation,
            ...((schema.resolvers && schema.resolvers.Mutation) || {})
          },
          Upload: resolvers.Upload || schema.resolvers.Upload
        }
      }
    },
    { typeDefs: [], resolvers: {} }
  )

console.log('totalSchemas')
console.log(totalSchemas)

export const schema = makeExecutableSchema(totalSchemas)
