import NotificationLogo from './../../assets/icons/NotificationBox.svg';
const Header = props => {
    return(
        <div className='header'>
            <div>
                <p className='home-head-p1'>Hey Awesome,</p>
                <p className='home-head-p2'>Welcome Back...</p>
            </div>
            <div className='notification-box'>
                <img src={NotificationLogo} alt="Notification Logo" />
            </div>
        </div>
    )
}
export default Header;