import { NavigationActions } from 'react-navigation'

import CONFIGS from '../config/app'

import {
  POSTS,
  POSTS_SUCCESS,
  POSTS_FAILURE,
} from '../reducers/PostReducer'

function posts() {
  return {
    type: POSTS,
  }
}

function postsSuccess(posts, category) {
  return {
    type: POSTS_SUCCESS,
    posts: posts,
    category: category
  }
}

function postsFailure(error) {
  return {
    type: POSTS_FAILURE,
    error: error
  }
}

export function fetchPosts(page = 1, category, oldPosts = []) {
  let url = CONFIGS.BASE_URL + '/wp-json/wp/v2/posts?_embed&page=' + page
  if (category) {
    url = CONFIGS.BASE_URL + '/wp-json/wp/v2/posts?_embed&categories=' + category.id + '&page=' + page
  }
  return (dispatch) => {
    dispatch(posts())
    fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => {
      if (response.status == 200) {
        response.json().then((data) => {
          dispatch(postsSuccess(oldPosts.concat(data), category))
        })
      } else {
        response.json().then((data) => {
          dispatch(postsFailure(data.message))
        })
      }
    }).catch((error) => {
      dispatch(postsFailure(error))
    })
  }
}