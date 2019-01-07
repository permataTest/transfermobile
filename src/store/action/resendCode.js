import axios from 'axios';
import * as actionTypes from './actionTypes';

export const getCodeStart = () => {
    console.log("Masuk get kode start");
    return{
        type: actionTypes.FETCH_RESENDCODE_START
    }
}

export const getCodeSuccess = (dataCode) => {
    console.log("Mengambil data Backend");
    return{
        type: actionTypes.FETCH_RESENDCODE_SUCCESS,
        payload: dataCode
    }
}

export const getCodeFail = (err) => {
    console.log("Data error diambil");
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
            console.log(result)
            dispatch(getCodeSuccess(result.data));
            
        }).catch((err) => {
            console.log(err);
            dispatch(getCodeFail(err.result))
        });
    }
}