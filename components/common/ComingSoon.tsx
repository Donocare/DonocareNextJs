'use client';
import React, { useEffect, useState } from "react";

const ComingSoon = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen   bg-gradient-to-br from-purple-700 via-pink-500 to-red-400 flex items-center justify-center px-4" style={{scrollbarWidth:"none"}}>
      <div
        className={`bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-10 max-w-md text-center border border-white/20 transform transition-all duration-700 ease-out ${
          show ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <h1
          className={`text-4xl font-bold text-white mb-4 transition-all  duration-700 ease-out ${
            show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          🚀 Coming Soon
        </h1>

        <p
          className={`text-white text-lg mb-6 transition-all duration-700 capitalize font-medium ease-out delay-200 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          We’re working hard to bring something amazing! Stay tuned.
        </p>

        {/* <div
          className={`transition-opacity duration-700 ease-out delay-500 ${
            show ? "opacity-100" : "opacity-0"
          }`}
        >
          <button className="bg-white text-purple-700 font-semibold hover:bg-gray-100 rounded-xl px-6 py-2">
            Notify Me
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ComingSoon;
