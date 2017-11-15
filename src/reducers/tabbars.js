import { CHANGE_TABBAR } from '../constants/actionTypes'

const initialState = [
  {
    title: '首页',
    key: 'Home',
    icon: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
    selectedIcon:
      'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg',
    selected: true
  },
  {
    title: '趣闻',
    key: 'Acticle',
    icon: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
    selectedIcon:
      'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg',
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