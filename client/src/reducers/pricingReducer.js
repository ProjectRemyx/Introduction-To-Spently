import { GET_TIERS } from '../actions/types';

const initialState = {
    tiers: [
        { id: 1, "title": "STARTER", "description": "Test", "price": "$0.00" },
        { id: 2, "title": "ESSENTIAL", "description": "Test", "price": "99.99" },
        { id: 3, "title": "GROWTH", "description": "Test", "price": "199.99" },
        { id: 4, "title": "PREMIUM", "description": "Test", "price": "399.99" },
    ]
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_TIERS:
            return{
                ...state
            }
        default:
            return state;
    }
}