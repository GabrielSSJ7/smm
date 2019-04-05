import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import PostsReducer from './PostsReducer'

export default combineReducers({
  UserReducer,
  PostsReducer
})