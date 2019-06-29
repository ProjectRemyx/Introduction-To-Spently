import { GET_TIERS, TIERS_LOADING } from '../actions/types';

const initialState = {
    tiers: [],
    loading: false
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_TIERS:
            return{
                ...state,
                tiers: action.payload,
                loading: false
            }
        case TIERS_LOADING:
            return{
                ...state,
                loading: true
            }
        default:
            return state;
    }
}