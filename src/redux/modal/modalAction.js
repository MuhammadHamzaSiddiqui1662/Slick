export const SHOW_MODAL = 'SHOW_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const TOOGLE_MODAL = 'TOOGLE_MODAL';

export const showModal = payload => {
    return {
        type: SHOW_MODAL,
        payload: payload
    };
};
export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
};