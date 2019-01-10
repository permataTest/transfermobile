import * as actionTypes from '../action/actionTypes';

let initialstate = {
    BankName    : "",
    AccountName : "",
    AccountNo   : null,
    loading     : false
}

const dataTransfer = (state=initialstate, action) => {

    switch(action.type){
        case actionTypes.FETCH_SUCCESS_START:
            return{
                ...state,
                loading : true
            }
        case actionTypes.FETCH_SUCCESS_SUCCESS:
        console.log(
            action.payload,"|| Masuk reducer"
        );
        
        return{
            ...state,
            BankName    : action.payload.targerTransfer,
            AccountName : action.payload.bankNameVal,
            AccountNo   : action.payload.rekeningVal,
            loading     : false
        }
        default:
        return state;
    }
}

export default dataTransfer;