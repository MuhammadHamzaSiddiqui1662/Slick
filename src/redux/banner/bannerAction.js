import axios from 'axios';
import { closeModal } from './../modal/modalAction';

export const GET_BANNERS = 'GET_BANNERS';
export const ADD_BANNERS = 'ADD_BANNERS';
export const INC_BANNER = 'INC_BANNER';
export const UPDATE_BANNERS = 'UPDATE_BANNERS';
export const DELETE_BANNERS = 'DELETE_BANNERS';
export const SET_BANNERS = 'SET_BANNERS';
export const RE_SET_BANNERS = 'RE_SET_BANNERS';

export const setBanners = banners => {
    return {
        type: SET_BANNERS,
        payload: banners
    };
};
export const reSetBanners = banner => {
    return {
        type: RE_SET_BANNERS,
        payload: banner
    };
};
export const incBanner = banner => {
    return {
        type: INC_BANNER,
        payload: banner
    };
};
export const getBanners = () => {
    return dispatch => axios.get('https://internship-slick-api.herokuapp.com/api/banners')
        .then(res => dispatch(setBanners(res.data.data)))
        .catch(err=>console.log(err))
}
export const deleteBanner = (banners, id) => {
    return dispatch => axios.delete('https://internship-slick-api.herokuapp.com/api/banners?id='+id)
    .then(res => dispatch(setBanners(banners.filter(banner=>banner._id!=id))))
    .catch(err=>console.log(err))
}
export const addBanner = banner => {
    return dispatch => axios.post('https://internship-slick-api.herokuapp.com/api/banners', banner)
    .then(res => {
        dispatch(incBanner(res.data.data));
        dispatch(closeModal());
    })
    .catch(err=>console.log(err))
}
export const updateBanner = (banner, id) => {
    return dispatch => axios.put('https://internship-slick-api.herokuapp.com/api/banners/'+id, banner)
        .then(res => {
            dispatch(getBanners());
            dispatch(closeModal());
        })
        .catch(err=>console.log(err))
}