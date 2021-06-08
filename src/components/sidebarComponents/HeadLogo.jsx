import SlickLogo from './../../assets/icons/SlickLogo.svg';
const HeadLogo = (props) => {
    return(
        <div className='head-logo'>
            <img src={SlickLogo} alt="Main Icon" className='main-icon'/>
            <p>Slick</p>
        </div>
    )
}
export default HeadLogo;