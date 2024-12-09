import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer> {/* Use <footer> tag instead of <Footer> */}
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">

          {/* first section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">
              the coding journey
            </h1>
            <p className="text-dark2">
              A complete log of this run can be found in: C:\\Users\\wi
              nin\\AppData\\Local\\npm-cache\\_logs\\2024-12-09T08_30_42_092Z-debug-0.log
            </p>
          </div>

          {/* second section */}
          {/* third section */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
