
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import RequireAuth from './Pages/Login/Login/RequireAuth';
import Signup from './Pages/Login/Signup';

import MyReview from './Pages/MyReview/MyReview';
import PortFolio from './Pages/PortFolio/PortFolio';
import Purchase from './Pages/Purches/Purchase';
import Footer from './Pages/Shared/Footer/Footer';

import Navber from './Pages/Shared/Navber/Navber';
import NotFound from './Pages/Shared/NotFound';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyOrders from './Pages/DashBoard/MyOrders';
import MyReviews from './Pages/DashBoard/MyReviews';
import AllUsers from './Pages/DashBoard/AllUsers';







function App() {
  return (
    <div className='h-screen'>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/product/:productId" element={
          <RequireAuth><Purchase /></RequireAuth>
        }></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/portFolio" element={<PortFolio />}></Route>
        <Route path="/review/:reviewId" element={
          <RequireAuth>

            <MyReview />
          </RequireAuth>

        }></Route>
        <Route path="/dashboard" element={
          <RequireAuth>

            <DashBoard />
          </RequireAuth>

        }>

          <Route index element={<MyOrders />}></Route>
          <Route path="reviews" element={<MyReviews />}></Route>
          <Route path="allUsers" element={<AllUsers />}></Route>

        </Route>







        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="*" element={<NotFound></NotFound>} ></Route>


      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
