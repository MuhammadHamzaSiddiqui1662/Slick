import NavList from './NavList';
import BannersList from './BannersList';
import ProductsList from './ProductsList';
import {useEffect} from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import AddIcon from './../../assets/icons/Add.svg';
const SubWindow = () => {
    const history = useHistory();
    useEffect(()=>{
        if(history.location.pathname=='/Management')
            history.push('/Management/managebanners');
    },[history.location.pathname])
    return(
        <div className="management-sub-window">
            <div className="window-sub-header">
                <NavList />
            </div>
            <div className="management-content">
                <Switch>
                    <Route path='/Management/managebanners' component={BannersList} />
                    <Route path='/Management/manageproducts' component={ProductsList} />
                </Switch>
            </div>
        </div>
    )
}
export default SubWindow;