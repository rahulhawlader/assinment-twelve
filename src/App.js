
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import RequireAuth from './Pages/Login/Login/RequireAuth';
import Signup from './Pages/Login/Signup';

// import MyReview from './Pages/MyReview/MyReview';
// import PortFolio from './Pages/PortFolio/PortFolio';
import Purchase from './Pages/Purches/Purchase';
import Footer from './Pages/Shared/Footer/Footer';

import Navber from './Pages/Shared/Navber/Navber';
import NotFound from './Pages/Shared/NotFound';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyOrders from './Pages/DashBoard/MyOrders';
import MyReviews from './Pages/DashBoard/MyReviews';
import AllUsers from './Pages/DashBoard/AllUsers';
import RequireAdmin from './Pages/Login/Login/RequireAdmin';
import AddProduct from './Pages/DashBoard/AddProduct';
import ManageProducts from './Pages/DashBoard/ManageProducts';
import MyProfile from './Pages/My-Profile/MyProfile';
import AdMyProfile from './Pages/DashBoard/AdMyProfile';

import AllOrders from './Pages/DashBoard/AllOrders';
import Blog from './Pages/Blog/Blog';
import PortFolio from './Pages/PortFolio/PortFolio';








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

        <Route path="/myProfile" element={<MyProfile />}></Route>
        <Route path="/portfolio" element={<PortFolio />}></Route>
        <Route path="/blogs" element={<Blog />}></Route>
        {/* <Route path="/review/:reviewId" element={
          <RequireAuth>

            <MyReview />
          </RequireAuth>

        }></Route> */}
        <Route path="/dashboard" element={
          <RequireAuth>

            <DashBoard />
          </RequireAuth>

        }>

          <Route index element={<MyOrders />}></Route>
          <Route path="reviews" element={<MyReviews />}></Route>
          <Route path="addprofile" element={<AdMyProfile />}></Route>

          <Route path="allUsers" element={<RequireAdmin>
            <AllUsers />
          </RequireAdmin>}></Route>
          <Route path="addproduct" element={<RequireAdmin>
            <AddProduct />
          </RequireAdmin>}></Route>
          <Route path="manageproduct" element={<RequireAdmin>
            <ManageProducts />
          </RequireAdmin>}></Route>
          <Route path="allorders" element={<RequireAdmin>
            <AllOrders />
          </RequireAdmin>}></Route>

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
