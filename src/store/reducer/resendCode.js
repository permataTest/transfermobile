import * as actionTypes from '../action/actionTypes';

let initialState = {
    verification : null,
    error : null,
    loading : false
}

const dataCode = (state=initialState, action) => {

    switch (action.type) {
        case actionTypes.FETCH_RESENDCODE_START:
            return{
                ...state, 
                loading : true
            }
        case actionTypes.FETCH_RESENDCODE_SUCCESS:
            return{
                ...state, 
                loading : false,
                verification : action.payload
            }
        case actionTypes.FETCH_RESENDCODE_FAIL:
            return{
                ...state, 
                loading : false,
                error : action.payload
            }
        default:
            return state;
    }
}

export default dataCode;