import axios from 'axios';
import { GET_TIERS, TIERS_LOADING } from './types';

export const getTiers = () => dispatch => {
    dispatch(setTiersLoading());
    axios
        .get('/api/pricing')
        .then(res => 
            dispatch({
                type: GET_TIERS, 
                payload: res.data
            })
        )
};

export const  setTiersLoading = () => {
    return {
        type: TIERS_LOADING
    };
};
