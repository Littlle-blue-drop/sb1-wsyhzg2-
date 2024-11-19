import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, LogOut } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const isLoggedIn = location.pathname !== '/';

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">WriteRight</span>
            </Link>
          </div>
          
          {isLoggedIn && (
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors">
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;