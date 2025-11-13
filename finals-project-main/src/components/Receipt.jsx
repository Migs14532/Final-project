import React from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Receipt() {
  const navigate = useNavigate();
  const location = useLocation();
  const receipt = location.state || {};
  const services = receipt.services || [];
  const totalCost = services.reduce((sum, s) => sum + (s.price || 0), 0);

  return (
    <div className="min-h-screen bg-blue-50 px-4 py-8 flex flex-col items-center relative">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 p-2 rounded-full hover:bg-gray-200 transition z-20 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-500 mb-8 text-center">Receipt</h1>

      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md space-y-4">
        <div className="flex justify-between">
          <p className="text-gray-500 font-medium">Order ID:</p>
          <p className="font-semibold">{receipt.orderId || "N/A"}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-gray-500 font-medium">Payment ID:</p>
          <p className="font-semibold">{receipt.paymentId || "N/A"}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-gray-500 font-medium">Date:</p>
          <p className="font-semibold">{receipt.date || "N/A"}</p>
        </div>

        <div className="border-t border-gray-200 pt-3">
          <p className="text-gray-500 font-medium mb-2">Service Type:</p>
          {services.length > 0 ? (
            services.map((service, index) => (
              <div key={index} className="flex justify-between">
                <p className="text-gray-700">
                  {service.name} {service.unit === "per kg" ? `${service.quantity} kg` : ""}
                </p>
                <p className="font-semibold">₱{service.price}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-400 italic">No service selected</p>
          )}
        </div>

        <div className="flex justify-between border-t border-gray-200 pt-3">
          <p className="text-gray-500 font-medium">Total Cost:</p>
          <p className="font-semibold">₱{totalCost}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-gray-500 font-medium">Status:</p>
          <p className="font-semibold text-green-600">{receipt.status || "Pending"}</p>
        </div>

        <div className="flex justify-center">
        <button
          onClick={() => navigate("/dashboard")}
          className="w-50 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full font-semibold mt-4 transition cursor-pointer"
        >
          Done
        </button>
        </div>
      </div>
    </div>
  );
}
