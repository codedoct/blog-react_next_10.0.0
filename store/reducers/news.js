const initialState = {
  news: {docs:[]},
  newsDetail: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_NEWS':
    return {...state, news:{docs: action.payload}}
  case 'SET_NEWS_DETAIL':
    return {...state, newsDetail: action.payload}
  default:
    return state
  }
}

export default reducer
