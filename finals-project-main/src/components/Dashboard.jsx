import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import popular1 from "../assets/popular1.png";
import popular2 from "../assets/popular2.png";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import history from "../assets/history.png";
import booking from "../assets/booking-laundry.png";
import profile from "../assets/profile.png";

export default function Dashboard() {
  const navigate = useNavigate();

  const [modalService, setModalService] = useState(null);
  const [seeAllModal, setSeeAllModal] = useState(null); // new state for See All modals

  // Data for popular services
  const popularServices = [
    { id: 1, name: "Wash & Fold", rating: 4.8, image: popular1, description: "Standard washing, drying, and neatly folding clothes.", price: "₱50 per kg" },
    { id: 2, name: "Ironing and Pressing", rating: 4.5, image: popular2, description: "Ironing or pressing clothes only, to remove wrinkles and make them look neat.", price: "₱30 per item" },
  ];

  // Data for services
  const services = [
    { id: 1, name: "Wash & Fold", icon: service1, description: "Standard washing, drying, and neatly folding clothes.", price: "₱50 per kg" },
    { id: 2, name: "Ironing & Pressing", icon: service2, description: "Ironing or pressing clothes only, to remove wrinkles and make them look neat.", price: "₱30 per item" },
    { id: 3, name: "Dry Cleaning", icon: service3, description: "Cleaning delicate or non-washable fabrics like suits, coats, and dresses using special solvents.", price: "₱150 per item" },
  ];

  // Bottom Navigation Links
  const bottomNav = [
    { id: 1, icon: history, label: "History", path: "/history" },
    { id: 2, icon: booking, label: "Booking Laundry", path: "/booking-laundry" },
    { id: 3, icon: profile, label: "Profile", path: "/profile" },
  ];

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col relative">
      {/* Fixed Back Button */}
      <button
        onClick={() => navigate("/login")}
        className="absolute top-4 left-4 p-2 rounded-full hover:bg-gray-300 transition cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center px-4 pb-24 pt-12 md:pt-16">
        {/* Popular Services */}
        <section className="w-full max-w-5xl mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
              Popular Services
            </h2>
            <button
              className="text-black text-sm sm:text-base font-medium hover:text-blue-500 cursor-pointer transition"
              onClick={() => setSeeAllModal({ type: "popular", data: popularServices })}
            >
              See all
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularServices.map((service) => (
              <div
                key={service.id}
                className="relative bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer"
                onClick={() => setModalService(service)}
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-40 sm:h-48 lg:h-56 object-cover"
                />
                <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full flex items-center gap-1 shadow">
                  <span className="text-sm font-semibold">{service.rating}</span>
                  <FaStar className="text-yellow-400 text-sm" />
                </div>
                <p className="text-center font-medium text-gray-700 py-2 text-sm sm:text-base">
                  {service.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="w-full max-w-5xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
              Services
            </h2>
            <button
              className="text-black text-sm sm:text-base font-medium hover:text-blue-500 cursor-pointer transition"
              onClick={() => setSeeAllModal({ type: "services", data: services })}
            >
              See all
            </button>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 place-items-center">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col items-center bg-white rounded-2xl p-4 hover:shadow-md transition cursor-pointer w-24 sm:w-28"
                onClick={() => setModalService(service)}
              >
                <img
                  src={service.icon}
                  alt={service.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 mb-2 object-contain"
                />
                <p className="text-sm sm:text-base font-medium text-gray-700 text-center">
                  {service.name}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white py-3 shadow-inner flex justify-around items-center md:rounded-t-2xl">
        {bottomNav.map((item) => (
          <button
            key={item.id}
            onClick={() => navigate(item.path)}
            className="flex flex-col items-center text-gray-700 cursor-pointer hover:text-blue-600 transition"
          >
            <img
              src={item.icon}
              alt={item.label}
              className="w-6 h-6 mb-1 object-contain"
            />
            <span className="text-xs sm:text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Individual Service Modal */}
      {modalService && (
        <div className="fixed inset-0 bg-blue-50 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full relative shadow-lg">
            <button
              onClick={() => setModalService(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black font-bold cursor-pointer"
            >
              ✕
            </button>
            <img
              src={modalService.image || modalService.icon}
              alt={modalService.name}
              className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{modalService.name}</h3>
            <p className="text-gray-600 mb-2">{modalService.description}</p>
            <p className="font-medium">{modalService.price}</p>
          </div>
        </div>
      )}

      {/* See All Modal */}
      {seeAllModal && (
        <div className="fixed inset-0 bg-blue-50 bg-opacity-50 flex justify-center items-center z-50 overflow-auto p-4">
          <div className="bg-white rounded-2xl p-6 max-w-3xl w-full relative shadow-lg">
            <button
              onClick={() => setSeeAllModal(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black font-bold cursor-pointer"
            >
              ✕
            </button>
            <h3 className="text-lg font-semibold mb-4">
              {seeAllModal.type === "popular" ? "All Popular Services" : "All Services"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {seeAllModal.data.map((service) => (
                <div
                  key={service.id}
                  className="flex flex-col items-center bg-blue-50 rounded-2xl p-4 hover:shadow-md transition cursor-pointer"
                  onClick={() => {
                    setModalService(service);
                    setSeeAllModal(null); // close see all when opening individual modal
                  }}
                >
                  <img
                    src={service.image || service.icon}
                    alt={service.name}
                    className="w-20 h-20 object-contain mb-2"
                  />
                  <p className="font-medium text-gray-700 text-center">{service.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
