import ProductListItem from './ProductListItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, deleteProduct, ADD_PRODUCT, UPDATE_PRODUCT } from './../../redux/product/productAction';
import { showModal } from './../../redux/modal/modalAction';
import AddIcon from './../../assets/icons/Add.svg';

const ProductsList = () => {
    const products = useSelector(state=>state.product.products)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProducts());
    },[])
    const addProduct = () => {
        dispatch(showModal({type: ADD_PRODUCT}))
    }
    const onDelete = id => {
        dispatch(deleteProduct(products, id))
    }
    const onUpdate = payload => {
        dispatch(showModal({type: UPDATE_PRODUCT, payload: payload}))
    }
    return(
        <div className='management-product-list'>
            <button className='product-add-button add-button' onClick={addProduct} >
                <img src={AddIcon} alt="AddIcon"/>
                Add New
            </button>
            <div className="product-list-header">
                <div className="product-extra"></div>
                <div className="product-text">
                    <p className="product-category col-head">CATEGORY</p>
                    <p className="product-name col-head">NAME</p>
                    <p className="product-price col-head">PRICE</p>
                </div>
                <div className="product-extra-2"></div>
            </div>
            <div className="product-list-content">
                <ul className='management-content-list'>
                    {products.map(({_id, image, name, price, category})=>
                        <ProductListItem key={_id} id={_id} image={image} name={name} category={category} price={price} onUpdate={onUpdate} onDelete={onDelete} />
                    )}
                </ul>
            </div>
        </div>
    )
}
export default ProductsList;