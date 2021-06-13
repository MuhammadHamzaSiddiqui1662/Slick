import { NavLink, useHistory } from 'react-router-dom';
const NavItems = ({logo, name}) => {
    let url = name.toLowerCase().replace(/\s/g, '')
    let history = useHistory();
    return(
        <NavLink to={'/Management/'+url}>
            <li className="management-nav-items">{name}<div className={history.location.pathname==`/Management/${url}`?'underline':''}></div></li>
        </NavLink>
    )
}
export default NavItems;