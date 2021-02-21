import * as Cookies from 'js-cookie'

export const setCookie = (value, expire) => {
  Cookies.set('token_react_next', value, {
    path: '/',
    expires: expire // days
  })
  return {
    token: Cookies.get('token_react_next')
  }
}

export const isLogin = () => {
  const token = Cookies.get('token_react_next')
  if (token) {
    return true
  } 
  return false
}
