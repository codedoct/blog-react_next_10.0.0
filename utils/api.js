import axios from 'axios'
import { METHOD } from './constant'
import { getUserToken } from '~/utils/auth'

export const apiGetNonAuth = (URL, params) => axios({
  url: URL,
  method: METHOD.GET,
  params
})
export const apiGetAuth = (URL, params) => axios({
  url: URL,
  method: METHOD.GET,
  params,
  headers: {
    Authorization: `Bearer ${getUserToken()}`
  }
})

export const apiPostNonAuth = (URL, data) => axios({
  url: URL,
  method: METHOD.POST,
  data
})
export const apiPostAuth = (URL, data) => axios({
  url: URL,
  method: METHOD.POST,
  data,
  headers: {
    Authorization: `Bearer ${getUserToken()}`
  }
})

export const apiPatchAuth = (URL, data) => axios({
  url: URL,
  method: METHOD.PATCH,
  data,
  headers: {
    Authorization: `Bearer ${getUserToken()}`
  }
})

export const apiPutAuth = (URL, data) => axios({
  url: URL,
  method: METHOD.PUT,
  data,
  headers: {
    Authorization: `Bearer ${getUserToken()}`
  }
})

export const apiDeleteAuth = (URL, data) => axios({
  url: URL,
  method: METHOD.DELETE,
  data,
  headers: {
    Authorization: `Bearer ${getUserToken()}`
  }
})
