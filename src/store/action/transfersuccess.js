import * as actionTypes from './actionTypes';

export const getSuccessStart = () => {
    return{
    type: actionTypes.FETCH_SUCCESS_START
    }
}

export const getSuccessSuccess = (targerTransfer, bankNameVal, rekeningVal) => {
    console.log(targerTransfer, bankNameVal, rekeningVal, "|| action type");
    let payload = {targerTransfer, bankNameVal, rekeningVal}
    return{
        type: actionTypes.FETCH_SUCCESS_SUCCESS,
        payload: payload
    }
}

export const getOnAccountDetail = (targerTransfer, bankNameVal, rekeningVal) => {
    console.log(targerTransfer, bankNameVal, rekeningVal,"Masuk redux");
    return (dispatch) => {
        // dispatch(getSuccessStart());
        dispatch(getSuccessSuccess(targerTransfer, bankNameVal, rekeningVal));
    }
}