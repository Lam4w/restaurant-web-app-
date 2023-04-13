import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Order from "./pages/order/Order";
import OrderList from "./pages/orderList/OrderList";
import Login from "./pages/login/Login";
import Review from "./pages/review/Review";
import ReviewList from "./pages/reviewList/ReviewList";
import NewReview from "./pages/newReview/NewReview";
import { useSelector } from 'react-redux';

function App() {
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/login" element={isAuth ? <Home /> : <Login />} />
          <Route exact path="/" element={isAuth ? <Home /> : <Navigate to='/login'/>} />
          <Route path="/users" element={isAuth ? <UserList /> : <Navigate to='/login'/>} />
          <Route path="/user/:userId" element={isAuth ? <User /> : <Navigate to='/login'/>} />
          <Route path="/newUser" element={isAuth ? <NewUser /> : <Navigate to='/login'/>} /> 
          <Route path="/products" element={isAuth ? <ProductList /> : <Navigate to='/login'/>} />
          <Route path="/product/:productId" element={isAuth ? <Product /> : <Navigate to='/login'/>} />
          <Route path="/newproduct" element={isAuth ? <NewProduct /> : <Navigate to='/login'/>} />
          <Route path="/orders" element={isAuth ? <OrderList /> : <Navigate to='/login'/>} />
          <Route path="/order/:orderId" element={isAuth ? <Order /> : <Navigate to='/login'/>} />
      
          <Route path="/reviews" element={isAuth ? <ReviewList /> : <Navigate to='/login'/>} />
          <Route path="/review/:reviewId" element={isAuth ? <Review /> : <Navigate to='/login'/>} />
          <Route path="/newReview" element={isAuth ? <NewReview /> : <Navigate to='/login'/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
