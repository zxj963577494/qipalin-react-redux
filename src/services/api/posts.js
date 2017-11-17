import * as http from '../../utils/http'
import * as api from '../../api'

export function getPosts(payload) {
  return http.get(api.POSTS, payload)
}

// 获取置顶的文章
export function getStickyPosts() {
  return http.get(api.POSTS, { params: { sticky: true, per_page: 5, page: 1 } })
}
