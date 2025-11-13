import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BookingLaundry() {
  const navigate = useNavigate();

  const servicesList = [
    { name: "Wash & Fold", price: 50, unit: "per kg" },
    { name: "Iron Only", price: 30, unit: "per item" },
    { name: "Dry Cleaning", price: 150, unit: "per item" },
  ];

  const [form, setForm] = useState({
    serviceType: "",
    price: 0,
    unit: "",
    quantity: 1,
    pickupDate: "",
    pickupTime: "",
  });

  const handleServiceChange = (e) => {
    const selectedService = servicesList.find(s => s.name === e.target.value);
    if (selectedService) {
      setForm({
        ...form,
        serviceType: selectedService.name,
        price: selectedService.price,
        unit: selectedService.unit,
        quantity: 1,
      });
    } else {
      setForm({ ...form, serviceType: "", price: 0, unit: "", quantity: 1 });
    }
  };

  const handleBook = () => {
    if (!form.serviceType || !form.pickupDate || !form.pickupTime) {
      alert("Please fill all fields!");
      return;
    }

    const orderId = "ORD-" + Math.floor(Math.random() * 100000);
    navigate("/order-details", { state: { ...form, orderId } });
  };

  return (
    <div className="min-h-screen bg-blue-50 px-4 py-6 flex justify-center relative">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 p-2 rounded-full hover:bg-gray-300 transition z-20 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-500 mb-8 text-center">
          Booking Laundry
        </h1>

        <div className="w-full bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-md space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Service Type</label>
            <select
              value={form.serviceType}
              onChange={handleServiceChange}
              className="w-full border border-blue-300 rounded-lg px-4 py-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            >
              <option value="">Choose an option</option>
              {servicesList.map((s, i) => (
                <option key={i} value={s.name}>
                  {s.name} ₱{s.price} {s.unit}
                </option>
              ))}
            </select>
          </div>

          {form.unit === "per kg" && (
            <div>
              <label className="block text-gray-700 font-medium mb-2">Quantity (kg)</label>
              <input
                type="number"
                min="1"
                value={form.quantity}
                onChange={(e) => setForm({ ...form, quantity: parseInt(e.target.value) || 1 })}
                className="w-full border border-blue-300 rounded-lg px-4 py-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
          )}

          <div>
            <label className="block text-gray-700 font-medium mb-2">Pickup Date</label>
            <input
              type="date"
              value={form.pickupDate}
              onChange={(e) => setForm({ ...form, pickupDate: e.target.value })}
              className="w-full border border-blue-300 rounded-lg px-4 py-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Pickup Time</label>
            <input
              type="time"
              value={form.pickupTime}
              onChange={(e) => setForm({ ...form, pickupTime: e.target.value })}
              className="w-full border border-blue-300 rounded-lg px-4 py-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={handleBook}
              className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition cursor-pointer"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
