import * as http from '../../utils/http'
import * as api from '../../api'

export function getPosts(payload) {
  return http.get(api.POSTS, payload)
}
