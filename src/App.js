import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import ContactUs from './Pages/ContactUs/ContactUs';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Reviews from './Pages/Reviews/Reviews';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import NotFound from './Pages/Shared/NotFound';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Purchase from './Pages/Products/Purchase';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddaReview from './Pages/Dashboard/AddaReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import Users from './Pages/Dashboard/Users';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddProduct from './Pages/Dashboard/AddProduct';
import Payment from './Pages/Dashboard/Payment';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import Blogs from './Pages/Blogs/Blogs';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/products/:productId' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='/dashboard/addReview' element={<AddaReview></AddaReview>}></Route>
          <Route path='/dashboard/myProfile' element={<MyProfile></MyProfile>}></Route>
          <Route path='/dashboard/payment/:id' element={<Payment></Payment>}></Route>
          <Route path='/dashboard/users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='/dashboard/addProduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='/dashboard/manageProducts' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
        </Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/contactUs' element={<ContactUs></ContactUs>}></Route>
        <Route path='/myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
