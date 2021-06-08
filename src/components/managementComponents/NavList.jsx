import NavItems from './NavItems';
const NavList = () => {
    return(
        <ul className='management-nav-list'>
            <NavItems name="Manage Banners" />
            <NavItems name="Manage Products" />
        </ul>
    )
}
export default NavList;