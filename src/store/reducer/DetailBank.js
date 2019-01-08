import * as actionTypes from '../action/actionTypes';

let initialState = {
    amount  : 0,
    name    : "",
    error   : null,
    loading : false
}

const dataDetail = (state=initialState, action) => {

    switch(action.type) {
        case actionTypes.FETCH_DETAIL_START:
            return{
                ...state,
                loading : true
            }
        case actionTypes.FETCH_DETAIL_SUCCESS:
        console.log("222222",action.payload);
        
            return{
                ...state,
                loading : false,
                name    : action.payload.Name,
                amount  : action.payload.Amount
            }
        case actionTypes.FETCH_DETAIL_FAIL:
            return{
                ...state,
                loading : false,
                error   : action.payload
            }
        default:
        return state;
    }
}

export default dataDetail;