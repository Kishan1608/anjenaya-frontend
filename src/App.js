import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './component/Layout/Layout';
import Register from './component/Register/Register';
import Login from './component/Login/Login';
import { UserContextProvider } from './context/UserContextProvider';
import axios from 'axios';

axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/' element={<Layout />} />
        </Routes>   
      </BrowserRouter>
    </UserContextProvider> 
  );
}

export default App;
