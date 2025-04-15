import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <ul className="flex space-x-6 justify-center">
        <li>
          <NavLink
            to="/all-orders"
            className={({ isActive }) =>
              `text-white hover:text-blue-300 transition-colors duration-200 ${
                isActive ? 'text-blue-400 font-bold' : ''
              }`
            }
          >
            All Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/booking"
            className={({ isActive }) =>
              `text-white hover:text-blue-300 transition-colors duration-200 ${
                isActive ? 'text-blue-400 font-bold' : ''
              }`
            }
          >
            Booking
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/diesel"
            className={({ isActive }) =>
              `text-white hover:text-blue-300 transition-colors duration-200 ${
                isActive ? 'text-blue-400 font-bold' : ''
              }`
            }
          >
            Diesel
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/landing"
            className={({ isActive }) =>
              `text-white hover:text-blue-300 transition-colors duration-200 ${
                isActive ? 'text-blue-400 font-bold' : ''
              }`
            }
          >
            Landing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/new-orders"
            className={({ isActive }) =>
              `text-white hover:text-blue-300 transition-colors duration-200 ${
                isActive ? 'text-blue-400 font-bold' : ''
              }`
            }
          >
            New Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/vehical"
            className={({ isActive }) =>
              `text-white hover:text-blue-300 transition-colors duration-200 ${
                isActive ? 'text-blue-400 font-bold' : ''
              }`
            }
          >
            Vehical
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;