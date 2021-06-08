import CoinIcon from './../../assets/icons/Coin.svg';
const ProductCard = ({name, category, image, price}) => {
    return(
        <div className='home-product-card'>
            <figure>
                <img src={image} alt={name} />
                <div className="price-tag">
                    <img src={CoinIcon} alt="CoinIcon" />
                    {price}
                </div>
            </figure>
            <figcaption>
                <p className="category">{category}</p>
                <p className="product-name">{name}</p>
            </figcaption>
        </div>
    )
}
export default ProductCard;