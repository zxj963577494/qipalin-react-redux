import { CHANGE_TABBAR } from '../constants/actionTypes'

const initialState = [
  {
    title: '首页',
    key: 'Home',
    icon: require('../assets/images/tar-home.png'),
    selectedIcon: require('../assets/images/tar-home-on.png'),
    selected: true
  },
  {
    title: '趣闻',
    key: 'Acticle',
    icon: '../assets/images/tar-topic.png',
    selectedIcon: '../assets/images/tar-topic-on.png',
    selected: false
  },
  {
    title: '段子',
    key: 'Acticle',
    icon: '../assets/images/tar-duanzi.png',
    selectedIcon: '../assets/images/tar-duanzi-on.png',
    selected: false
  },
  {
    title: '趣图',
    key: 'Acticle',
    icon: '../assets/images/tar-picture.png',
    selectedIcon: '../assets/images/tar-picture-on.png.png',
    selected: false
  }
]

function tabbarsReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TABBAR:
      return state.map((item) => {
        if (item.key === action.key) {
          return {...item, selected: true}
        } else {
          return item
        }
      })
    default:
      return state
  }
}

export default tabbarsReducer