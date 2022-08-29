import {BrowserRouter,Route,Routes} from 'react-router-dom'
import UserLogin from './User/UserLogin';
import DashBoard from './User/DashBoard';
import AccountSettings from './User/AccountSettings';
import CreateAdmin from './Admin/CreateAdmin';
import ManageUsers from './Admin/ManageUsers';
import AdminLogin from './Admin/AdminLogin';
import Home from './Home';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/user-login' element={<UserLogin></UserLogin>}></Route>
              <Route path='/admin-login' element={<AdminLogin></AdminLogin>}></Route>
              <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
              <Route path='/setting' element={<AccountSettings></AccountSettings>}></Route>
              <Route path='/create-admin' element={<CreateAdmin></CreateAdmin>}></Route>
              <Route path='/manage-user' element={<ManageUsers></ManageUsers>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
