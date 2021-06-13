import { NavLink } from 'react-router-dom';
const NavItems = ({logo, name}) => {
    return(
        <NavLink to={'/'+name}>
            <li className="nav-items"><img className="nav-logo" src={logo} alt="Home Link"/>{name}</li>
        </NavLink>
    )
}
export default NavItems;