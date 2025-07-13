'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const ComingSoon = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-700 via-pink-500 to-red-400 flex items-center justify-center px-4 overflow-hidden">
      <button
        onClick={() => router.back()}
        className="absolute top-5 left-5 bg-white/20 hover:bg-white/30 backdrop-blur-lg text-white rounded-full p-2 transition-colors duration-300 shadow-md"
        aria-label="Go back"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div
        className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl px-8 py-12 max-w-lg w-full text-center transform transition-all duration-700 ease-out ${
          show ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        <h1
          className={`text-3xl md:text-5xl font-extrabold text-white mb-5 tracking-tight transition-all duration-700 ease-out ${
            show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          🚀 Coming Soon
        </h1>
        <p
          className={`text-white text-lg font-medium mb-8 transition-all duration-700 ease-out delay-150 ${
            show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          We're building something amazing. Stay tuned for the big reveal!
        </p>

      </div>
    </div>
  );
};

export default ComingSoon;
