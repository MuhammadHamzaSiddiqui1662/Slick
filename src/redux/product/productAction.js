import axios from 'axios';
import { closeModal } from './../modal/modalAction';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const INC_PRODUCT = 'INC_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_PRODUCT = 'SET_PRODUCT';
export const RE_SET_PRODUCT = 'RE_SET_PRODUCT';

export const setProduct = products => {
    return {
        type: SET_PRODUCT,
        payload: products
    };
};
export const reSetProduct = product => {
    return {
        type: RE_SET_PRODUCT,
        payload: product
    };
};
export const incProduct = product => {
    return {
        type: INC_PRODUCT,
        payload: product
    };
};
export const setCategories = categories => {
    return {
        type: SET_CATEGORIES,
        payload: categories
    };
};
export const getProducts = () => {
    return dispatch => axios.get('https://internship-slick-api.herokuapp.com/api/products')
        .then(res => dispatch(setProduct(res.data.data)))
        .catch(err=>console.log(err))
}
export const deleteProduct = (products, id) => {
    return dispatch => axios.delete('https://internship-slick-api.herokuapp.com/api/products?id='+id)
        .then(res => dispatch(setProduct(products.filter(product=>product._id!=id))))
        .catch(err=>console.log(err))
}
export const addProduct = product => {
    return dispatch => axios.post('https://internship-slick-api.herokuapp.com/api/products', product)
        .then(res => {
            dispatch(incProduct(res.data.data));
            dispatch(closeModal());
        })
        .catch(err=>console.log(err))
}
export const updateProduct = (product, id) => {
    return dispatch => axios.put('https://internship-slick-api.herokuapp.comapi/products/'+id, product)
        .then(res => {
            dispatch(getProducts());
            dispatch(closeModal());
        })
        .catch(err=>console.log(err))
}
export const getCategories = () => {
    return dispatch => axios.get('https://internship-slick-api.herokuapp.com/api/products/categories')
        .then(res => dispatch(setCategories(res.data.data)))
        .catch(err=>console.log(err))
}