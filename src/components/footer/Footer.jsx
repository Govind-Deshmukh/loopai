import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        {/* Logo & About */}
        <div>
          <h3 className="text-lg font-semibold mb-2">LoopAI</h3>
          <p
            className="text-gray-400 leading-tight"
            style={{
              fontSize: "1.2rem",
            }}
          >
            AI-powered video production, transforming content creation with
            efficiency and precision.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Subscribe to our Newsletter
          </h3>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-gray-200 bg-gray-800 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="bg-blue-500 hover:bg-blue-600 transition text-white font-semibold py-2 rounded-lg">
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 text-2xl">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} LoopAI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
