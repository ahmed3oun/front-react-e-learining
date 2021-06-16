import axios from 'axios';

import { 
    ADMIN_STUDENTS_REQUEST,
    ADMIN_STUDENTS_SUCCESS,
    ADMIN_STUDENTS_FAIL
 } from "../constants/studentsConstants";

export const getAdminStudents = () => async (dispatch) => {
    try {

        dispatch({ type: ADMIN_STUDENTS_REQUEST })
        console.log('gonna get students ------------');
        const { data } = await axios.get(`http://localhost:5050/api/auth/admin/users/students`)
        console.log('students getted');
        dispatch({
            type: ADMIN_STUDENTS_SUCCESS,
            payload: data.students
        })

    } catch (error) {

        dispatch({
            type: ADMIN_STUDENTS_FAIL,
            payload: error.message
        })
    }
}