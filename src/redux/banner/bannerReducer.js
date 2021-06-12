import { SET_BANNERS, INC_BANNER } from './bannerAction';

const initialState = {
    banners: []
};

const reducer = ( state = initialState, action ) => {
    let {type, payload} = action
    switch ( type ) {
        case SET_BANNERS:
            return {
                ...state,
                banners: payload
            };
        case INC_BANNER:
            return {
                ...state,
                banners: [...state.banners,payload]
            };
    }
    return state;
};

export default reducer;