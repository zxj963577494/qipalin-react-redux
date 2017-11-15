import {GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILED} from '../constants/actionTypes'

const getPostsRequest = function(payload) {
  return {type: GET_POSTS_REQUEST, payload}
}

const getPostsSuccess = function(payload) {
  return {type: GET_POSTS_SUCCESS, payload}
}

const getPostsFailed = function(payload) {
  return {type: GET_POSTS_FAILED, payload}
}

export {
  getPostsRequest,
  getPostsSuccess,
  getPostsFailed
}