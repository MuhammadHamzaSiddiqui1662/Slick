import MainIcon from './../assets/icons/Home.svg';
const HeadLogo = (props) => {
    return(
        <div className='head-logo'>
            <img src={MainIcon} alt="Main Icon" className='main-icon'/>
            <h1>Slick</h1>
        </div>
    )
}
export default HeadLogo;