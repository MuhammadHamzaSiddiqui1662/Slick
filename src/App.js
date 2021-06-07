import SideBarLeft from './containers/SideBarLeft';
import Home from './containers/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <SideBarLeft />
      <BrowserRouter>
        <Switch>
          <Route exact to='/' component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
