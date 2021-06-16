import axios from 'axios'

import { 
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    CLEAR_ERRORS
 } from "../constants/userConstants";

 // Login
export const login = (email, password) => async (dispatch) => {
    try {

        dispatch({ type: LOGIN_REQUEST , loading : true})

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        console.log('before login in ACTIONUSER');
        console.log(email);
        console.log("---------------");
        console.log(password);
        const { data } = await axios.post('http://localhost:5050/api/auth/login', email /* { email, password } */, config)
        console.log('after login');
        dispatch({
            type: LOGIN_SUCCESS,
            loading : false,
            isAuthenticated : true,
            error : null ,
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.message
        })
    }
}

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}
