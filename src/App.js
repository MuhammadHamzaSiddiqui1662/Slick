import {BrowserRouter} from 'react-router-dom';
import SideBarLeft from './containers/SideBarLeft';
import Dashboard from './containers/Dashboard';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBarLeft />
        <Dashboard />
      </BrowserRouter>
    </div>
  );
}

export default App;
