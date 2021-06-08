import { Link } from 'react-router-dom';
const NavItems = ({logo, name}) => {
    return(
        <Link to={'/Management/'+name}>
            <li className="management-nav-items">{name}</li>
        </Link>
    )
}
export default NavItems;