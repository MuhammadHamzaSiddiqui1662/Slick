import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SideBarLeft from './containers/SideBarLeft';
import Dashboard from './containers/Dashboard';
import DropBack from './containers/DropBack';

import './App.css';

function App() {
  const { show, type } = useSelector(state=>state.modal.modal)
  return (
    <div className="App">
        <BrowserRouter>
          <SideBarLeft />
          <Dashboard />
        </BrowserRouter>
        {show && <DropBack type={type} />}
    </div>
  );
}

export default App;
