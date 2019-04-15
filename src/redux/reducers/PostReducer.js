export const POSTS = 'POSTS'
export const POSTS_SUCCESS = 'POSTS_SUCCESS'
export const POSTS_FAILURE = 'POSTS_FAILURE'

const initialState = {
  posts: [],
  fetching: false,
  error: null,
  category: null,
  hasPost: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POSTS:
      return {
        ...state,
        fetching: true,
      }
    case POSTS_SUCCESS:
      return {
        ...state,
        posts: action.posts,
        category: action.category,
        fetching: false,
        hasPost: action.hasPost,
      }
    case POSTS_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error,
        hasPost: action.hasPost,
      }
    default:
      return state
  }
}