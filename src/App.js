
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Reviews from './Pages/Home/Reviews/Reviews';
import Login from './Pages/Login/Login/Login';
import PortFolio from './Pages/PortFolio/PortFolio';
import Purchase from './Pages/Purches/Purchase';

import Navber from './Pages/Shared/Navber/Navber';


function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/purchase/:_id" element={<Purchase />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/portFolio" element={<PortFolio />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/login" element={<Login />}></Route>


      </Routes>
    </div>
  );
}

export default App;
