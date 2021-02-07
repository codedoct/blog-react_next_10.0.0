import { API_AUTH } from '~/utils/api-url'
import { apiPostNonAuth } from '~/utils/api'

export const registerUser = async (data) => {
  try {
    await apiPostNonAuth(API_AUTH.REGISTER, data)
  } catch (error) {
    throw error.response
  }
}

export const loginUser = async (data) => {
  try {
    await apiPostNonAuth(API_AUTH.LOGIN, data)
  } catch (error) {
    throw error.response
  }
}
