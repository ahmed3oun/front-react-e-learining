import {
  ADD_QUIZ,
  EDIT_QUIZ,
  GET_ALL_QUIZS,
  GET_QUIZ,
  DELETE_QUIZ,
} from '../constants/ActionTypes';

const initialState = {
  quizs: null,
  quiz: null,
  newQuiz: null,
  msg: null,
};

const quizReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_QUIZS:
      return {
        ...state,
        quizs: payload.allquiz,
        msg: payload.msg,
      };
    case GET_QUIZ:
      return {
        ...state,
        quiz: payload.findQuiz,
        msg: payload.msg,
      };
    case ADD_QUIZ:
      return {
        ...state,
        newQuiz: payload.newQuiz,
        msg: payload.msg,
      };
    case EDIT_QUIZ:
      return {
        ...state,
        quizs: payload.allQuizs,
        msg: payload.msg,
      };
    case DELETE_QUIZ:
      return {
        ...state,
        quizs: payload.allQuizs,
        msg: payload.msg,
      };

    default:
      return state;
  }
};
export default quizReducer;
