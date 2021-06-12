import { SHOW_MODAL, CLOSE_MODAL } from './modalAction';

const initialState = {
    modal: {
        show: false,
        type: ''
    }
};

const reducer = ( state = initialState, action ) => {
    let {type, payload} = action
    switch ( type ) {
        case SHOW_MODAL:
            return {
                ...state,
                modal: {
                    show: true,
                    type: payload
                }
            };
        case CLOSE_MODAL:
            return {
                ...state,
                modal: initialState.modal
            };
    }
    return state;
};
export default reducer;