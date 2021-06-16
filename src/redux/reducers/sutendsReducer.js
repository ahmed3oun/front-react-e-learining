import { 
    ADMIN_STUDENTS_REQUEST,
    ADMIN_STUDENTS_SUCCESS,
    ADMIN_STUDENTS_FAIL,
    CLEAR_ERRORS
 } from "../constants/studentsConstants";


export const studentsReducer = (state = { students: [] }, action) => {
    switch (action.type) {
        
        case ADMIN_STUDENTS_REQUEST:
            return {
                loading: true,
                students: []
            }

        case ADMIN_STUDENTS_SUCCESS:
            return {
                loading: false,
                students: action.payload.students,
            }

        
        case ADMIN_STUDENTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}