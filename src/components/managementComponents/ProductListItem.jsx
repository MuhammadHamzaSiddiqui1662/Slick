import CoinLogo from './../../assets/icons/Coin.svg';
import EditLogo from './../../assets/icons/EditFilled.svg';
import DeleteLogo from './../../assets/icons/DeleteFilled.svg';
const ProductListItem = ({id, name, category, price, image, onUpdate, onDelete}) => {
    return(
        <li className="product-list-item">
            <div className="product-image">
                <img src={image} alt="name" />
            </div>
            <div className="product-text">
                <p className="product-category">{category.name}</p>
                <p className="product-name">{name}</p>
                <p className="product-price">
                    <img className='coin-icon' src={CoinLogo} alt="Coin Icon" />
                    {price}
                </p>
            </div>
            <div className="link-button-section">
                <img src={EditLogo} alt="Edit Button" onClick={()=>onUpdate({id, name, category, price, image})} />
                <img src={DeleteLogo} alt="Delete Button" onClick={()=>onDelete(id)} />
            </div>
        </li>
    )
}
export default ProductListItem;