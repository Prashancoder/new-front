import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./component/layout/Navbar/Navbar.js";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import axios from "axios";
import Payment from './components/Payment/Payment';
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct";
import OrderList from "./component/Admin/OrderList";
import ProcessOrder from "./component/Admin/ProcessOrder";
import UsersList from "./component/Admin/UsersList";
import UpdateUser from "./component/Admin/UpdateUser";
import UserOptions from "./component/layout/Header/UserOptions";
import ProductReviews from "./component/Admin/ProductReviews";
import Contact from "./component/layout/Contact/Contact";
import About from "./component/layout/About/About";
import NotFound from "./component/layout/Not Found/NotFound";
import Services from "./component/Services/Services";
import ServiceList from "./component/Admin/ServiceList";
import NewService from "./component/Admin/NewService";
// import ContactList from "./component/Admin/ContactList";
import Messages from "./component/Admin/Messages";
import UpdateService from "./component/Admin/UpdateService";
import TermsAndConditions from "./pages/policies/TermsAndConditions";
import PrivacyPolicy from "./pages/policies/PrivacyPolicy";
import RefundPolicy from "./pages/policies/RefundPolicy";
import NumerologyCalculator from "./pages/NumerologyCalculator";
import BookAppointment from "./component/Appointment/BookAppointment";
import MyAppointments from "./component/Appointment/BookAppointment";
import AdminAppointments from "./component/Admin/AdminAppointments";







function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  React.useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/terms" element={<TermsAndConditions />} />
        <Route exact path="/privacy" element={<PrivacyPolicy />} />
        <Route exact path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/numerology" element={<NumerologyCalculator />} />
        <Route exact path="/book-appointment" element={<BookAppointment />} />

        <Route exact path="/account" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />

        <Route exact path="/me/update" element={
          <ProtectedRoute>
            <UpdateProfile />
          </ProtectedRoute>
        } />

        <Route exact path="/password/update" element={
          <ProtectedRoute>
            <UpdatePassword />
          </ProtectedRoute>
        } />

        <Route exact path="/password/forgot" element={<ForgotPassword />} />
        <Route exact path="/password/reset/:token" element={<ResetPassword />} />
        <Route exact path="/login" element={<LoginSignUp />} />
        <Route exact path="/cart" element={<Cart />} />

        <Route exact path="/shipping" element={
          <ProtectedRoute>
            <Shipping />
          </ProtectedRoute>
        } />

        <Route exact path="/success" element={
          <ProtectedRoute>
            <OrderSuccess />
          </ProtectedRoute>
        } />

        <Route exact path="/orders" element={
          <ProtectedRoute>
            <MyOrders />
          </ProtectedRoute>
        } />

        <Route exact path="/appointments" element={
          <ProtectedRoute>
            <MyAppointments />
          </ProtectedRoute>
        } />

        <Route exact path="/order/confirm" element={
          <ProtectedRoute>
            <ConfirmOrder />
          </ProtectedRoute>
        } />

        <Route exact path="/process/payment" element={
          <ProtectedRoute>
            <Payment />
          </ProtectedRoute>
        } />

        <Route exact path="/order/:id" element={
          <ProtectedRoute>
            <OrderDetails />
          </ProtectedRoute>
        } />

        <Route exact path="/admin/dashboard" element={
          <ProtectedRoute isAdmin={true}>
            <Dashboard />
          </ProtectedRoute>
        } />

        <Route exact path="/admin/products" element={
          <ProtectedRoute isAdmin={true}>
            <ProductList />
          </ProtectedRoute>
        } />

        <Route exact path="/admin/product" element={
          <ProtectedRoute isAdmin={true}>
            <NewProduct />
          </ProtectedRoute>
        } />

        <Route exact path="/admin/product/:id" element={
          <ProtectedRoute isAdmin={true}>
            <UpdateProduct />
          </ProtectedRoute>
        } />

        <Route exact path="/admin/orders" element={
          <ProtectedRoute isAdmin={true}>
            <OrderList />
          </ProtectedRoute>
        } />

        <Route exact path="/admin/appointments" element={
            <AdminAppointments />
         
        } />

        <Route exact path="/admin/order/:id" element={
          <ProtectedRoute isAdmin={true}>
            <ProcessOrder />
          </ProtectedRoute>
        } />

        <Route exact path="/admin/users" element={
          <ProtectedRoute isAdmin={true}>
            <UsersList />
          </ProtectedRoute>
        } />

        <Route exact path="/admin/user/:id" element={
          <ProtectedRoute isAdmin={true}>
            <UpdateUser />
          </ProtectedRoute>
        } />

        <Route exact path="/admin/reviews" element={
          <ProtectedRoute isAdmin={true}>
            <ProductReviews />
          </ProtectedRoute>
        } />

        <Route exact path="/admin/services" element={
          <ProtectedRoute isAdmin={true}>
            <ServiceList />
          </ProtectedRoute>
        } />

        <Route exact path="/admin/service" element={
          <ProtectedRoute isAdmin={true}>
            <NewService />
          </ProtectedRoute>
        } />

        <Route exact path="/admin/service/:id" element={
          <ProtectedRoute isAdmin={true}>
            <UpdateService />
          </ProtectedRoute>
        } />

        <Route exact path="/admin/messages" element={
          <ProtectedRoute isAdmin={true}>
            {/* <ContactList /> */}
            <Messages />
          </ProtectedRoute>
        } />

        <Route path="*" element={window.location.pathname === "/process/payment" ? null : <NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
