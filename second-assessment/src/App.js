import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage'
import Signin from './Signin';
import Signup from './Signup';
import DashBoard from './DashBoard'
import Products from './Products';
import { useState } from "react";

function App() {
  const [userN, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [flag, setFlag] = useState(false);

  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage ></HomePage>}></Route>
          <Route path='/signin' element={<Signin></Signin>} ></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
          <Route path='/products' element={<Products></Products>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
