import {
  ADD_COURSE,
  EDIT_COURSE,
  GET_ALL_COURSES,
  GET_COURSE,
  DELETE_COURSE,
  GET_ALL_COURSES_LEVEL,
} from '../constants/ActionTypes';

const initialState = {
  courses: null,
  course: null,
  newCourse: null,
  msg: null,
};

const courseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_COURSES:
    case GET_ALL_COURSES_LEVEL:
      return {
        ...state,
        courses: payload.allCourses,
        msg: payload.msg,
      };
    case GET_COURSE:
      return {
        ...state,
        course: payload.findCourse,
        msg: payload.msg,
      };
    case ADD_COURSE:
      return {
        ...state,
        newCourse: payload.newCourse,
        msg: payload.msg,
      };
    case EDIT_COURSE:
      return {
        ...state,
        courses: payload.allCourses,
        msg: payload.msg,
      };
    case DELETE_COURSE:
      return {
        ...state,
        courses: payload.allCourses,
        msg: payload.msg,
      };

    default:
      return state;
  }
};
export default courseReducer;
