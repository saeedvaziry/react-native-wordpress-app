import { AppConfigs } from '../../configs';

import {
  POSTS,
  POSTS_SUCCESS,
  POSTS_FAILURE,
} from '../reducers'

function posts() {
  return {
    type: POSTS,
  }
}

function postsSuccess(oldPosts, data, category) {
  let posts = [];
  for (let i = 0; i < data.length; i++) {
    let image = null;
    if (data[i]._embedded['wp:featuredmedia'] && data[i]._embedded['wp:featuredmedia'][0] && data[i]._embedded['wp:featuredmedia'][0].media_details && data[i]._embedded['wp:featuredmedia'][0].media_details.sizes && data[i]._embedded['wp:featuredmedia'][0].media_details.sizes.medium) {
      image = data[i]._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url;
    }
    posts.push({
      title: data[i].title,
      image: image
    });
  }

  return {
    type: POSTS_SUCCESS,
    posts: oldPosts.concat(posts),
    category: category,
    hasPost: data.length > 0 ? true : false
  }
}

function postsFailure(error) {
  return {
    type: POSTS_FAILURE,
    error: error,
    hasPost: false
  }
}

export function fetchPosts(page = 1, category, oldPosts = []) {
  let url = AppConfigs.BASE_URL + '/wp-json/wp/v2/posts?_embed&page=' + page
  if (category) {
    url = AppConfigs.BASE_URL + '/wp-json/wp/v2/posts?_embed&categories=' + category.id + '&page=' + page
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
          dispatch(postsSuccess(oldPosts, data, category))
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