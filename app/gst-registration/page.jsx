"use client";
import { useState } from "react";

export default function GstRegistration() {
  const [formData, setFormData] = useState({
    businessName: "",
    pan: "",
    email: "",
    mobile: "",
    address: "",
    state: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("✅ GST Registration Submitted Successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-6 py-10">
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full grid md:grid-cols-2 p-10 gap-8">
        
        {/* Left Side */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">GST Registration</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Register your business for GST with ease. Fill in the required details and submit the form to get started with your GST compliance.
          </p>
          <img
            src="/gst-illustration.svg"
            alt="GST Illustration"
            className="w-full mt-8 hidden md:block"
          />
        </div>

        {/* Right Side - Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {[
            { label: "Business Name", name: "businessName", type: "text" },
            { label: "PAN", name: "pan", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Mobile", name: "mobile", type: "tel" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          ))}

          {/* Address */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Address
            </label>
            <textarea
              name="address"
              rows="2"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              State
            </label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">-- Select State --</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Delhi">Delhi</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-700 to-indigo-600 hover:from-indigo-600 hover:to-blue-700 text-white font-semibold py-3 rounded-md shadow-lg transition"
          >
            🚀 Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
}
