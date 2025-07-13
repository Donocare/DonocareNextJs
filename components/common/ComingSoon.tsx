import React from "react";
import { motion } from "framer-motion";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-pink-500 to-red-400 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-10 max-w-md text-center border border-white/20"
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl font-bold text-white mb-4"
        >
          🚀 Coming Soon
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-white text-lg mb-6"
        >
          We’re working hard to bring something amazing! Stay tuned.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <button className="bg-white text-purple-700 font-semibold hover:bg-gray-100 rounded-xl">
            Notify Me
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
