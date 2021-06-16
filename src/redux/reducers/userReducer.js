import {
  USER_LOADING,
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  GET_AUTH_USER,
  AUTH_ERRORS,
  EDIT_USER,
  GET_ALL_USERS,
} from '../constants/ActionTypes';

const initialState = {
  token: localStorage.getItem('token'), //null
  user: null,
  users: [],
  isAuth: false,
  isLoading: false,
  msg: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_USER:
    case LOGIN_USER:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        msg: payload.msg,
        ...payload,
      };
    case GET_AUTH_USER:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        msg: payload.msg,
        ...payload,
      };
    case EDIT_USER:
      return {
        ...state,
        usermodif: payload.useraftermodif,
        msg: payload.msg,
      };

    case LOGOUT_USER:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuth: false,
        user: null,
        isLoading: false,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        users: payload.userslist,
      };
    default:
      return state;
  }
};

export default userReducer;
