import {
  GET_DETAIL_REQUEST,
  GET_DETAIL_SUCCESS,
  GET_DETAIL_FAILED,
} from '../constants/actionTypes'

const initialDetailState = {
  detail: {},
  isFetching: false
}

function detailReducer(state = initialDetailState, action) {
  switch (action.type) {
    case GET_DETAIL_REQUEST:
      return { ...state, isFetching: true }
    case GET_DETAIL_SUCCESS:
      return {
        ...state,
        detail: action.payload[0],
        isFetching: false
      }
    case GET_DETAIL_FAILED:
      return { ...state, isFetching: false }
    default:
      return { ...state, isFetching: false }
  }
}

export { detailReducer }