const BASE_URL = `${process.env.BASE_URL}/api/${process.env.API_VERSION}`

// News
export const API_NEWS = {
  LIST: `${BASE_URL}/news`,
  DETAIL: (newsId) => `${BASE_URL}/news/${newsId}`
}
