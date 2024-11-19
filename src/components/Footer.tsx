import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center space-x-2 text-gray-600">
          <span>Made with</span>
          <Heart className="h-4 w-4 text-red-500 fill-current" />
          <span>for better writing</span>
        </div>
        <div className="text-center text-sm text-gray-500 mt-2">
          © {new Date().getFullYear()} WriteRight. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;