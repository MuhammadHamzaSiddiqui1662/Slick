import HeadLogo from './../components/sidebarComponents/HeadLogo';
import NavList from './../components/sidebarComponents/NavList';
import ProBox from '../components/sidebarComponents/ProBox';

const SideBarLeft = (props) => {
    return(
        // <div className='fixed-div'>
            <div className='side-bar-left'>
                <HeadLogo />
                <NavList />
                <ProBox />
            </div>
        // </div>
    )
}
export default SideBarLeft;