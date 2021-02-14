import * as Cookies from 'js-cookie'

export const setCookie = (param, value, expire) => {
  Cookies.set(param, value, {
    path: '/',
    expires: expire // days
  })
}
