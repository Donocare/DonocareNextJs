"use client";
import { useState } from "react";

const services = [
  {
    name: "GST Registration & Filing",
    href: "/gst-registration",
    gradient: "from-fuchsia-500 to-purple-600",
    isActive: true,
  },
  {
    name: "ITR Return",
    href: "/itr-return",
    gradient: "from-green-400 to-emerald-600",
    isActive: false,
  },
  {
    name: "TDS Return",
    href: "/tds-return",
    gradient: "from-yellow-400 to-orange-500",
    isActive: false,
  },
  {
    name: "Account Management",
    href: "/account-management",
    gradient: "from-sky-500 to-blue-600",
    isActive: true,
  },
  {
    name: "Other Services",
    href: "/other-services",
    gradient: "from-rose-500 to-red-600",
    isActive: true, // ❌ Not created yet
  },
  {
    name: "Talk with Experts",
    href: "/talk-to-experts",
    gradient: "from-cyan-500 to-indigo-500",
    isActive: false,
  },
];

export default function FinancialConsulting() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-200 via-pink-200 to-yellow-100 py-16 px-6">
      <h1 className="text-5xl font-extrabold text-center text-purple-800 mb-14 drop-shadow-lg animate-bounce">
        💼 Financial Consulting Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${service.gradient} text-white p-6 rounded-3xl shadow-2xl backdrop-blur-sm bg-opacity-90 hover:scale-105 transition duration-300 flex flex-col justify-between`}
          >
            <div>
              <h2 className="text-2xl font-bold mb-3 drop-shadow-md">
                {service.name}
              </h2>
              <p className="text-sm opacity-90">
                Click below to explore this service.
              </p>
            </div>

            <div className="mt-6">
              {service.isActive ? (
                <a href={service.href}>
                  <button className="w-full bg-white text-black font-semibold py-2 px-4 rounded-xl shadow hover:bg-yellow-100 hover:text-purple-700 transition duration-300">
                    🚀 Explore Service
                  </button>
                </a>
              ) : (
                <button
                  onClick={() => setShowModal(true)}
                  className="w-full bg-white text-black font-semibold py-2 px-4 rounded-xl shadow hover:bg-yellow-100 hover:text-purple-700 transition duration-300"
                >
                  🚧 Coming Soon
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center animate-fade-in-down">
            <div className="text-5xl mb-4 text-yellow-500">🚧</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              This page is under construction!
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              We’re working hard to bring this service online soon.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-xl transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Modal animation style */}
      <style jsx>{`
        .animate-fade-in-down {
          animation: fadeInDown 0.4s ease-out forwards;
        }

        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
