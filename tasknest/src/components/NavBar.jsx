// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-indigo-600">TaskNest</h1>
      <div className="space-x-4">
        <Link to="/" className="text-indigo-600 hover:underline">
          Home
        </Link>
        <Link to="/form" className="text-indigo-600 hover:underline">
          CreateForm
        </Link>
        <Link to="/tasks" className="text-indigo-600 hover:underline">
          Tasks
        </Link>
        <Link to="/login" className="text-indigo-600 hover:underline">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
