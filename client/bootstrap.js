import { store } from '@things-factory/shell'
import setting from './reducers/setting'

export default function bootstrap() {
  store.addReducers({
    setting
  })
}
