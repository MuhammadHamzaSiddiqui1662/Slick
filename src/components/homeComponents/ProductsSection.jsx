import ProductCard from './ProductCard';
import ProductImage from './../../assets/icons/ProductImageDemo.png';

const ProductsSection = props => {
    return(
        <div className='home-products-section'>
            <ProductCard image={ProductImage} name='Overcome Basic Sweatshirt' category={'casual'.toUpperCase()} price='3222' />
            <ProductCard image={ProductImage} name='Overcome Basic Sweatshirt' category={'casual'.toUpperCase()} price='3222' />
            <ProductCard image={ProductImage} name='Overcome Basic Sweatshirt' category={'casual'.toUpperCase()} price='3222' />
            <ProductCard image={ProductImage} name='Overcome Basic Sweatshirt' category={'casual'.toUpperCase()} price='3222' />
            <ProductCard image={ProductImage} name='Overcome Basic Sweatshirt' category={'casual'.toUpperCase()} price='3222' />
            <ProductCard image={ProductImage} name='Overcome Basic Sweatshirt' category={'casual'.toUpperCase()} price='3222' />
            <ProductCard image={ProductImage} name='Overcome Basic Sweatshirt' category={'casual'.toUpperCase()} price='3222' />
            <ProductCard image={ProductImage} name='Overcome Basic Sweatshirt' category={'casual'.toUpperCase()} price='3222' />
            <ProductCard image={ProductImage} name='Overcome Basic Sweatshirt' category={'casual'.toUpperCase()} price='3222' />
        </div>
    )
}
export default ProductsSection;