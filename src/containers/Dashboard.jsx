import {Route, Switch} from 'react-router-dom';
import './style.css'
import Home from './Home';
import Management from './Management';

const Dashboard = ({Page}) => {
    return(
        <div className='dashboard'>
                <Switch>
                    <Route path='/Management' component={Management}/>
                    <Route path='/' component={Home}/>
                </Switch>
        </div>
    )
}
export default Dashboard;