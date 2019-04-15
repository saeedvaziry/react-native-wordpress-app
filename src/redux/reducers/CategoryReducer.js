export const CATEGORIES = 'CATEGORIES';
export const CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS';
export const CATEGORIES_FAILURE = 'CATEGORIES_FAILURE';

const initialState = {
  categories: [],
  fetching: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES:
      return {
        ...state,
        fetching: true,
      }
    case CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.categories,
        fetching: false,
      }
    case CATEGORIES_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error
      }
    default:
      return state
  }
}