import { API_AUTH } from '~/utils/api-url'
import { apiPostNonAuth } from '~/utils/api'
import { setCookie } from '~/utils/auth'

export const registerUser = async (data) => {
  try {
    await apiPostNonAuth(API_AUTH.REGISTER, data)
  } catch (error) {
    throw error.response
  }
}

export const loginUser = async (data) => {
  try {
    const response = await apiPostNonAuth(API_AUTH.LOGIN, data)
    const token = response.data.token.split(" ")[1]
    setCookie(token, 30)
  } catch (error) {
    throw error.response
  }
}
