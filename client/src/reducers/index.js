import { combineReducers } from 'redux';
import pricingReducer from './pricingReducer';

export default combineReducers({
    tier: pricingReducer
});