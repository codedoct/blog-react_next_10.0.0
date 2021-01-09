import { API_AUTH } from '~/utils/api-url'
import { apiPostNonAuth } from '~/utils/api'

export const registerUser = (data) => {
  return (dispatch) => {
    return apiPostNonAuth(API_AUTH.REGISTER, data)
      .then(data => dispatch({ type: 'REGISTER_USER', status: true, payload: data.data.result }))
      .catch(error => dispatch({ type: 'REGISTER_USER', status: false, payload: error.response.data }))
  }
}

export const loginUser = (data) => {
  return (dispatch) => {
    return apiPostNonAuth(API_AUTH.LOGIN, data)
      .then(data => dispatch({ type: 'LOGIN_USER', status: true, payload: data.data.result }))
      .catch(error => dispatch({ type: 'LOGIN_USER', status: false, payload: error.response.data }))
  }
}

export const logoutUser = () => {
  return (dispatch) => {
    return apiPostNonAuth(API_AUTH.LOGOUT)
      .then(data => dispatch({ type: 'LOGOUT_USER', status: true, payload: data.data.result }))
      .catch(error => dispatch({ type: 'LOGOUT_USER', status: false, payload: error.response.data }))
  }
}
