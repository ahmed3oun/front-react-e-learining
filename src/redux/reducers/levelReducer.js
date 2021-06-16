import {
  ADD_LEVEL,
  EDIT_LEVEL,
  GET_ALL_LEVELS,
  GET_LEVEL,
  DELETE_LEVEL,
} from '../constants/ActionTypes';

const initialState = {
  students: null,
  /* level: null,
  newLevel: null, */
  msg: null,
};

const levelReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_LEVELS:
      return {
        ...state,
        levels: payload.students,
        msg: payload.msg,
      };
    /* case GET_LEVEL:
      return {
        ...state,
        level: payload.findLevel,
        msg: payload.msg,
      }; */
    /* case ADD_LEVEL:
      return {
        ...state,
        newLevel: payload.newLevel,
        msg: payload.msg,
      }; */
    case EDIT_LEVEL:
      return {
        ...state,
        levels: payload.students,
        msg: payload.msg,
      };
    case DELETE_LEVEL:
      return {
        ...state,
        levels: payload.students,
        msg: payload.msg,
      };

    default:
      return state;
  }
};
export default levelReducer;
