"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import "../../assets/css/navbar.css"; // Import custom styles

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        {/* Brand Name */}
        <Link href="/" className="logo">
          LoopAI
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="menu-toggle"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <div className={`menu ${isOpen ? "open" : ""}`} id="navbar-default">
          <ul className="nav-links">
            {[
              { name: "Home", link: "/" },
              { name: "About", link: "/about" },
              { name: "Services", link: "/services" },
              { name: "Pricing", link: "/pricing" },
              { name: "Contact", link: "/contact" },
            ].map((item, index) => (
              <li key={index}>
                <Link href={item.link} className="nav-item">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
