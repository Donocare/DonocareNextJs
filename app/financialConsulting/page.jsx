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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8"
      >
        <h2 className="text-3xl font-extrabold text-center text-purple-700 mb-8">
          GST Registration Form
        </h2>

        {[
          { label: "Business Name", name: "businessName", type: "text" },
          { label: "PAN", name: "pan", type: "text" },
          { label: "Email", name: "email", type: "email" },
          { label: "Mobile", name: "mobile", type: "tel" },
        ].map((field) => (
          <div key={field.name} className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>
        ))}

        <div className="mb-5">
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Address
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            State
          </label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
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
          className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-md"
        >
          🚀 Submit
        </button>
      </form>
    </div>
  );
}
