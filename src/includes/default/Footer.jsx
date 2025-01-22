import React from 'react';
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Language as LanguageIcon,
} from '@mui/icons-material';
import image from '../../images/image.png';

const Footer = () => {
  return (
   <div className='mt-10 '>
    <footer className="bg-[#043B64] text-white py-8 md:px-12">
      {/* Main Footer Section */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & About Section */}
        <div className="flex flex-col items-center md:items-start">
        <div className="w-52 mb-4 font-bold flex  sm:text-2xl md:text-3xl text-white">
         TASKLY
        </div>
          <p className="text-sm text-center md:text-left">
            Taskify is your ultimate productivity tool. Stay organized, track tasks, and achieve your goals effortlessly with our task management app.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-500">Dashboard</a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">My Tasks</a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">Team Collaboration</a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">Support</a>
            </li>
          </ul>
        </div>

        {/* Connect with Us Section */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
          <p className="text-sm mb-4">
            Have questions or feedback? We're here to help!
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" aria-label="Facebook" className="text-white hover:text-yellow-400">
              <FacebookIcon fontSize="large" />
            </a>
            <a href="#" aria-label="Instagram" className="text-white hover:text-yellow-400">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-white hover:text-yellow-400">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="#" aria-label="Website" className="text-white hover:text-yellow-400">
              <LanguageIcon fontSize="large" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="border-t border-gray-400 mt-8 pt-4 text-center text-sm">
        <p>&copy; 2025 Taskify. All rights reserved.</p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
