import CoinIcon from './../../assets/icons/Coin.svg';
const ProductCard = ({id, name, category, image, price}) => {
    return(
        <div className='home-product-card'>
            <figure>
                <img src={image} alt={name} />
                <div className="price-tag">
                    <img className='coin-icon' src={CoinIcon} alt="CoinIcon" />
                    {price}
                </div>
            </figure>
            <figcaption>
                <p className="category">{String(category.name).toUpperCase()}</p>
                <p className="product-name">{name}</p>
            </figcaption>
        </div>
    )
}
export default ProductCard;