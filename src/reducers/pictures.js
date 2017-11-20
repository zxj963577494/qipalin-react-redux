import {
  GET_PICTURES_REQUEST,
  GET_PICTURES_SUCCESS,
  GET_PICTURES_FAILED,
} from '../constants/actionTypes'

const initialPicturesState = {
  list: [],
  isFetching: false,
  isLoadMore: false,
  isRefreshing: false,
  page: 1,
  pre_page: 10
}

function picturesReducer(state = initialPicturesState, action) {
  switch (action.type) {
    case GET_PICTURES_REQUEST:
      return {
        ...state,
        isFetching: true,
        isRefreshing: action.payload.isRefreshing,
        page: action.payload.page ? action.payload.page : 1
      }
    case GET_PICTURES_SUCCESS:
      return {
        ...state,
        list: state.list.concat(action.payload),
        isFetching: false,
        isRefreshing: false,
        isLoadMore: action.payload.length < 10 ? true : false
      }
    case GET_PICTURES_FAILED:
      return { ...state, isFetching: false, isRefreshing: false }
    default:
      return { ...state, isFetching: false, isRefreshing: false }
  }
}

export { picturesReducer }
