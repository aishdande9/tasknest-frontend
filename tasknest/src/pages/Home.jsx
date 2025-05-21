// src/pages/Home.jsx
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
      <div className="text-center px-6 py-10 bg-white rounded-2xl shadow-lg max-w-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-4">Welcome to TaskNest</h1>
        <p className="text-gray-600 text-lg">
          Organize your tasks, track your productivity, and build better habits—all in one place.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
