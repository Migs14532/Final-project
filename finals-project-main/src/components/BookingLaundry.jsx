import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BookingLaundry() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    serviceType: "",
    pickupDate: "",
    pickupTime: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBook = () => {
    if (!form.serviceType || !form.pickupDate || !form.pickupTime) {
      alert("Please fill all fields before proceeding!");
      return;
    }

    // Generate Order ID
    const orderId = "ORD-" + Math.floor(Math.random() * 100000);

    // Navigate to OrderDetails with orderId
    navigate("/order-details", { state: { ...form, orderId } });
  };

  return (
    <div className="min-h-screen bg-blue-50 px-4 py-6 flex justify-center relative">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 p-2 rounded-full hover:bg-gray-300 transition cursor-pointer z-20"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <div className="flex flex-col items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-blue-500 mb-8 text-center">
            Booking Laundry
          </h1>

          <div className="w-full bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-md space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Service Type
              </label>
              <select
                name="serviceType"
                value={form.serviceType}
                onChange={handleChange}
                className="w-full border border-blue-300 rounded-lg px-4 py-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              >
                <option value="">Choose an option</option>
                <option value="Wash and Fold">Wash & Fold</option>
                <option value="Iron Only">Iron Only</option>
                <option value="Dry Cleaning">Dry Cleaning</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Pickup Date
              </label>
              <input
                type="date"
                name="pickupDate"
                value={form.pickupDate}
                onChange={handleChange}
                className="w-full border border-blue-300 rounded-lg px-4 py-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Pickup Time
              </label>
              <input
                type="time"
                name="pickupTime"
                value={form.pickupTime}
                onChange={handleChange}
                className="w-full border border-blue-300 rounded-lg px-4 py-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>

            <div className="flex justify-center mt-4">
              <button
                onClick={handleBook}
                className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
