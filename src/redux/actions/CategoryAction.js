import CONFIGS from '../config/app'

import {
  CATEGORIES,
  CATEGORIES_SUCCESS,
  CATEGORIES_FAILURE,
} from '../reducers/CategoryReducer'

function categories() {
  return {
    type: CATEGORIES,
  }
}

function categoriesSuccess(categories) {
  return {
    type: CATEGORIES_SUCCESS,
    categories: categories
  }
}

function categoriesFailure(error) {
  return {
    type: CATEGORIES_FAILURE,
    error: error
  }
}

export function fetchCategories() {
  return (dispatch) => {
    dispatch(categories())
    fetch(CONFIGS.BASE_URL + '/wp-json/wp/v2/categories?_embed', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => {
      if (response.status == 200) {
        response.json().then((data) => {
          dispatch(categoriesSuccess(data))
        })
      } else {
        response.json().then((data) => {
          dispatch(categoriesFailure(data.message))
        })
      }
    }).catch((error) => {
      dispatch(categoriesFailure(error))
    })
  }
}