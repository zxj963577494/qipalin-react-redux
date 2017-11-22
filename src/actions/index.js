import {
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILED,
  GET_DETAIL_REQUEST,
  GET_DETAIL_SUCCESS,
  GET_DETAIL_FAILED,
  GET_JOKES_REQUEST,
  GET_JOKES_SUCCESS,
  GET_JOKES_FAILED,
  GET_PICTURES_REQUEST,
  GET_PICTURES_SUCCESS,
  GET_PICTURES_FAILED,
  GET_STICKY_ARTICLES_REQUEST,
  GET_STICKY_ARTICLES_SUCCESS,
  GET_STICKY_ARTICLES_FAILED,
  CHANGE_TABBAR,
  SET_NAVBAR
} from '../constants/actionTypes'

export const getArticlesRequest = function(payload) {
  return { type: GET_ARTICLES_REQUEST, payload }
}

export const getArticlesSuccess = function(payload) {
  return { type: GET_ARTICLES_SUCCESS, payload }
}

export const getArticlesFailed = function(payload) {
  return { type: GET_ARTICLES_FAILED, payload }
}

export const getJokesRequest = function(payload) {
  return { type: GET_JOKES_REQUEST, payload }
}

export const getJokesSuccess = function(payload) {
  return { type: GET_JOKES_SUCCESS, payload }
}

export const getJokesFailed = function(payload) {
  return { type: GET_JOKES_FAILED, payload }
}

export const getPicturesRequest = function(payload) {
  return { type: GET_PICTURES_REQUEST, payload }
}

export const getPicturesSuccess = function(payload) {
  return { type: GET_PICTURES_SUCCESS, payload }
}

export const getPicturesFailed = function(payload) {
  return { type: GET_PICTURES_FAILED, payload }
}

export const getDetailRequest = function(payload) {
  return { type: GET_DETAIL_REQUEST, payload }
}

export const getDetailSuccess = function(payload) {
  return { type: GET_DETAIL_SUCCESS, payload }
}

export const getDetailFailed = function(payload) {
  return { type: GET_DETAIL_FAILED, payload }
}

export const getStickyArticlesRequest = function() {
  return { type: GET_STICKY_ARTICLES_REQUEST }
}

export const getStickyArticlesSuccess = function(payload) {
  return { type: GET_STICKY_ARTICLES_SUCCESS, payload }
}

export const getStickyArticlesFailed = function(payload) {
  return { type: GET_STICKY_ARTICLES_FAILED, payload }
}

export const changeTabBar = function(payload) {
  return { type: CHANGE_TABBAR, payload }
}

export const setNavBar = function(payload) {
  return { type: SET_NAVBAR, payload }
}