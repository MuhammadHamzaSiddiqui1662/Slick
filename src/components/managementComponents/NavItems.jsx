import { Link } from 'react-router-dom';
const NavItems = ({logo, name}) => {
    let url = name.toLowerCase().replace(/\s/g, '')
    return(
        <Link to={'/Management/'+url}>
            <li className="management-nav-items">{name}</li>
        </Link>
    )
}
export default NavItems;