import axios from 'axios';
import * as actionTypes from './actionTypes';

export const getDetailStart = () => {
    return{
        type: actionTypes.FETCH_DETAIL_START
    }
}

export const getDetailSuccess = (dataDetail) => {
    return{
        type: actionTypes.FETCH_DETAIL_SUCCESS,
        payload: dataDetail
    }
}

export const getDetailFail = (err) => {
    return{
        type: actionTypes.FETCH_DETAIL_FAIL,
        payload : err
    }
}

export const getDetail = () => {
    return (dispatch) => {
        dispatch(getDetailStart());
        axios({
            method: 'get',
            url:'https://permata-react.firebaseio.com/.json'
        })
        .then((result) => {
            dispatch(getDetailSuccess(result.data));
        }).catch((err) => {
            dispatch(getDetailFail(err.result))
        });
    }
}