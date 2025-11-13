import React from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function History() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center bg-blue-50 px-4 py-8 relative">
      {/* Back Button */}
      <button
        onClick={() => navigate("/dashboard")}
        className="absolute top-4 left-4 p-2 rounded-full hover:bg-gray-300 transition cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700 hover:text-gray-900 transition" />
      </button>

      <h1 className="text-xl sm:text-2xl font-bold text-blue-500 mb-8 text-center">
        History
      </h1>

      <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-4 sm:p-6">
        <div className="flex justify-between items-center border-b border-gray-200 pb-3 mb-3">
          <p className="text-gray-700 font-medium text-sm sm:text-base">
            Order ID
          </p>
          <button className="text-blue-600 text-sm sm:text-base font-medium hover:underline">
            View Details
          </button>
        </div>

        <p className="text-gray-400 text-sm italic text-center">
          No orders yet.
        </p>
      </div>
    </div>
  );
}
