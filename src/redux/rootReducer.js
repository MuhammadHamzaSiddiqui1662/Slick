import { combineReducers } from 'redux';
import productReducer from './product/productReducer';
import bannerReducer from './banner/bannerReducer';
import modalReducer from './modal/modalReducer';
const rootReducer = combineReducers({
    product: productReducer,
    banner: bannerReducer,
    modal: modalReducer
});
export default rootReducer;