import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Payment() {
  const navigate = useNavigate();
  const location = useLocation();
  const booking = location.state || {};
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePlaceOrder = () => {
    if (!paymentMethod) {
      alert("Please select a payment method!");
      return;
    }

    const services = [
      {
        name: booking.serviceType,
        price: booking.price * (booking.quantity || 1),
        quantity: booking.quantity || 1,
        unit: booking.unit,
      },
    ];

    const receiptData = {
      orderId: booking.orderId,
      paymentId: "PMT-" + Math.floor(Math.random() * 100000),
      date: new Date().toLocaleDateString("en-US"),
      services,
      status: "Paid",
    };

    // Save to history
    const existingHistory = JSON.parse(localStorage.getItem("bookingHistory")) || [];
    localStorage.setItem("bookingHistory", JSON.stringify([...existingHistory, receiptData]));

    navigate("/receipt", { state: receiptData });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-blue-50 px-4 py-8 relative">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 p-2 rounded-full hover:bg-gray-200 transition z-20 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-500 mb-8 text-center">
        Payment
      </h1>

      <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-6 space-y-6">
        <div className="flex flex-col">
          <label htmlFor="payment" className="text-gray-700 font-medium text-sm sm:text-base mb-2">
            Payment Method
          </label>

          <select
            id="payment"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="border border-blue-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700"
          >
            <option value="">Select payment method</option>
            <option value="GCash">GCash</option>
            <option value="PayPal">PayPal</option>
            <option value="Card">Credit / Debit Card</option>
          </select>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handlePlaceOrder}
            className="w-50 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-full text-sm sm:text-base font-medium transition cursor-pointer"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
