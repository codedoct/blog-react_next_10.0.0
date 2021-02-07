import { API_NEWS } from '~/utils/api-url'
import { apiGetNonAuth } from '~/utils/api'

export const getNews = async (dispatch, data) => {
  try {
    const response  = await apiGetNonAuth(API_NEWS.LIST, data)
    dispatch({ type: 'SET_NEWS', payload: response.data.result.docs })
  } catch (error) {
    throw error.response
  }
}

export const getNewsDetail = async (dispatch, data) => {
  try {
    const response  = await apiGetNonAuth(API_NEWS.DETAIL(data))
    dispatch({ type: 'SET_NEWS_DETAIL', payload: response.data.result })
  } catch (error) {
    throw error.response
  }
}
