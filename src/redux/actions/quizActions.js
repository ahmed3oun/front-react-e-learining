import axios from 'axios';
import { toast } from 'react-toastify';
import {
  ADD_QUIZ,
  DELETE_QUIZ,
  EDIT_QUIZ,
  GET_QUIZ,
  GET_ALL_QUIZS,
  AUTH_ERRORS,
} from '../constants/ActionTypes';

// get all Quizs
export const getAllQuizs = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/quiz');

    dispatch({
      type: GET_ALL_QUIZS,
      payload: res.data, //{ msg: 'all quizs', allquiz }
    });
  } catch (error) {
    console.log(error);

    const { errors, msg } = error.response.data;

    if (Array.isArray(errors)) {
      errors.forEach((err) => toast(err.msg));
    }
    console.log(errors);
    if (msg) {
      alert(msg);
    }
  }
};

// get one Quiz
export const getOneQuiz = (idQuiz) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/quiz/${idQuiz}`);
    dispatch({
      type: GET_COURSE,
      payload: res.data, //{ msg: 'Quiz found by id', findQuiz }
    });
  } catch (error) {
    console.dir(error);

    const { errors, msg } = error.response.data;

    if (Array.isArray(errors)) {
      errors.forEach((err) => toast(err.msg));
    }
    console.log(errors);
    if (msg) {
      alert(msg);
    }
  }
};

// add new Quiz

export const addQuiz = (formData) => async (dispatch) => {
  try {
    const res = await axios.post('/api/quiz', formData);
    dispatch({
      type: ADD_QUIZ,
      payload: res.data, // { msg: 'Quiz addedd', newQuiz }
    });
  } catch (error) {
    console.dir(error);

    const { errors, msg } = error.response.data;

    if (Array.isArray(errors)) {
      errors.forEach((err) => toast(err.msg));
    }
    console.log(errors);
    if (msg) {
      alert(msg);
    }

    dispatch({
      type: AUTH_ERRORS,
    });
  }
};

// Edit Quiz

export const editQuiz = (idQuiz, editedQuiz) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/courses/${idQuiz}`, editedQuiz);
    dispatch({
      type: EDIT_QUIZ,
      payload: res.data, // { msg: 'Quiz edited with success', allQuizs }
    });
  } catch (error) {
    console.dir(error);

    const { errors, msg } = error.response.data;

    if (Array.isArray(errors)) {
      errors.forEach((err) => toast(err.msg));
    }
    console.log(errors);
    if (msg) {
      alert(msg);
    }

    dispatch({
      type: AUTH_ERRORS,
    });
  }
};

// Delete Quiz

export const deleteQuiz = (idQuiz) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/quiz/${idQuiz}`);
    dispatch({
      type: DELETE_QUIZ,
      payload: res.data, // { msg: 'Quiz deleted', allQuizs }
    });
  } catch (error) {
    console.dir(error);

    const { errors, msg } = error.response.data;

    if (Array.isArray(errors)) {
      errors.forEach((err) => toast(err.msg));
    }
    console.log(errors);
    if (msg) {
      alert(msg);
    }

    dispatch({
      type: AUTH_ERRORS,
    });
  }
};
