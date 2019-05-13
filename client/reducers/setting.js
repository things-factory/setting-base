import { ADD_SETTING } from '../actions/setting'

const INITIAL_STATE = {
  settings: []
}

const setting = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_SETTING:
      let setting = action.setting
      return {
        ...state,
        settings: [...state.settings, setting]
      }

    default:
      return state
  }
}

export default setting
