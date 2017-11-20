import * as http from '../../utils/http'
import * as api from '../../api'

// 获取文章列表
export function getArticles(payload) {
  const params = {
    categories: 1,
    per_page: 10,
    page: 1,
    orderby: 'date',
    order: 'desc',
    ...payload
  }
  return http.get(api.POSTS, { params: params })
}

// 获取置顶的文章
export function getStickyArticles() {
  return http.get(api.POSTS, { params: { sticky: true, per_page: 10, page: 1 } })
}

// 获取详细文章
export function getArticleDetail(payload) {
  const params = {
    include: 1,
    ...payload
  }
  return http.get(api.POSTS, { params: params })
}

// 获取段子列表
export function getJokes(payload) {
  const params = {
    categories: 2,
    per_page: 10,
    page: 1,
    orderby: 'date',
    order: 'desc',
    ...payload
  }
  return http.get(api.POSTS, { params: params })
}