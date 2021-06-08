import NotificationLogo from './../../assets/icons/NotificationBox.svg';
import './style.css'
const Header = props => {
    return(
        <div className='header'>
            <div>
                <p className='management-head'>Management</p>
            </div>
            <div className='notification-box'>
                <img src={NotificationLogo} alt="Notification Logo" />
            </div>
        </div>
    )
}
export default Header;