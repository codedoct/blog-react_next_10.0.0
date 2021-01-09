const BASE_URL = `${process.env.BASE_URL}/api/${process.env.API_VERSION}`

// Auth
const BASE_AUTH_URL = 'auth'
export const API_AUTH = {
  REGISTER: `${BASE_URL}/${BASE_AUTH_URL}/register`,
  LOGIN: `${BASE_URL}/${BASE_AUTH_URL}/login`,
  LOGOUT: `${BASE_URL}/${BASE_AUTH_URL}/logout`
}

// News
const BASE_NEWS_URL = 'news'
export const API_NEWS = {
  LIST: `${BASE_URL}/${BASE_NEWS_URL}`,
  DETAIL: (newsId) => `${BASE_URL}/${BASE_NEWS_URL}/${newsId}`
}
