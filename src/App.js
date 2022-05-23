
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import MyReview from './Pages/MyReview/MyReview';
import PortFolio from './Pages/PortFolio/PortFolio';
import Purchase from './Pages/Purches/Purchase';
import Footer from './Pages/Shared/Footer/Footer';

import Navber from './Pages/Shared/Navber/Navber';


function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/product/:productId" element={<Purchase />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/portFolio" element={<PortFolio />}></Route>
        <Route path="/review" element={<MyReview />}></Route>
        <Route path="/login" element={<Login />}></Route>


      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
