import { SET_PRODUCT, SET_CATEGORIES, INC_PRODUCT } from './productAction';

const initialState = {
    products: [],
    categories: []
};

const reducer = ( state = initialState, action ) => {
    let {type, payload} = action
    switch ( type ) {
        case SET_PRODUCT:
            return {
                ...state,
                products: payload
            };
        case SET_CATEGORIES:
            return {
                ...state,
                categories: payload
            };
        case INC_PRODUCT:
            return {
                ...state,
                products: [...state.products,payload]
            };
    }
    return state;
};

export default reducer;