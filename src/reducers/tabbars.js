import { CHANGE_TABBAR } from '../constants/actionTypes'

const initialState = [
  {
    title: '首页',
    key: 'home',
    icon: require('../assets/images/tar-home.png'),
    selectedIcon: require('../assets/images/tar-home-on.png'),
    selected: true
  },
  {
    title: '趣闻',
    key: 'article',
    icon: require('../assets/images/tar-topic.png'),
    selectedIcon: require('../assets/images/tar-topic-on.png'),
    selected: false
  },
  {
    title: '段子',
    key: 'duanzi',
    icon: require('../assets/images/tar-duanzi.png'),
    selectedIcon: require('../assets/images/tar-duanzi-on.png'),
    selected: false
  },
  {
    title: '趣图',
    key: 'picture',
    icon: require('../assets/images/tar-picture.png'),
    selectedIcon: require('../assets/images/tar-picture-on.png'),
    selected: false
  }
]

function tabbarsReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TABBAR:
      return state.map((item) => {
        if (item.key === action.payload) {
          return {...item, selected: true}
        } else {
          return {...item, selected: false}
        }
      })
    default:
      return state
  }
}

export default tabbarsReducer