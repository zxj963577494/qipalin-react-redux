import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILED,
  GET_STICKYPOSTS_REQUEST,
  GET_STICKYPOSTS_SUCCESS,
  GET_STICKYPOSTS_FAILED,
  CHANGE_TABBAR
} from '../constants/actionTypes'

export const getPostsRequest = function(payload) {
  return { type: GET_POSTS_REQUEST, payload }
}

export const getPostsSuccess = function(payload) {
  return { type: GET_POSTS_SUCCESS, payload }
}

export const getPostsFailed = function(payload) {
  return { type: GET_POSTS_FAILED, payload }
}

export const getStickyPostsRequest = function() {
  return { type: GET_STICKYPOSTS_REQUEST }
}

export const getStickyPostsSuccess = function(payload) {
  return { type: GET_STICKYPOSTS_SUCCESS, payload }
}

export const getStickyPostsFailed = function(payload) {
  return { type: GET_STICKYPOSTS_FAILED, payload }
}

export const changeTabBar = function(payload) {
  return { type: CHANGE_TABBAR, payload }
}
