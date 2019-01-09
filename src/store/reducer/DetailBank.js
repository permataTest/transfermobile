import * as actionTypes from '../action/actionTypes';

let initialState = {
    amount    : 0,
    name      : "",
    bankList  : "",
    accountTO : "",
    error     : null,
    loading   : false
}

const dataDetail = (state=initialState, action) => {

    switch(action.type) {
        case actionTypes.FETCH_DETAIL_START:
            return{
                ...state,
                loading : true
            }
        case actionTypes.FETCH_DETAIL_SUCCESS:
            return{
                ...state,
                loading : false,
                name    : action.payload.Account_Name.Name,
                amount  : action.payload.Account_Name.Amount,
                bankList: action.payload.Bank_List,
                accountTO: action.payload.Account_Transfer
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