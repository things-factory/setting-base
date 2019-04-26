import { store } from '@things-factory/shell'
import settingBase from './reducers/setting'

export default function bootstrap() {
  store.addReducers({
    settingBase
  })
}
