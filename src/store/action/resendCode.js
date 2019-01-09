import axios from 'axios';
import * as actionTypes from './actionTypes';

export const getCodeStart = () => {
    return{
        type: actionTypes.FETCH_RESENDCODE_START
    }
}

export const getCodeSuccess = (dataCode) => {
    return{
        type: actionTypes.FETCH_RESENDCODE_SUCCESS,
        payload: dataCode
    }
}

export const getCodeFail = (err) => {
    return{
        type: actionTypes.FETCH_RESENDCODE_FAIL,
        payload: err
    }
}

export const getCode = () => {
    return (dispatch) => {
        dispatch(getCodeStart());
        axios({
            method: 'get',
            url:'https://permata-react.firebaseio.com/verification.json'
        })
        .then((result) => {
            dispatch(getCodeSuccess(result.data));
            
        }).catch((err) => {
            dispatch(getCodeFail(err.result))
        });
    }
}


