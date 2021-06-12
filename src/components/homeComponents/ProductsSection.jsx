import { useSelector, useDispatch } from 'react-redux';
import {useEffect} from 'react';
import ProductCard from './ProductCard';
import {getProducts} from './../../redux/product/productAction';

const ProductsSection = props => {
    const dispatch = useDispatch();
    const products = useSelector((state)=>state.product.products);
    console.log(products,'use')
    useEffect(()=>{
        dispatch(getProducts())
    },[])
    return(
        <div className='home-products-section'>
            {products.map(({id, image, name, price, category})=>
                <ProductCard key={id} id={id} image={image} name={name} category={category} price={price} />
            )}
        </div>
    )
}
export default ProductsSection;