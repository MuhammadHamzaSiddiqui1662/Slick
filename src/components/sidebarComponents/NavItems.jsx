import { Link } from 'react-router-dom';
const NavItems = ({logo, name}) => {
    return(
        <Link to={'/'+name}>
            <li className="nav-items"><img className="nav-logo" src={logo} alt="Home Link"/>{name}</li>
        </Link>
    )
}
export default NavItems;