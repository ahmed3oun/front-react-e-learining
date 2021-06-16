import { combineReducers } from 'redux';
import userReducer from './userReducer';
import levelReducer from './levelReducer';
import courseReducer from './courseReducer';
import quizReducer from './quizReducer';
import alertReducer from './alertReducer';

export default combineReducers({
  userReducer,
  levelReducer,
  courseReducer,
  quizReducer,
  alertReducer,
});
