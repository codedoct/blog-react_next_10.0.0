import {HYDRATE} from 'next-redux-wrapper'

const reducer = (state = {}, action) => {
  switch (action.type) {
  case HYDRATE:
    return {...state, ...action.payload}
  case 'REGISTER_USER':
    return { ...state, status: action.status, data: action.payload }
  case 'LOGIN_USER':
    return { ...state, status: action.status, data: action.payload }
  case 'LOGOUT_USER':
    return { ...state, status: action.status, data: action.payload }
  case 'TICK':
    return {...state, data: action.payload}
  default:
    return state
  }
}

export default reducer
