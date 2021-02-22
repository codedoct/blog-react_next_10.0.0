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

export const getUserToken = () => {
  return Cookies.get('token_react_next')
}

export const isLoginServer = (req) => {
  const token = req.cookies.token_react_next
  if (token) {
    return true
  } 
  return false
}

export const isLoginClient = () => {
  const token = Cookies.get('token_react_next')
  if (token) {
    return true
  } 
  return false
}

export const removeCookie = () => {
  Cookies.remove('token_react_next', { path: '/' })
}
