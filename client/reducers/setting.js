import { ADD_SETTING, REMOVE_SETTING } from '../actions/setting'

const INITIAL_STATE = {
  settings: []
}

const setting = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_SETTING:
      return {
        ...state,
        settings: [...state.settings, action.setting]
      }

    case REMOVE_SETTING:
      return {
        ...state,
        settings: state.settings.filter(i => i !== action.setting)
      }

    default:
      return state
  }
}

export default setting
