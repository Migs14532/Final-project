import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Loading from "./components/Loading";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import History from "./components/History";
import BookingLaundry from "./components/BookingLaundry";
import Payment from "./components/Payment";
import OrderDetails from "./components/OrderDetails";
import Receipt from "./components/Receipt";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Screens */}
        <Route path="/" element={<Loading />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Main App Screens */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
        <Route path="/booking-laundry" element={<BookingLaundry />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order-details" element={<OrderDetails />} />
        <Route path="/receipt" element={<Receipt />} />
      </Routes>
    </Router>
  );
}
