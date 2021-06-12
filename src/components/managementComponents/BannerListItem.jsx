import LinkLogo from './../../assets/icons/Link.svg';
import EditLogo from './../../assets/icons/EditFilled.svg';
import DeleteLogo from './../../assets/icons/DeleteFilled.svg';
const BannerListItem = ({id, link, onUpdate, onDelete}) => {
    return(
        <li className="banner-list-item">
            <div className="banner-image">
                <img src={link} alt="name" />
            </div>
            <div className="banner-url">
                <img src={LinkLogo} alt="LinkIcon" />
                <p>{link}</p>
            </div>
            <div className="link-button-section">
                <img src={EditLogo} alt="Edit Button" onClick={()=>onUpdate({id, link})} />
                <img src={DeleteLogo} alt="Delete Button" onClick={()=>onDelete(id)}/>
            </div>
        </li>
    )
}
export default BannerListItem;