"use client";
import { useState } from "react";
import {
  IdentificationIcon,
  PencilAltIcon,
  OfficeBuildingIcon,
  DocumentReportIcon,
  BriefcaseIcon,
} from "@heroicons/react/outline";

const services = [
  {
    title: "PAN CARD",
    icon: <IdentificationIcon className="h-10 w-10 text-indigo-600" />,
  },
  {
    title: "DIGITAL SIGNATURE",
    icon: <PencilAltIcon className="h-10 w-10 text-purple-600" />,
  },
  {
    title: "PF, ESI, P.TAX",
    icon: <OfficeBuildingIcon className="h-10 w-10 text-pink-600" />,
  },
  {
    title: "TRADE/FOOD LICENCE",
    icon: <BriefcaseIcon className="h-10 w-10 text-blue-600" />,
  },
  {
    title: "MSME PROJECT REPORT",
    icon: <DocumentReportIcon className="h-10 w-10 text-green-600" />,
  },
];

export default function OtherServices() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const openModal = (title) => {
    setSelectedService(title);
    setIsModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-6 py-12 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-indigo-300 rounded-full filter blur-3xl opacity-20 z-0 animate-float" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-pink-300 rounded-full filter blur-2xl opacity-20 z-0 animate-float" />

      {/* Heading */}
      <h1 className="relative z-10 text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 animate-fade-in-down mb-14">
        Other Services
      </h1>

      {/* Cards */}
      <div className="relative z-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => openModal(service.title)}
            className="cursor-pointer bg-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 p-6 rounded-2xl w-full max-w-xs border border-gray-200 hover:border-indigo-300"
          >
            <div className="flex flex-col items-center space-y-4">
              {service.icon}
              <h2 className="text-center text-lg font-semibold text-gray-800">
                {service.title}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-xl shadow-2xl w-80 text-center animate-fade-in-up">
            <h3 className="text-xl font-bold mb-2 text-gray-800">{selectedService}</h3>
            <p className="text-gray-600">🚧 We are creating something good!</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-5 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
