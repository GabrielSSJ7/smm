import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import PostsReducer from './PostsReducer'
import PagesReducer from './PagesReducer'

export default combineReducers({
  UserReducer,
  PostsReducer,
  PagesReducer
})