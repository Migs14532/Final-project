import React, { useState, useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function OrderDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const booking = location.state || {};

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (booking.price && booking.quantity) {
      setTotalPrice(booking.price * booking.quantity);
    } else if (booking.price) {
      setTotalPrice(booking.price);
    } else {
      setTotalPrice(0);
    }
  }, [booking]);

  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    const date = new Date(dateStr);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  };

  const formatTime = (timeStr) => {
    if (!timeStr) return "N/A";
    const [hourStr, min] = timeStr.split(":");
    let hour = parseInt(hourStr, 10);
    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    return `${hour}:${min} ${ampm}`;
  };

  return (
    <div className="min-h-screen bg-blue-50 px-4 py-6 relative flex justify-center items-center">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 p-2 rounded-full hover:bg-gray-300 transition cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-md space-y-4 flex flex-col">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-500 mb-8 text-center">
          Order Details
        </h1>

        <div className="flex justify-between">
          <p className="text-gray-500 font-medium">Order ID:</p>
          <p className="font-semibold">{booking.orderId || "N/A"}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-gray-500 font-medium">Status:</p>
          <p className="font-semibold">{booking.status || "Pending"}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-gray-500 font-medium">Pickup Date:</p>
          <p className="font-semibold">{formatDate(booking.pickupDate)}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-gray-500 font-medium">Pickup Time:</p>
          <p className="font-semibold">{formatTime(booking.pickupTime)}</p>
        </div>

        <div className="border-t border-gray-200 pt-3">
          <p className="text-gray-500 font-medium mb-2">Service Type:</p>
          <div className="flex justify-between">
            <p className="text-gray-700">
              {booking.serviceType} {booking.unit === "per kg" ? `${booking.quantity || 1} kg` : ""}
            </p>
            <p className="font-semibold">₱{totalPrice}</p>
          </div>
        </div>

        <div className="flex justify-between border-t border-gray-200 pt-3">
          <p className="text-gray-500 font-medium">Total:</p>
          <p className="font-semibold">₱{totalPrice}</p>
        </div>

        <div className="flex justify-center">
        <button
          onClick={() =>
            navigate("/payment", {
              state: {
                ...booking,
                totalPrice,
              },
            })
          }
          className="w-50 bg-blue-500 text-white py-3 rounded-full font-semibold hover:bg-blue-600 transition mt-4 cursor-pointer"
        >
          Proceed to Payment
        </button>
        </div>
      </div>
    </div>
  );
}
