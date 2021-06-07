import HeadLogo from './../components/sidebarComponents/HeadLogo';
import NavList from './../components/sidebarComponents/NavList';
import ProBox from '../components/sidebarComponents/ProBox';

const SideBarLeft = (props) => {
    return(
        <div className='side-bar-left'>
            <HeadLogo />
            <NavList />
            <ProBox />
        </div>
    )
}
export default SideBarLeft;