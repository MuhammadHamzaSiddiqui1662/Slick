import NavItems from './NavItems';
import HomeLogo from './../../assets/icons/Home.svg';
import AnalyticsLogo from './../../assets/icons/Analytics.svg';
import ProductsLogo from './../../assets/icons/Products.svg';
import ManagementLogo from './../../assets/icons/Management.svg';
const NavList = () => {
    return(
        <ul className='nav-list'>
            <NavItems logo={HomeLogo} name="Home" />
            <NavItems logo={AnalyticsLogo} name="Analytics" />
            <NavItems logo={ProductsLogo} name="Products" />
            <NavItems logo={ManagementLogo} name="Management" />
        </ul>
    )
}
export default NavList;