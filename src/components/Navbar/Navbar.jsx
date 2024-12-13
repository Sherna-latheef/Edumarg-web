import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import Logo from "../../assets/logo.png";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    link: "#",
  },
  {
    id: 3,
    title: "About Us",
    link: "#",
  },
  {
    id: 4,
    title: "Our Team",
    link: "#",
  },
  {
    id: 5,
    title: "Contact Us",
    link: "#",
  },
];

const Navbar = () => {
  // State to control whether the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-6 flex justify-between items-center"
      >
        {/* Logo section */}
        <div>
          <img
            src={Logo} 
            alt="Logo"
            className="h-20, w-20"
          />
        </div>

        {/* Desktop Menu section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  <div
                    className=" bg-secondary absolute mt-2
                           bottom-0 group-hover:block hidden"
                  ></div>
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Hamburger Section */}
        <div className="lg:hidden">
          <IoMdMenu
            className="text-4xl cursor-pointer"
            onClick={toggleMenu} // Toggle menu when clicked
          />
        </div>
      </motion.div>

      {/* Mobile Menu Section */}
      <div
        className={`lg:hidden absolute top-0 right-0 w-[100%] bg-white text-black transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        {/* Close Button (Cross) */}
        <div className="absolute top-4 left-4">
          <IoMdClose
            className="text-lg cursor-pointer"
            onClick={toggleMenu} // Close the menu when clicked
          />
        </div>

        {/* Menu Items (Horizontal Layout) */}
        <ul className="flex items-center justify-around py-8 space-x-6">
          {NavbarMenu.map((menu) => (
            <li key={menu.id}>
              <a
                href={menu.path}
                className="text-sm font-semibold hover:text-secondary"
                onClick={toggleMenu} // Close the menu when a link is clicked
              >
                {menu.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
