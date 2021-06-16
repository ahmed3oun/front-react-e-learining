import axios from 'axios';
import { toast } from 'react-toastify';
import {
  ADD_COURSE,
  DELETE_COURSE,
  EDIT_COURSE,
  GET_COURSE,
  GET_ALL_COURSES,
  GET_ALL_COURSES_LEVEL,
  AUTH_ERRORS,
} from '../constants/ActionTypes';
import { getAuthUser } from './userActions';

// get all Courses
export const getAllCourses = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/courses');

    dispatch({
      type: GET_ALL_COURSES,
      payload: res.data, //{ msg: 'all courses', allCourses }
    });
  } catch (error) {
    console.log(error);

    const { errors, msg } = error.response.data;

    if (Array.isArray(errors)) {
      errors.forEach((err) => toast.error(err.msg));
    }
    console.log(errors);
    if (msg) {
      alert(msg);
    }
  }
};

// get all Courses of a selected Level
export const getAllCoursesOfLevel = (idlevel) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/courses/level/${idlevel}`);

    dispatch({
      type: GET_ALL_COURSES_LEVEL,
      payload: res.data, //{ msg: 'all courses of this level', allCourses }
    });
  } catch (error) {
    console.log(error);

    const { errors, msg } = error.response.data;

    if (Array.isArray(errors)) {
      errors.forEach((err) => toast.error(err.msg));
    }
    console.log(errors);
    if (msg) {
      alert(msg);
    }
  }
};

// get one Course
export const getOneCourse = (idCourse) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/courses/${idCourse}`);
    dispatch({
      type: GET_COURSE,
      payload: res.data, //{ msg: 'Course found by id', findCourse }
    });
  } catch (error) {
    console.dir(error);

    const { errors, msg } = error.response.data;

    if (Array.isArray(errors)) {
      errors.forEach((err) => toast.error(err.msg));
    }
    console.log(errors);
    if (msg) {
      alert(msg);
    }
  }
};

// add new course

export const addCourse = (newcourse, level) => async (dispatch) => {
  try {
    const res = await axios.post('/api/courses', newcourse);
    dispatch({
      type: ADD_COURSE,
      payload: res.data, // { msg: 'course addedd', newCourse }
    });
    toast(res.data.msg);
    dispatch(getAllCoursesOfLevel(level));
  } catch (error) {
    console.dir(error);

    const { errors, msg } = error.response.data;

    if (Array.isArray(errors)) {
      errors.forEach((err) => toast.error(err.msg));
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

// Edit Course

export const editCourse = (idCourse, editedCourse) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/courses/${idCourse}`, editedCourse);
    dispatch({
      type: EDIT_COURSE,
      payload: res.data, // { msg: 'course edited with success', allCourses }
    });
    toast(res.data.msg);
  } catch (error) {
    console.dir(error);

    const { errors, msg } = error.response.data;

    if (Array.isArray(errors)) {
      errors.forEach((err) => toast.error(err.msg));
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

// Delele course

export const deleteCourse = (idCourse) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/courses/${idCourse}`);
    dispatch({
      type: DELETE_COURSE,
      payload: res.data, // { msg: 'Course deleted(with quizzes)', allCourses }
    });
    toast(res.data.msg);
  } catch (error) {
    console.dir(error);

    const { errors, msg } = error.response.data;

    if (Array.isArray(errors)) {
      errors.forEach((err) => toast.error(err.msg));
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
