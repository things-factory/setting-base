import { Filter, Pagination, Sorting } from '@things-factory/shell'
import * as Setting from './setting'

export const queries = [Setting.Query]

export const mutations = [Setting.Mutation]

export const types = [Filter, Pagination, Sorting, ...Setting.Types]
